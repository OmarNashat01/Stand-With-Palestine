import { useCallback, useEffect, useState } from "react";

type DayData  = {
    martyr: Map<string, number>,
    injured: Map<string, number>,
    building: Map<string, number>,
    displaced: number,
    detained_west: number
};

function parseDayData(dayData: any): DayData {
    return {
	martyr: new Map<string, number>(Object.entries(dayData.martyr_data)),
	injured: new Map<string, number>(Object.entries(dayData.injured_data)),
	building: new Map<string, number>(Object.entries(dayData.building_data)),
	displaced: Number.parseInt(dayData.displaced),
	detained_west: Number.parseInt(dayData.detained_west),
    };
}

class PCBSData {
    allDays: Map<string, DayData>;

    constructor(jsonData: any) {
	this.allDays = new Map();
	for(let [day, data] of Object.entries(jsonData)) {
	    this.allDays.set(day, parseDayData(data));
	}
    }
};

function parseDate(date: string): Date {
    const dateParts = date.split('/');
    const day = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10);
    const year = parseInt(dateParts[2], 10);

    return new Date(year, month - 1, day);
}


function getMostRecentDay(data: PCBSData) {
    const dates = Array.from(data.allDays.keys());
    const mostRecentStr = dates
	.sort((d1, d2) => {
	    const date1 = parseDate(d1).valueOf();
	    const date2 = parseDate(d2).valueOf();

	    if(date1 > date2) {
		return -1;
	    } else if (date1 < date2) {
		return 1;
	    } else {
		return 0;
	    }

	})[0];

    const formatDate = (date: Date): string => {
	return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
    };
    const yesterdayStr = formatDate(new Date(new Date().setDate(new Date().getDate()-1)));

    if(yesterdayStr in dates) {
	return [mostRecentStr, yesterdayStr];
    }

    // If we don't have the previous day, then no changes since yesterday.
    // Hence, all fields should be zeroed (thing - thing = 0).
    return [mostRecentStr, mostRecentStr];
}

function getGazaData(dayData: DayData | undefined) {
    if(!dayData) { 
	return {};
    }

    const gMart = dayData?.martyr!;
    const gInj = dayData?.injured!;
    return {
	killed: gMart.get("total_gaza")!,
	killedKids:  gMart.get("kids_gaza")!,
	killedWomen: gMart.get("women_gaza")!,
	killedElder: gMart.get("elderly_gaza")!,
	killedMen: (
		gMart.get("total_gaza")! - (
		    gMart.get("kids_gaza")! + 
		    gMart.get("women_gaza")! +
		    gMart.get("elderly_gaza")!
		    )
		),
	killedMedical: gMart.get("medical")!,
	killedUN: gMart.get("un")!,
	killedEdu: gMart.get("educational")!,
	killedPress: gMart.get("press")!,

	injured: gInj.get("total_gaza")!,
	injuredKids: gInj.get("kids_gaza")!,
	injuredAdults: gInj.get("total_gaza")! - gInj.get("kids_gaza")!,

	missing: gMart.get("missing")!,

	// TODO: Need to change the UI to reflect that this is missing kids + women
	missingKidsAndWomen: gMart.get("missing_kids_women")!,

	// TODO: Need to also reflect that this is the men
	missingMen: gMart.get("missing")! - gMart.get("missing_kids_women")!,

	displaced: dayData?.displaced! / 1_000_000,
	hospitalsDown: dayData?.building.get("out_of_service_hospital")!,

	funds: 14.3,
	electricity: "OFF",
	water: "OFF",
	fuel: "OFF",
	internet: "WEAK",
    }

}

function getWestBankData(dayData: DayData | undefined) {
    if(!dayData) { 
	return {};
    }

    const mart = dayData?.martyr!;
    const inj = dayData?.injured!;
    return {
	killed: mart.get("total_west")!,
	killedKids: mart.get("kids_west")!,
	killedAdults: mart.get("total_west")! - mart.get("kids_west")!,

	injured: inj.get("total_west")!,
	injuredKids: inj.get("kids_west")!,
	injuredAdults: inj.get("total_west")! - inj.get("kids_west")!,

	detained_west: dayData.detained_west!
    }

}

