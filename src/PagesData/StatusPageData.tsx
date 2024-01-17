type DayData = {
	martyr_data: {
		total_gaza: number,
		kids_gaza: number,
		women_gaza: number,

		total_west: number,
		elderly_gaza: number,
		medical: number,
		press: number,
		educational: number,
		un: number,
		kids_west: number,
		civil_defence: number,
		missing_kids_women: number,
		missing: number
	},
	injured_data: {
		total_gaza: number,
		total_west: number,
		kids_gaza: number,
		kids_west: number
	},
	building_data: {
		damaged_housing_units: number,
		out_of_service_hospital: number,
		destroyed_buildings: number,
		destroyed_housing_units: number,
		damaged_hospital: number,
		destroyed_church: number,
		destroyed_mosque: number,
		destroyed_government_headquarters: number,
		media: number,
		destroyed_school: number,
		partially_destroyed_school: number,
		destroyed_ambulances: number
	},
	detained_data: {
		west: number,
		gaza: number
	},
	displaced: number,
};

function parseDayData(dayData: any): DayData {
	return dayData as DayData;
}

class PCBSData {
	allDays: Map<string, DayData>;

	constructor(jsonData: any) {
		this.allDays = new Map();
		for (let [day, data] of Object.entries(jsonData)) {
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


function getTheTwoMostRecentDays(data: PCBSData) {
	const dates = Array.from(data.allDays.keys());
	const [mostRecent, secondMostRecent] = dates
		.sort((d1, d2) => {
			const date1 = parseDate(d1).valueOf();
			const date2 = parseDate(d2).valueOf();

			if (date1 > date2) {
				return -1;
			} else if (date1 < date2) {
				return 1;
			} else {
				return 0;
			}

		}).slice(0, 2);

	return [mostRecent, secondMostRecent];
}

function getGazaData(dayData: DayData | undefined) {
	if (!dayData) {
		return {};
	}

	const gMart = dayData?.martyr_data;
	const gInj = dayData?.injured_data;
	return {
		killed: gMart.total_gaza,
		killedKids: gMart.kids_gaza,
		killedWomen: gMart.women_gaza,
		killedElder: gMart.elderly_gaza,
		killedMen: (
			gMart.total_gaza - (
				gMart.kids_gaza +
				gMart.women_gaza +
				gMart.elderly_gaza
			)
		),
		killedMedical: gMart.medical,
		killedUN: gMart.un,
		killedEdu: gMart.educational,
		killedPress: gMart.press,

		injured: gInj.total_gaza,
		injuredKids: gInj.kids_gaza,
		injuredAdults: gInj.total_gaza - gInj.kids_gaza,

		missing: gMart.missing,

		// TODO: Need to change the UI to reflect that this is missing kids + women
		missingKidsAndWomen: gMart.missing_kids_women,

		// TODO: Need to also reflect that this is the men
		missingMen: gMart.missing - gMart.missing_kids_women,

		displaced: dayData.displaced / 1_000_000,
		hospitalsDown: dayData.building_data.out_of_service_hospital,

		detained: dayData.detained_data.gaza,

		funds: 14.3,
		electricity: "OFF",
		water: "OFF",
		fuel: "OFF",
		internet: "WEAK",
	}

}

function getWestBankData(dayData: DayData | undefined) {
	if (!dayData) {
		return {};
	}

	const mart = dayData.martyr_data;
	const inj = dayData.injured_data;
	return {
		killed: mart.total_west,
		killedKids: mart.kids_west,
		killedAdults: mart.total_west - mart.kids_west,

		injured: inj.total_west,
		injuredKids: inj.kids_west,
		injuredAdults: inj.total_west - inj.kids_west,

		detained: dayData.detained_data.west
	}

}

function computeDictDelta(dayDict: any, prevDayDict: any) {
	if (!dayDict || !prevDayDict) {
		return {};
	}

	var deltaDict: any = {};
	for (let key of Object.keys(dayDict)) {
		if (typeof (dayDict[key]) == "object") {
			deltaDict[key] = computeDictDelta(dayDict[key], prevDayDict[key]);
		} else if (typeof (dayDict[key]) == "number" && typeof (prevDayDict[key]) == "number") {
			deltaDict[key] = Math.max(dayDict[key] - prevDayDict[key], 0); 	// Disallow negatives
		} else if (dayDict[key] === undefined || prevDayDict[key] === undefined) {
			// Current or previous day are missing a field
			deltaDict[key] = 0;
		} else {
			deltaDict[key] = dayDict[key];
		}
	}

	return deltaDict;
}

function getInfraData(dayData: DayData) {
  const b = dayData.building_data;
  return {
    damagedHomes: b.damaged_housing_units,
    destroyedHomes: b.destroyed_housing_units,
    damagedHospitals: b.damaged_hospital,
    destroyedAmbulances: b.destroyed_ambulances,
    damagedSchools: b.partially_destroyed_school,
    destroyedSchools: b.destroyed_school,
    destroyedChurches: b.destroyed_church,
    destroyedMosques: b.destroyed_mosque
  };
}

function getDeathRatios(dayData: DayData) {
	const total_all = dayData.martyr_data.total_gaza + dayData.martyr_data.total_west;
	const total_children = dayData.martyr_data.kids_gaza + dayData.martyr_data.kids_west;
	const total_women = dayData.martyr_data.women_gaza;
	const total_elderly = dayData.martyr_data.elderly_gaza;
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

	const damagedHomes = dayData.building_data.damaged_housing_units;
	const destroyedHomes = dayData.building_data.destroyed_housing_units;
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
		const options: any = { month: 'long' };
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
	const [latestDate, beforeLatestDate] = getTheTwoMostRecentDays(pcbsData);
	const [latestData, beforeLatestData] = [pcbsData.allDays.get(latestDate), pcbsData.allDays.get(beforeLatestDate)];

	const gazaDict = getGazaData(latestData);
	const prevDayGazaDict = getGazaData(beforeLatestData);
	const gazaDictRecent = computeDictDelta(gazaDict!, prevDayGazaDict);

	const westBankDict = getWestBankData(latestData);
	const prevDayWestBankDict = getWestBankData(beforeLatestData);
	const westBankDictRecent = computeDictDelta(westBankDict, prevDayWestBankDict);

	const infraDict = getInfraData(latestData!);
	const deathRatiosData = getDeathRatios(latestData!);
	const homeData = getHomeData(latestData!);

	const lastUpdated = formatLastUpdatedDate(latestDate);

	return [gazaDict, gazaDictRecent, westBankDict, westBankDictRecent, infraDict, deathRatiosData, homeData, lastUpdated];
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
	  '1', '3', '5', '7', '8', '9', '10', '12', '13', '14', '17', '18', '19',
	  '20', '22', '23', '24', '26', '27', '29', '30', '31'
	],
	datasets: [
		{
			label: "Killed Children",
			data: [
			  6213, 6664, 6664, 7795, 7937, 7938, 7943, 8070, 8071, 8073, 8073,
			  8075, 8075, 8076, 8076, 8276, 8276, 8277, 8878, 8960, 9080, 9080
			],
			backgroundColor: "#990a0a",
			borderColor: "#990a0aaa",
		},
		{
			label: "Killed Palestinians",
			data: [
			  15428, 15777, 16159, 17444, 17762, 17975, 18272, 18694, 18891, 19074,
			  19097, 19754, 19968, 20303, 20360, 20561, 20727, 21220, 21422, 21825,
			  21991, 22141
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
			content: "These numbers are updated daily with data published on the Palestinian Central Bureau of Statistics (PCBS) website. The bureau is independent from the government; however, most if not all humanatirian metrics are first recorded by the ministry of health in an office at Al-Shifa hospital. Note that the numbers for the graph of adult and child martyrs were sourced from the daily coverage of AlJazeera."
		},
		{
			title: "2. What is 'Recent Only'? ",
			content: "This page is updated every day at 11:00 PM UTC from the PCBS. Most of the time 'Recent Only' will mean 'Today Only' provided that PCBS did not miss an update yesterday; this usually holds unless a truce or pause is going on."
		},
		{
			title: "3. Should I Trust the Numbers Given by the Ministry Given That It's \"Hamas-Controlled\"?",
			content: "Despite being administered by Hamas, employees in the health ministry insist that Hamas does not dictate any figures. Data from all hospitals and morgues is collected in a format with name, ID number, date of hospital entry, type of injury, condition and is then reported to the main office at Al Shifa hospital. The health ministry in the West Bank also double checks the results. More importantly, in previous wars, the ministry’s counts have held up to U.N. scrutiny, independent investigations and even Israel’s tallies. Michael Ryan, of the World Health Organization’s said \"The numbers may not be perfectly accurate on a minute-to-minute basis, but they largely reflect the level of death and injury \""
		},
		{
			title: "4. What Lies Behind These Numbers?",
			content: "Excruciating pain. Palestinians are killed by incinerating in bomb fire and/or entire buildings fall on them. "
		},
		{
			title: "5. What Happened to The Missing People in Gaza?",
			content: "It takes extremely significant effort to look for one of your relatives under rubble, only to find that they are dead, possibly with missing body parts. In some cases, it is impossible to move the rubble or dig by hand to find you relative. These are believed to be most of the missing cases. This is worse than being killed because in Islam, Muslims should buried facing Mecca after cleaning and praying rituals. "
		}]
}
