import re
import os
import json
import urllib.request
from bs4 import BeautifulSoup


def get_tag_text(html_content: BeautifulSoup, tag_name: str) -> str:
    return ''.join(str(tag) for tag in html_content.find_all(tag_name))


class DayData:

    def __init__(self, deaths: int, injuries: int, displaced: int,
                 buildings: int, captured: int):
        self.deaths = deaths
        self.injuries = injuries
        self.displaced = displaced
        self.buildings = buildings
        self.captured = captured

    """
    The numbers are stored somewhere in the HTML page in a script block containing something like this:

    ```
    <!-- Lots of text -->

    document.addEventListener("DOMContentLoaded", () => {
     counterAnim("#Mat", 10, 14757, 1000);
     counterAnim("#jareeh", 5000, 37850, 1500);
     counterAnim("#Nazeh", 1000, 1650000, 2000);
     counterAnim("#build", 500, 233000, 2500);
     counterAnim("#aseer", 500, 3035, 2500);
    });

    <!-- Lots of text -->
    ```

    `counterAnim(.*)` appears inside other tags, but we only care about the script
    tags since they seem the easiest to parse. We extract the `counterAnim` calls,
    then we extract the numbers and dump them into a file.
    """

    def from_day_html(html_content: BeautifulSoup):
        scripts = get_tag_text(html_content, "script")

        COUNTER_ANIM_PATTERN = r'counterAnim\(.*?\);'
        NUMBER_PATTERN = r'counterAnim\(\S+, \S+, (\d+), \S+\)'

        counter_anim_calls = re.findall(COUNTER_ANIM_PATTERN, scripts)
        deaths, injuries, displacements, buildings, captures = [
            int(re.findall(NUMBER_PATTERN, call)[0])
            for call in counter_anim_calls
        ]

        return DayData(deaths, injuries, displacements, buildings, captures)


def get_date(html_content: BeautifulSoup):
    DATE_PATTERN = r'(\d+/\d+/\d+)'

    h3 = get_tag_text(html_content, "h3")
    date = re.findall(DATE_PATTERN, h3)[0]

    return date


with urllib.request.urlopen("https://www.pcbs.gov.ps/default.aspx") as request:
    html_string = request.read().decode("utf8")
    html_content = BeautifulSoup(html_string, features="lxml")

    day_data = DayData.from_day_html(html_content)
    date = get_date(html_content)

    JSON_FILE_NAME = "pcbs_data.json"
    if not os.path.exists(JSON_FILE_NAME):
        print(f"{JSON_FILE_NAME} not found, creating it...")

        # Just create the file
        with open(JSON_FILE_NAME, "w+"):
            pass

    # Read whatever's inside, as well as allow for writing
    with open(JSON_FILE_NAME, "r+") as f:
        # If the file is empty, create an empty dict. Otherwise, read and parse it
        f_text = f.read()
        json_file = {} if (len(f_text) == 0) else json.loads(f_text)

        if (date in json_file):
            print(
                f"Data for day {date} already exists! Will not record fetched data."
            )
            exit(1)

        json_file[date] = day_data.__dict__
        f.write(json.dumps(json_file, indent=4))
        print(f"Data for {date} added to {JSON_FILE_NAME}")