function computeDictDelta(dayDict: any, prevDayDict: any) {
    if(!dayDict || !prevDayDict) {
	return {};
    } 

    var deltaDict: any = {};
    for(let key of Object.keys(dayDict)) {
	if(typeof(dayDict[key]) == "object") {
	    deltaDict[key] = computeDictDelta(dayDict[key], prevDayDict[key]);
	} else if(typeof(dayDict[key]) == "number" && typeof(prevDayDict[key]) == "number") {
	    deltaDict[key] = dayDict[key] - prevDayDict[key];
	} else {
	    deltaDict[key] = dayDict[key];
	}
    }

    return deltaDict;
}

function getInfraData(dayData: DayData) {
    const b = dayData.building;
    return {
	damagedHomes: b.get("damaged_housing_units")!,
	destroyedHomes: b.get("destroyed_housing_units")!,
	damagedHospitals: b.get("damaged_hospital")!,
	destroyedAmbulances: b.get("destroyed_ambulances")!,
	damagedSchools: b.get("partially_destroyed_school")!,
	destroyedSchools: b.get("destroyed_school")!,
	destroyedChurches: b.get("destroyed_church")!,
	destroyedMosques: b.get("destroyed_mosque")!
    };
}

function getDeathRatios(dayData: DayData) {
    const total_all = dayData.martyr.get("total_gaza")! + dayData.martyr.get("total_west")!
    const total_children = dayData.martyr.get("kids_gaza")! + dayData.martyr.get("kids_west")!;
    const total_women = dayData.martyr.get("women_gaza")!;
    const total_elderly = dayData.martyr.get("elderly_gaza")!;
    const total_men = total_all - (total_children + total_women + total_elderly);

    return {
      labels: ["Children", "Women", "Elderly", "Men"],
      datasets: [
	{
	  label: "Fatalities",
	  data: [total_children, total_women, total_elderly, total_men],
	  backgroundColor: "#d60a0aaa",
	  borderColor: "#d60a0a",
	  borderWidth: 1,
	},
      ],
    };
}

function getHomeData(dayData: DayData) {
    // Assumed constant over a long period of time. 
    // PCBS doesn't seem to publish it.
    const totalHomes = 582000;

    const damagedHomes = dayData.building.get("damaged_housing_units")!;
    const destroyedHomes = dayData.building.get("destroyed_housing_units")!;
    const destroyedPercentage = ((damagedHomes + destroyedHomes) / totalHomes);

    return {
      labels: ["Damaged or Destroyed", "Not Yet"],
      datasets: [
	{
	  label: "Percentage of House Units Affected",
	  data: [
	    destroyedPercentage * 100,
	    (1 - destroyedPercentage) * 100,
	  ],
	  backgroundColor: ["#990a0a88", "#d60a0a88"],
	  borderColor: ["#990a0a", "#d60a0a"],
	  borderWidth: 1,
	},
      ],
    };
}

function formatLastUpdatedDate(latestDate: string): string {
    const getDaySuffix = (day: number) => {
	if (day >= 11 && day <= 13) {
	    return 'th';
	}

	switch (day % 10) {
	    case 1:
		return 'st';
	    case 2:
		return 'nd';
	    case 3:
		return 'rd';
	    default:
		return 'th';
	}
    };

    const formatDate = (date: Date) => {
	const options: any = { month: 'long'};
	const monthStr = date.toLocaleString('default', options);

	const daySuffix = getDaySuffix(date.getDate());
	const formattedDateString = `${date.getDate()}${daySuffix} of ${monthStr}, ${date.getFullYear()}`;

	return formattedDateString;
    };

    return formatDate(parseDate(latestDate));

}

