export const gazaDict = {
    killed: 12000,
    killedKids: 5000,
    killedWomen: 3300,
    killedElder: 682,
    killedMen: 12000 - 5000 - 3300 - 682,
    killedMedical: 203,
    killedUN: 103,
    killedEdu: 127,
    killedPress: 51,
    injured: 30000,
    injuredKids: 6168,
    injuredAdults: 30000 - 6168,
    missing: 3750,
    missingKids: 1800,
    missingAdults: 3750 - 1800,
    displaced: 1.65,
    funds: 14.3,
    hospitalsDown: 26,
    electricity: "OFF",
    water: "OFF",
    fuel: "OFF",
    internet: "WEAK",
  };

  export const gazaDictToday = {
    killed:20,
    killedKids: 10,
    killedWomen: 4,
    killedElder: 5,
    killedMen: 1200 - 500 - 330 - 82,
    killedMedical: 23,
    killedUN: 13,
    killedEdu: 17,
    killedPress: 1,
    injured: 3,
    injuredKids: 61,
    injuredAdults: 300 - 68,
    missing: 30,
    missingKids: 10,
    missingAdults: 350 - 100,
    displaced: 1.65,
    funds: 14.3,
    hospitalsDown: 3,
    electricity: "OFF",
    water: "OFF",
    fuel: "OFF",
    internet: "WEAK",
  };

  export const westBankDict = {
    killed: 213,
    killedKids: 49,
    killedAdults: 213 - 49,
    injured: 2750,
    injuredKids: 282,
    injuredAdults: 2750 - 282,
    detained: 2850,
  };

  export const westBankDictToday = {
    killed: 13,
    killedKids: 9,
    killedAdults: 21 - 4,
    injured: 20,
    injuredKids: 22,
    injuredAdults: 20 - 2,
    detained: 20,
  };

  export const infraDict = {
    damagedHomes: 22500,
    destroyedHomes: 43000,
    damagedHospitals: 25,
    destroyedAmbulances: 55,
    damagedSchools: 196,
    destroyedSchools: 64,
    destroyedChurches: 3,
    destroyedMosques: 77
  }


export const deathRatiosData = {
  labels: ["Children", "Women", "Elderly", "Men"],
  datasets: [
    {
      label: "Fatalities",
      data: [5000, 3300, 682, 3018],
      backgroundColor: "#d60a0aaa",
      borderColor: "#d60a0a",
      borderWidth: 1,
    },
  ],
};

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

export const homeData = {
  labels: ["Damaged or Destroyed", "Not Yet"],
  datasets: [
    {
      label: "Percentage of House Units Affected",
      data: [
        ((40000 + 222000) / 582000) * 100,
        1 - ((40000 + 222000) / 582000) * 100,
      ],
      backgroundColor: ["#990a0a88", "#d60a0a88"],
      borderColor: ["#990a0a", "#d60a0a"],
      borderWidth: 1,
    },
  ],
};

export const recentData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30"
  ],
  datasets: [
    {
      label: "Killed Palestinians",
      data: [
        4, 8, 13, 27, 32, 47, 32, 37, 41, 46,
        51, 56, 61, 35, 70, 75, 80, 84, 89, 94,
        99, 104, 79, 84, 109, 54, 128, 133, 138, 143
    ],
      backgroundColor: "#990a0a",
      borderColor: "#990a0aaa",
    },
    {
      label: "Killed Children",
      data: [
        2, 3, 10, 14, 45, 20, 22, 30, 31, 36,
        41, 56, 51, 75, 30, 45, 60, 74, 79, 84,
        19, 94, 99, 104, 19, 104, 18, 103, 108, 103
      ],
      backgroundColor: "#d60a0a",
      borderColor: "#d60a0aaa",
    },
  ],
};

export const lastUpdated = "18th Nov. 2023 at 14 PM GMT";

export const faqData = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "1. What Are The Sources of the Numbers Above? ",
      content: "These numbers are updated daily with data published on the Palestinian Central Bureau of Statistics (PCBS) website. The bureau is independent from the government; however, most if not all humanatirian metrics are first recorded by the ministry of health in an office at Al-Shifa hospital."
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