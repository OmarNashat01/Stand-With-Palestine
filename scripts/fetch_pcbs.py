import re
import os
import json
import urllib.request
import time

from bs4 import BeautifulSoup
from typing import Dict
from argparse import ArgumentParser


def get_tag_text(html_content: BeautifulSoup, tag_name: str) -> str:
    """
    Finds all instances of a certain tag, converts them to strings, and concatenates them.
    """
    return ''.join(str(tag) for tag in html_content.find_all(tag_name))


def get_html(url: str) -> BeautifulSoup:
    """
    Fetches the HTML content of the given URL.
    """
    with urllib.request.urlopen(url) as request:
        html_string = request.read().decode("utf8")
        return BeautifulSoup(html_string, features="lxml")


def get_counter_anim_numbers(
        url: str, html_elements_to_keys: Dict[str, str]) -> Dict[str, int]:
    """
        Given a URL, and a dict that maps locations to json names, fetches the `counterAnim` data from its script tags 
        and places each number under the proper json name. 

        NOTE: that each page (Martyrs, Injuired, etc..) has a set of `counterAnim` 
        calls that contain the data for each subgroup.

        NOTE: `counterAnim(.*)` appears inside other tags, but we only care about the script
        tags since they seem the easiest to parse. We extract the `counterAnim` calls,
        then we extract the numbers and dump them into a file.

        Example HTML from expanded martyr page:
        ```
        <!-- Lots of HTML/JS ... -->

        document.addEventListener("DOMContentLoaded", () => {
        counterAnim("#MartGaza", 100, 14854, 2000);
        counterAnim("#KidsGaza", 100, 6150, 2000);
        // other counterAnim calls...
        });

        <!-- Lots of HTML/JS ... -->
        ```

        Given the HTML containing the above snippet and `{ "MartGaza" : "total_martyrs", "KidsGaza": "kids_gaza" }`, 
        should return `{ "total_martyrs": 14854, "kids_gaza": 6150 }`.
    """
    html_content = get_html(url)
    scripts = get_tag_text(html_content, "script")

    def number_pattern(key: str):
        return fr'.*counterAnim\("#{key}", \S+, (\d+), \S+\)'

    return {
        key: int(re.findall(number_pattern(element), scripts)[0])
        for element, key in html_elements_to_keys.items()
    }


def get_martyr_data() -> Dict[str, int]:
    """
    NOTE: Website doesn't mention whether "missing" is a total or a subgroup (men, elderly, etc...). I think it's safe 
    to assume it's the total.
    """

    # Obtained by visiting `pcbs.gov.ps` and clicking on each label (Martyrs in this case)
    DATA_URL = "https://www.pcbs.gov.ps/site/lang__en/1405/Default.aspx"

    # Obtained by manually inspecting the page HTML ( thanks ctrl-f :) )
    # Maps from a location tag to the name in the json (just in case they update the location tags, will just need to
    # update this script and not the rest of the code reading the data).
    html_elements_to_keys = {
        "MartGaza": "total_gaza",
        "KidsGaza": "kids_gaza",
        "MartWomanGaza": "women_gaza",
        "MartWB": "total_west",
        "MartOld": "elderly_gaza",
        "Doctors": "medical",
        "press": "press",
        "teacher": "educational",
        "UN": "un",
        "WBKidsMart": "kids_west",
        "CivilDef": "civil_defence",
        "MissingKids": "missing_kids_women",
        "Missing": "missing"
    }

    print("Fetching martyr data...")
    return get_counter_anim_numbers(DATA_URL, html_elements_to_keys)


def get_injuired_data() -> Dict[str, int]:
    DATA_URL = "https://www.pcbs.gov.ps/site/lang__en/1406/Default.aspx"
    html_elements_to_keys = {
        "InjuredGaza": "total_gaza",
        "InjuredWB": "total_west",
        "InjuredGazaKids": "kids_gaza",
        "InjuredWBKids": "kids_west"
    }

    print("Fetching injured data...")
    return get_counter_anim_numbers(DATA_URL, html_elements_to_keys)