export async function readPcbsData() { 
    const response = await fetch('./pcbs_data.json', {
      headers: {
	"Content-Type": "application/json",
	Accept: "application/json"
      }
    });
    const pcbsData = new PCBSData(await response.json());
    const [latestDate, beforeLatestDate] = getMostRecentDay(pcbsData);
    const [latestData, beforeLatestData] = [ pcbsData.allDays.get(latestDate), pcbsData.allDays.get(beforeLatestDate) ];

    const gazaDict = getGazaData(latestData);
    const prevDayGazaDict = getGazaData(beforeLatestData);
    const gazaDictToday = computeDictDelta(gazaDict!, prevDayGazaDict);

    const westBankDict = getWestBankData(latestData);
    const prevDayWestBankDict = getWestBankData(beforeLatestData);
    const westBankDictToday = computeDictDelta(westBankDict, prevDayWestBankDict);


    const infraDict = getInfraData(latestData!);
    const deathRatiosData = getDeathRatios(latestData!);
    const homeData = getHomeData(latestData!);

    const lastUpdated = formatLastUpdatedDate(latestDate);

    return [gazaDict, gazaDictToday, westBankDict, westBankDictToday, infraDict, deathRatiosData, homeData, lastUpdated];
}

export const historyData = {
  labels: [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ],
  datasets: [
    {
      label: "Israeli Fatalities",
      data: [33, 11, 8, 11, 7, 6, 88, 26, 12, 17, 13, 12, 3, 11, 21, 29],
      backgroundColor: "#990a0a",
    },
    {
      label: "Palestinian Fatalities",
      data: [
        899, 1066, 95, 124, 260, 39, 2329, 174, 109, 77, 300, 138, 30, 349, 191,
        227,
      ],
      backgroundColor: "#d60a0a",
    },
  ],
};

export const recentData = {
  labels: [
    "1", "2", "3", "4", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
    "19", "20", "21", "22", "23", "26", "27",
  ],
  datasets: [
    {
      label: "Killed Children",
      data: [
	  3648, 3760, 3826, 3900, 4104, 4237, 4324, 4324, 4506, 4506, 4506, 4630, 4630,
	  4630, 5500, 5600, 5600, 6000, 6150, 6150, 6150,
      ],
      backgroundColor: "#990a0a",
      borderColor: "#990a0aaa",
    },
    {
      label: "Killed Palestinians",
      data: [
	  8796, 9061, 9227, 9488, 10022, 10328, 10569, 10569, 11078, 11078, 11078, 11240,
	  11240, 11240, 13000, 13300, 14128, 14532, 14854, 14854, 15000,
      ],
      backgroundColor: "#d60a0a",
      borderColor: "#d60a0aaa",
    },
  ],
};

export const faqData = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "1. What Are The Sources of the Numbers Above? ",
      content: "These numbers are updated daily with data published on the Palestinian Central Bureau of Statistics (PCBS) website. The bureau is independent from the government; however, most if not all humanatirian metrics are first recorded by the ministry of health in an office at Al-Shifa hospital. Note that the numbers for the cumulative sum of adult and child martyrs were sourced from the daily coverage of AlJazeera."
    },
    {
      title: "1. What is 'Recent Only'? ",
      content: "This page is updated every day at 11:00 PM UTC from the PCBS. Most of the time 'Recent Only' will mean 'Today Only' provided that PCBS did not miss an update yesterday; this usually holds unless a truce or pause is going on."
    },
    {
      title: "2. Should I Trust the Numbers Given by the Ministry Given That It's \"Hamas-Controlled\"?",
      content: "Despite being administered by Hamas, employees in the health ministry insist that Hamas does not dictate any figures. Data from all hospitals and morgues is collected in a format with name, ID number, date of hospital entry, type of injury, condition and is then reported to the main office at Al Shifa hospital. The health ministry in the West Bank also double checks the results. More importantly, in previous wars, the ministry’s counts have held up to U.N. scrutiny, independent investigations and even Israel’s tallies. Michael Ryan, of the World Health Organization’s said \"The numbers may not be perfectly accurate on a minute-to-minute basis, but they largely reflect the level of death and injury \""
    },
    {
      title: "3. What Lies Behind These Numbers?",
      content: "Excruciating pain. Palestinians are killed by incinerating in bomb fire and/or entire buildings fall on them. "
    },
    {
      title: "4. What Happened to The Missing People in Gaza?",
      content: "It takes extremely significant effort to look for one of your relatives under rubble, only to find that they are dead, possibly with missing body parts. In some cases, it is impossible to move the rubble or dig by hand to find you relative. These are believed to be most of the missing cases. This is worse than being killed because in Islam, Muslims should buried facing Mecca after cleaning and praying rituals. "
    }]
}