def get_date() -> str:
    """
    NOTE: We get all three since they appear in the main page. Detainees and displaced have no "extra info" page.
    """
    DATA_URL = "https://www.pcbs.gov.ps/default.aspx"

    print("Fetching last update date...")

    with urllib.request.urlopen(DATA_URL) as request:
        html_string = request.read().decode("utf8")
        html_content = BeautifulSoup(html_string, features="lxml")

        DATE_PATTERN = r'(\d+/\d+/\d+)'
        h3 = get_tag_text(html_content, "h3")
        date = re.findall(DATE_PATTERN, h3)[0]

        return date


def get_displaced_data() -> Dict[str, int]:
    DATA_URL = "https://www.pcbs.gov.ps/default.aspx"
    html_elements_to_keys = {"Nazeh": "displaced"}

    print("Fetching displaced data...")
    return get_counter_anim_numbers(DATA_URL, html_elements_to_keys)

def get_detained_data() -> Dict[str, int]:
    DATA_URL = "https://www.pcbs.gov.ps/site/lang__en/1409/Default.aspx"

    # Note that these elements are not displayed, but are still present in the HTML data.
    html_elements_to_keys = {"AseerWB": "west", "AseerGaza": "gaza"}

    print("Fetching detained data...")
    return get_counter_anim_numbers(DATA_URL, html_elements_to_keys)


def get_destroyed_building_data() -> Dict[str, int]:
    DATA_URL = "https://www.pcbs.gov.ps/site/lang__en/1408/Default.aspx"
    html_elements_to_keys = {
        "DamagedUnits": "damaged_housing_units",
        "hospitaloutser": "out_of_service_hospital",
        "DestBuilding": "destroyed_buildings",
        "DestUnits": "destroyed_housing_units",
        "DamagedHospitals": "damaged_hospital",
        "Church": "destroyed_church",
        "Masjed": "destroyed_mosque",
        "ministries": "destroyed_government_headquarters",

        # Not displayed in the browser for some reason
        "Media": "media",
        "School": "destroyed_school",
        "Schoolp": "partially_destroyed_school",
        "ambulanace": "destroyed_ambulances"
    }

    print("Fetching building data...")
    return get_counter_anim_numbers(DATA_URL, html_elements_to_keys)


if __name__ == '__main__':
    argparser = ArgumentParser()
    argparser.add_argument("output_path")
    args = argparser.parse_args()

    for i in range(100):
        try:
            date = get_date()
            martyr_data = get_martyr_data()
            injured_data = get_injuired_data()
            displaced_data = get_displaced_data()
            destroyed_building_data = get_destroyed_building_data()
            detained_data = get_detained_data()

            day_data = {
                "martyr_data": martyr_data,
                "injured_data": injured_data,
                "building_data": destroyed_building_data,
                "detained_data": detained_data,
                "version": "1.1",
                **displaced_data
            }

            JSON_FILE_NAME = args.output_path
            if not os.path.exists(JSON_FILE_NAME):
                print(f"{JSON_FILE_NAME} not found, will create it it...")

                # Just create an empty file
                with open(JSON_FILE_NAME, "w+") as f:
                    f.write("{}")

            # Read whatever's inside, as well as allow for writing
            json_file = None
            with open(JSON_FILE_NAME, "r") as f:
                # If the file is empty, create an empty dict. Otherwise, read and parse it
                f_text = f.read()
                json_file = {} if (len(f_text) == 0) else json.loads(f_text)

                if (date in json_file):
                    print(
                        f"Data for day {date} already exists! Will not record fetched data."
                    )
                    exit(0)

            with open(JSON_FILE_NAME, "w") as f:
                json_file[date] = day_data
                f.write(json.dumps(json_file, indent=4))
                print(f"Data for {date} added to {JSON_FILE_NAME}")

            exit(0)
        except urllib.error.URLError:
            print(f"[{i+1}/100] Failed to connect to PCBS, sleeping for 0.5 seconds...")
            time.sleep(0.5)

    print("Failed to connect to PCBS for 100 times (50 seconds), aborting....")
    exit(1)
