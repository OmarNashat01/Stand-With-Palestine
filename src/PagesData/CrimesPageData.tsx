export const crimeHeroDict = {title: "ISRAEL'S WAR CRIMES", subTitle1: "Even Wars Have Internationally-Recognized Rules", subTitle2:"Many of Which Israel Breached in the Most Inhumane Ways Possible!"}

export const crimesDict = [
    {
      title: "Imposing an Exhaustive Blockade on Gaza",
      quotes: [
        {
          quote: ` No protected person may be punished for an offence he or she has
                  not personally committed. Collective penalties and likewise all
                  measures of intimidation or of terrorism are prohibited.`,
          quote_ref: ` Geneva Convention Relative to the Protection of Civilian
                   Persons in Time of War (Fourth Geneva Convention). (1949).
                   Article 33. Ratified by Israel.`,
        },
        {
          quote: `1. Starvation of civilians as a method of warfare is prohibited.`,
          quote_ref: `Protocol additional to the Geneva Conventions of 12 August
                      1949, and Relating to the Protection of Victims of
                      International Armed Conflicts. (1977). Article 54.`,
        },
      ],
      media: [
        { path: "./CrimesPage/siege1.mp4", mode: "video", violence: false, crop: false },
        { path: "./CrimesPage/siege2.mp4", mode: "video", violence: false, crop: false },
      ],
      paragraphLeft: "",
      paragraphRight:
        "On the 9th of October 2023, Israel has imposed a total blockade on Gaza, allowing no electricity, no water, no food and no gas. This had catastrophic consequences on innocent civilians.",
      onClickFunc: "crime-blockade",
    },
    {
      title: "Using Illegal Incendiary Weapons in Attacks",
      quotes: [
        {
          quote: `1. In any armed conflict, the right of the Parties to the
          conflict to choose methods or means of warfare is not unlimited.<br/><br/>
          2. It is prohibited to employ weapons, projectiles and material
          and methods of warfare of a nature to cause superfluous injury
          or unnecessary suffering.<br/><br/>
          3. It is prohibited to employ methods or means of warfare which
          are intended, or may be expected, to cause widespread, long-term
          and severe damage to the natural environment.`,

          quote_ref: `Protocol additional to the Geneva Conventions of 12 August
                      1949, and Relating to the Protection of Victims of
                      International Armed Conflicts. (1977). Article 35.`,
        },
      ],
      media: [
        { path: "./CrimesPage/whitepv.mp4", mode: "video", violence: false, crop: false },
        { path: "./CrimesPage/white-ph.png", mode: "img", violence: false, crop: false },
        { path: "./CrimesPage/whitep.webp", mode: "img", violence: true, crop: false },
      ],
      paragraphLeft: "",
      paragraphRight:
        "The Euro-Med Human Rights Monitor has established that since the 7th of October, Israel has launched beyond one thousand strikes using white phosphorous which is extremely harmful to humans.",
      onClickFunc: "crime-weapon",
    },
    {
      title: "Forcible Transfer of Civilians in Gaza",
      quotes: [
        {
          quote: `
          2. For the purpose of this Statute, "war crimes" means:
          <br/><br/>
          (b) Other serious violations of the laws and customs... namely, any of the following acts:<br/><br/>
          (viii) ... or the deportation or transfer of all or parts of the population of the occupied territory within or outside this territory;
          `,
          quote_ref: `Rome Statute of the International Criminal Court. (1998). Article 8.`,
        },
        {
          quote: `
          Individual or mass forcible transfers, as well as deportations of protected persons from occupied territory to the territory 
          of the Occupying Power or to that of any other country, occupied or not, are prohibited, regardless of their motive. 
          `,
          quote_ref: `Geneva Convention Relative to the Protection of Civilian
          Persons in Time of War (Fourth Geneva Convention). (1949).
          Article 49. Ratified by Israel.`,
        }
      ],
      media: [
        { path: "./CrimesPage/convoy-bomb.mp4", mode: "video", violence: true, crop: false },
        { path: "./CrimesPage/gaza-evac-img.png", mode: "img", violence: false, crop: false },
        { path: "./CrimesPage/gaza-evacuation.webp", mode: "img", violence: false, crop: false },
        { path: "./CrimesPage/evac-map-south.jpeg", mode: "img", violence: false, crop: false }
      ],
      paragraphLeft: "",
      paragraphRight:
        `On the 14th of October 2023 Israeli ordered the evacuation of over one million civilians living in north Gaza. 
        Israel still proceeded by bombing civilians during their transfer along a route it designated as safe and murdered thousands in the south using air strikes. `,
      onClickFunc: "crime-force-transfer-north",
    },
    {
      title: "Murder and Severe Injury of Innocent Civilians",
      quotes: [
        {
          quote: `
          2. For the purpose of this Statute, "war crimes" means:
          <br/><br/>
          (b) Other serious violations of the laws and customs... namely, any of the following acts:<br/><br/>
          (i) Intentionally directing attacks against the civilian population as such or against individual civilians not taking direct part in hostilities;
          `,
          quote_ref: `Rome Statute of the International Criminal Court. (1998). Article 8.`,
        },
        {
          quote: `
          The High Contracting Parties specifically agree that each of them is prohibited from taking any measure of such a character as to cause the physical suffering or extermination of protected persons in their hands.
          `,
          quote_ref: `Geneva Convention Relative to the Protection of Civilian
          Persons in Time of War (Fourth Geneva Convention). (1949).
          Article 32. Ratified by Israel.`,
        },
      ],
      media: [
        { path: "./CrimesPage/hand-rubble.mp4", mode: "video", violence: true, crop: true },
        { path: "./CrimesPage/rubble-cry.mp4", mode: "video", violence: true, crop: true },
        { path: "./CrimesPage/murder.mp4", mode:"video", violence: false, crop: false },
        { path: "./CrimesPage/legs-video.mp4", mode: "video", violence: true, crop: true },
        { path: "./HomePage/videos-grid/ChildCarried.mp4", mode: "video", violence: true, crop: false },
      ],
      paragraphLeft: "",
      paragraphRight:
        `As of the 27th of November 2023, Over <span style="color:#ed2f2f">15,000</span> have been murdered and over <span style="color:#ed2f2f">38,000</span> have been injured in Palestine. The means by which they are murdered are mostly incineration and having buildings collapse on top of them using air strikes. Over <span style="color:#ed2f2f">70%</span> of those murdered are children and women that are trivially innocent. `,
      onClickFunc: "crime-innocent-murder",
    },
    {
      title: "Mass Destruction of Civilian Objects",
      quotes: [
        {
          quote: `
          2. For the purpose of this Statute, "war crimes" means:
          <br/><br/>
          (b) Other serious violations of the laws and customs... namely, any of the following acts:<br/><br/>
          (ii) Intentionally directing attacks against civilian objects, that is, objects which are not military objectives;<br/><br/>
          (iv) Intentionally launching an attack in the knowledge that such attack will cause incidental loss of life or injury to civilians or damage to civilian objects or widespread, long-term and severe damage to the natural environment which would be clearly excessive in relation to the concrete and direct overall military advantage anticipated;
          (v) Attacking or bombarding, by whatever means, towns, villages, dwellings or buildings which are undefended and which are not military objectives;
          `,
          quote_ref: `Rome Statute of the International Criminal Court. (1998). Article 8.`,
        },
      ],
      media: [
        { path: "./CrimesPage/destruction-by-israel1.mp4", mode: "video", violence: false, crop: true },
        { path: "./CrimesPage/israel-total.mp4", mode:"video", violence: false, crop: true },
        { path: "./CrimesPage/gaza-maxar.webp", mode: "img", violence: false, crop: true },
        { path: "./CrimesPage/gaza-hindust.webp", mode: "img", violence: false, crop: true },
      ],
      paragraphLeft: "",
      paragraphRight:
        `As of the 27th of November 2023, nearly <span style="color:#ed2f2f">50%</span> of all homes in Gaza have been damaged or destroyed. The attacks are indiscriminate; it cannot be the case that Hamas, which constitutes less than 2.5% of Gaza occupies 50% of the houses in Gaza.`,
      onClickFunc: "crime-destruction-civilian-objects",
    },
    {
      title: "Destruction of Holy Places of Worship",
      quotes: [
        {
          quote: `
          ...it is prohibited:
          (a) to commit any acts of hostility directed against the historic monuments, works of art or places of worship which constitute the cultural or spiritual heritage of peoples;
          `,
          quote_ref: `Geneva Convention Relative to the Protection of Civilian
          Persons in Time of War (Fourth Geneva Convention). (1949).
          Article 32. Ratified by Israel.`,
        },
        {
          quote: `
          2. For the purpose of this Statute, "war crimes" means:
          <br/><br/>
          (b) Other serious violations of the laws and customs... namely, any of the following acts:<br/><br/>
          (ix) Intentionally directing attacks against buildings dedicated to religion,...`,
          quote_ref: `Rome Statute of the International Criminal Court. (1998). Article 8.`,
        },
      ],
      media: [
        { path: "./CrimesPage/mosque.mp4", mode: "video", violence: false, crop: true },
        { path: "./CrimesPage/church.mp4", mode: "video", violence: false, crop: true },
        { path: "./CrimesPage/mosque-adhan.mp4", mode:"video", violence: false, crop: true },
        { path: "./CrimesPage/gaza-mosque-pic.jpeg", mode: "img", violence: false, crop: true },
      ],
      paragraphLeft: "",
      paragraphRight:
        `As of the 27th of November 2023, over <span style="color:#ed2f2f">80</span> mosques in Gaza have been razed to the ground. `,
      onClickFunc: "crime-destruction-holy-places",
    },
    {
      title: "Destruction of Schools and Universities",
      quotes: [

        {
          quote: `
          2. For the purpose of this Statute, "war crimes" means:
          <br/><br/>
          (b) Other serious violations of the laws and customs... namely, any of the following acts:<br/><br/>
          (ix) Intentionally directing attacks against buildings dedicated to education, art, science,...`,
          quote_ref: `Rome Statute of the International Criminal Court. (1998). Article 8.`,
        },
        {
          quote: `
          The Occupying Power shall, with the cooperation of the national and local authorities, facilitate the proper working of all institutions devoted to the care and education of children.
          `,
          quote_ref: `Protocol additional to the Geneva Conventions of 12 August
          1949, and Relating to the Protection of Victims of International Armed Conflicts. (1977). Article 50.`,
        },
      ],
      media: [
        { path: "./HomePage/Azhar-University.mp4", mode: "video", violence: false, crop: true },
        { path: "./CrimesPage/islamic-university.mp4", mode:"video", violence: false, crop: false },
      ],
      paragraphLeft: "",
      paragraphRight:
        `As of the 27th of November 2023, over <span style="color:#ed2f2f">60</span> schools in Gaza have been destroyed. This includes the murder of over <span style="color:#ed2f2f">120</span> academic staff and numerous children. `,
      onClickFunc: "crime-destruction-schools",
    },
    {
      title: "Damage or Destruction of Medical Facilities",
      quotes: [
        {
          quote: `
          Civilian hospitals organized to give care to the wounded and sick, the infirm and maternity cases, 
          may in no circumstances be the object of attack, but shall at all times be respected and protected by the Parties to the conflict.
          `,
          quote_ref: `Protocol additional to the Geneva Conventions of 12 August
          1949, and Relating to the Protection of Victims of International Armed Conflicts. (1977). Article 53.`,
        },
        {
          quote: `
          2. For the purpose of this Statute, "war crimes" means:
          <br/><br/>
          (b) Other serious violations of the laws and customs... namely, any of the following acts:<br/><br/>
          (iii) Intentionally directing attacks against personnel, installations, material, units or vehicles involved in a humanitarian assistance or peacekeeping mission in accordance with ... <br/><br/>
          (ix) Intentionally directing attacks against buildings dedicated to ..., hospitals and places where the sick and wounded are collected, provided they are not military objectives;
          `,
          quote_ref: `Rome Statute of the International Criminal Court. (1998). Article 8.`,
        },
      ],
      media: [
        { path: "./CrimesPage/hospital0.mp4", mode: "video", violence: false, crop: true },
        { path: "./CrimesPage/hospital1.mp4", mode: "video", violence: false, crop: true },
        { path: "./CrimesPage/ambulance.webp", mode: "img", violence: true, crop: true },
        { path: "./CrimesPage/ambulance1.jpeg", mode: "img", violence: false, crop: true },

      ],
      paragraphLeft: "",
      paragraphRight:
        `There are numerous reports for damaging hospitals, destroying objects at its vicnity and destroying ambulances. Hospitals are also nearing collapse due to the lack of fuel and other necessities.`,
      onClickFunc: "crime-destruction-medical",
    },
    {
      title: "Destruction of Food and Water Supplies",
      quotes: [
        {
          quote: `
          To the fullest extent of the means available to it, the Occupying Power has the duty of ensuring the food and medical supplies of the population; it should, in particular, bring in the necessary foodstuffs, medical stores and other articles if the resources of the occupied territory are inadequate.
          `,
          quote_ref: `Geneva Convention Relative to the Protection of Civilian
          Persons in Time of War (Fourth Geneva Convention). (1949).
          Article 55. Ratified by Israel.`,
        },
        {
          quote: `
          2. It is prohibited to attack, destroy, remove or render useless objects indispensable to the survival of the civilian population, such as foodstuffs, agricultural areas for the production of foodstuffs, crops, livestock, drinking water installations and supplies and irrigation works, for the specific purpose of denying them for their sustenance value to the civilian population or to the adverse Party, whatever the motive, whether in order to starve out civilians, to cause them to move away, or for any other motive.
          `,
          quote_ref: `Protocol additional to the Geneva Conventions of 12 August
          1949, and Relating to the Protection of Victims of International Armed Conflicts. (1977). Article 53.`,
        },
      ],
      media: [
        { path: "./CrimesPage/bakery.mp4", mode: "video", violence: false, crop: true },
        { path: "./CrimesPage/bakery2.webp", mode: "img", violence: false, crop: true },
        { path: "https://www.youtube.com/embed/ti2tSP5Wtxc?si=re6SYHKPR7LdX3dN", mode: "iframe", violence: false, crop: true }, 
        { path: "https://www.youtube.com/embed/B314VZu0vVo?si=vnvSfF1SZ3XmqZVb", mode: "iframe", violence: false, crop: true },
      ],
      paragraphLeft: "",
      paragraphRight:
        `All bakeries in northern Gaza have been forced to close due to shortages of vital supplies. There are various reports on directly and indirectly targeted bakeries, food markets and water reserves.`,
      onClickFunc: "crime-destruction-food",
    },
    {
      title: "Murder of Journalists",
      quotes: [
        {
          quote: `
          1. Journalists engaged in dangerous professional missions in areas of armed conflict shall be considered as civilians within the meaning of Article 50, paragraph 1 . <br><br>
          2. They shall be protected as such under the Conventions and this Protocol, provided that they take no action adversely affecting their status as civilians, and without prejudice to the right of war correspondents accredited to the armed forces to the status provided for in Article 4 A (4) of the Third Convention.
          `,
          quote_ref: `Protocol additional to the Geneva Conventions of 12 August
          1949, and Relating to the Protection of Victims of International Armed Conflicts. (1977). Article 79.`,
        },
      ],
      media: [
        { path: "./CrimesPage/journalist-video.mp4", mode: "video", violence: true, crop: true },
        { path: "./CrimesPage/journalists.jpeg", mode: "img", violence: false, crop: false },
      ],
      paragraphLeft: "",
      paragraphRight:
        `As of the 27th of November, over <span style="color:#ed2f2f">60</span> journalists have been killed. Some have been obliterated along with their whole families.`,
      onClickFunc: "crime-murder-journalists",
    },
    {
      title: "Murder of Surrenderers",
      quotes: [
        {
          quote: `
          2. For the purpose of this Statute, "war crimes" means:
          <br/><br/>
          (b) Other serious violations of the laws and customs... namely, any of the following acts:<br/><br/>
          (i) Intentionally directing attacks against the civilian population as such or against individual civilians not taking direct part in hostilities;
          (vi) Killing or wounding a combatant who, having laid down his arms or having no longer means of defence, has surrendered at discretion;
          `,
          quote_ref: `Rome Statute of the International Criminal Court. (1998). Article 8.`,
        },
      ],
      media: [
        { path: "./CrimesPage/sur.mp4", mode: "video", violence: true, crop: true },
      ],
      paragraphLeft: "",
      paragraphRight:
        `The IDF released a video showing Israeli soldiers murdering surrendering, likely unarmed, Palestinians.`,
      onClickFunc: "crime-murder-surrenders",
    },
    {
      title: "Arbitrary Detention of Civilians and Home Raids",
      quotes: [
        {
          quote: `
          No one shall be subjected to arbitrary arrest, detention or exile.
          `,
          quote_ref: `Universal Declaration of Human Rights. (1948). Article 8.`,
        },
        {
          quote: `
          1. For the purpose of this Statute, "crime against humanity" means any of the following acts when committed as part of a widespread or systematic attack directed against any civilian population, with knowledge of the attack:
          <br/><br/>
          (i) Enforced disappearance of persons;
          `,
          quote_ref: `Rome Statute of the International Criminal Court. (1998). Article 8.`,
        },
      ],
      media: [
        { path: "./CrimesPage/detain1.mp4", mode: "video", violence: true, crop: true },
        { path: "./CrimesPage/detain2.mp4", mode: "video", violence: true, crop: true },
        { path: "./CrimesPage/detainsummary.jpeg", mode: "img", violence: true, crop: false },
      ],
      paragraphLeft: "",
      paragraphRight:
        `As of the 27th of November, over <span style="color:#ed2f2f">3000</span> individuals have been detained from the West Bank since the 7th of October, many of which have been detained with no charge or trial.`,
      onClickFunc: "crime-arbitrary-detention",
    },
    {
      title: "Torture and Sexual Abuse of Detainees",
      quotes: [
        {
          quote: `
          2. For the purpose of this Statute, "war crimes" means:
          <br/><br/>
          (b) Other serious violations of the laws and customs... namely, any of the following acts:<br/><br/>
          (xxi) Committing outrages upon personal dignity, in particular humiliating and degrading treatment;<br><br>
          (xxii) Committing rape, sexual slavery, ... or any other form of sexual violence also constituting a grave breach of the Geneva Conventions;
          `,
          quote_ref: `Rome Statute of the International Criminal Court. (1998). Article 8.`,
        },
        {
          quote: `
          Prisoners of war must at all times be humanely treated. Any unlawful act or omission by the Detaining Power causing death or seriously endangering the health of a prisoner of war in its custody is prohibited, and will be regarded as a serious breach of the present Convention. 
          `,
          quote_ref: `Geneva Convention Relative to the Treatment of Prisoners of War (Third Geneva Convention). (1949).
          Article 13. Ratified by Israel.`,
        },
      ],
      media: [
        { path: "./CrimesPage/torture2.mp4", mode: "video", violence: true, crop: true },
        { path: "./CrimesPage/torture-raid-livestream.mp4", mode: "video", violence: true, crop: true },
        { path: "./CrimesPage/torture3.mp4", mode: "video", violence: true, crop: true },
      ],
      paragraphLeft: "",
      paragraphRight:
        `Videos reported to be from IDF soldiers depict the torture and humilation that they inflict upon detainees in the West Bank.`,
      onClickFunc: "crime-torture",
    },
    {
      title: "Illegal Settlements in the West Bank",
      quotes: [
        {
          quote: `
          2. For the purpose of this Statute, "war crimes" means:
          <br/><br/>
          (b) Other serious violations of the laws and customs... namely, any of the following acts:<br/><br/>
          (viii) The transfer, directly or indirectly, by the Occupying Power of parts of its own civilian population into the territory it occupies, or the deportation or transfer of all or parts of the population of the occupied territory within or outside this territory;
          `,
          quote_ref: `Rome Statute of the International Criminal Court. (1998). Article 8.`,
        },
        {
          quote: `
          The Occupying Power shall not deport or transfer parts of its own civilian population into the territory it occupies.`,
          quote_ref: `Geneva Convention Relative to the Protection of Civilian
          Persons in Time of War (Fourth Geneva Convention). (1949).
          Article 49. Ratified by Israel.`,
        },
      ],
      media: [
        { path: "./CrimesPage/settlers.mp4", mode: "video", violence: false, crop: false },
        { path: "./CrimesPage/westbankmap.png", mode: "img", violence: false, crop: false },
      ],
      paragraphLeft: "",
      paragraphRight:
        `Israel continues endorsing Israeli settlements in the Palestinian West Bank. This has been ongoing since long before the 7th of Oct. Attack.`,
      onClickFunc: "crime-illegal-settlements",
    },
  ];

export const oldCrimesDict = [
  {
    "title": "12-year-old Boy Shot Dead, Father Severely injured",
    "date": "2000",
    "sources": [
      "AlJazeera"
    ],
    "links": [
      "https://www.aljazeera.com/features/2020/9/30/behind-the-lens-remembering-muhammad-al-durrah"
    ]
  },
  {
    "title": "British Peace Activist Shot in The Head By An IDF Sniper in Rafah",
    "date": "2003",
    "sources": [
      "Evening Standard"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.standard.co.uk/news/family-of-activist-tom-hurndall-shot-dead-in-israel-shocked-as-army-killer-is-freed-6493915.html"
    ]
  },
  {
    "title": "American Activist Run Over By An Israeli Bulldozer Destroying Palestinian Homes in Gaza",
    "date": "2003",
    "sources": [
      "BBC"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.bbc.com/news/world-middle-east-19395651"
    ]
  },
  {
    "title": "Illegal Phosphorus And Cluster Bombs Heavily Used By Israel During The Lebanon War",
    "date": "2006",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.haaretz.com/1.4865651"
    ]
  },
  {
    "title": "Estimated 1391 Palestinians Killed in Operation 'cast Lead'",
    "date": "2008",
    "sources": [
      "BBC",
      "Haaretz",
      "Haaretz",
      "Amnesty"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.bbc.com/news/world-middle-east-28439404",
      "https://archive.ph/o/5fS7X/https://www.haaretz.com/1.5129727",
      "https://archive.ph/o/5fS7X/https://www.haaretz.com/1.5092160",
      "https://archive.ph/o/5fS7X/https://www.amnesty.org/en/documents/MDE15/015/2009/en/"
    ]
  },
  {
    "title": "Israel Admits Using White Phosphorus During Their Military offensive On Gaza",
    "date": "2009",
    "sources": [
      "France24"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.france24.com/en/20090802-israel-acknowledges-use-white-phosphorus-shells-gaza-civilians"
    ]
  },
  {
    "title": "Using Palestinian Captives As Human Shields",
    "date": "2010",
    "sources": [
      "Imgur",
      "Guardian",
      "Haaretz",
      "Haaretz"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://imgur.com/a/mYTsPPA",
      "https://archive.ph/o/5fS7X/https://www.theguardian.com/world/2010/nov/21/israeli-soldiers-human-shield-avoid-jail",
      "https://archive.ph/o/5fS7X/https://www.haaretz.com/1.5120313",
      "https://archive.ph/o/5fS7X/https://www.haaretz.com/1.4786446"
    ]
  },
  {
    "title": "Israel Raids 6 Civillian Ships Carrying Humanitarian Aid And Construction Materials",
    "date": "2010",
    "sources": [
      "Guardian",
      "CNN"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.theguardian.com/world/2010/jun/11/gaza-flotilla-attack-new-video",
      "https://archive.ph/o/5fS7X/www.cnn.com/2010/WORLD/meast/05/31/gaza.protest/index.html"
    ]
  },
  {
    "title": "IDF Soldier Caught Kicking A Palestinian Child",
    "date": "2012",
    "sources": [
      "RT"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.rt.com/news/israel-police-officer-kicks-palestinian-child-437/"
    ]
  },
  {
    "title": "Israeli Trade Minister: \"i've Killed A Lot of Arabs in My Life, There's No Problem With That\"",
    "date": "2013",
    "sources": [
      "JPost"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.jpost.com/Diplomacy-and-Politics/Bennett-under-fire-for-comments-about-killing-Arabs-321467"
    ]
  },
  {
    "title": "IDF Soldier Posting A Picture of A Palestinian Child in His Rifle Crosshairs",
    "date": "2013",
    "sources": [
      "Guardian"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.theguardian.com/world/2013/feb/18/israeli-soldier-posts-instagram-palestinian"
    ]
  },
  {
    "title": "Four Boys Playing Soccer in An Open Beach Killed By An Israeli Warship",
    "date": "2014",
    "sources": [
      "NYT",
      "intercept",
      "Haaretz",
      "independent"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.nytimes.com/2014/07/17/world/middleeast/through-lens-4-boys-dead-by-gaza-shore.html",
      "https://archive.ph/o/5fS7X/https://theintercept.com/2018/08/11/israel-palestine-drone-strike-operation-protective-edge/",
      "https://archive.ph/o/5fS7X/https://www.haaretz.com/israel-news/israel-used-drone-to-kill-4-children-playing-on-gaza-beach-in-2014-1.6365860",
      "https://archive.ph/o/5fS7X/https://www.independent.co.uk/news/world/middle-east/israel-gaza-conflict-leaflets-dropped-on-northern-gaza-ordering-100000-to-evacuate-amid-fears-of-9609788.html?amp"
    ]
  },
  {
    "title": "Israeli Police officers Beat Up A 15-year-old Boy A Week After The Boy's Cousin Was Killed",
    "date": "2014",
    "sources": [
      "BBC"
    ],
    "links": [
      "https://www.bbc.com/news/av/world-middle-east-28181404"
    ]
  },
  {
    "title": "Palestinian Boy Beaten And Burned Alive By Israeli Settlers",
    "date": "2014",
    "sources": [
      "Guardian",
      "Wiki"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.theguardian.com/world/2014/jul/05/palestinian-boy-mohammed-abu-khdeir-burned-alive",
      "https://archive.ph/o/5fS7X/https://en.m.wikipedia.org/wiki/Kidnapping_and_murder_of_Mohammed_Abu_Khdeir"
    ]
  },
  {
    "title": "IDF Beating Up A Palestinian Man Who Told Them To Stop Firing Tear Gas",
    "date": "2015",
    "sources": [
      "YouTube"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://youtu.be/-p0jOkDgmP8"
    ]
  },
  {
    "title": "IDF Soldier Assaults And Beats Up Palestinian Shopkeeper As He Was Loading Boxes",
    "date": "2015",
    "sources": [
      "YouTube"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://youtu.be/KemTQETRJ54"
    ]
  },
  {
    "title": "Palestinians Are Detained in Israeli Prisons Without Trial Or Charges",
    "date": "2016",
    "sources": [
      "Time",
      "Haaretz",
      "972mag",
      "B'Tselem"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://time.com/4252272/israel-palestinians-administrative-detention/?amp=true",
      "https://archive.ph/o/5fS7X/https://www.haaretz.com/israel-news/.premium-number-of-palestinians-detained-in-israel-without-trial-sees-sharp-rise-1.5416131",
      "https://archive.ph/o/5fS7X/https://972mag.com/administrative-detention-explained/139584/",
      "https://archive.ph/o/5fS7X/https://www.btselem.org/administrative_detention"
    ]
  },
  {
    "title": "IDF Soldier Throws Man Out of His Wheelchair After He Attempts To Help A Shot Child",
    "date": "2016",
    "sources": [
      "Reddit"
    ],
    "links": [
      "https://www.reddit.com/r/iamatotalpieceofshit/comments/17ku661/israeli_soldiers_throw_a_disabled_man_out_of_his/?rdt=49879"
    ]
  },
  {
    "title": "IDF Jeep Throws A Stun Grenade At Four Palestinian Civilians",
    "date": "2016",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://www.haaretz.com/israel-news/2016-08-16/ty-article/video-grenade-thrown-at-palestinians-from-idf-jeep/0000017f-f98a-d7c0-afff-fdca6c6f0000"
    ]
  },
  {
    "title": "IDF Killing A 15-year-old Old Palestinian Travelling Home From A Family Outing",
    "date": "2016",
    "sources": [
      "Guardian"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.theguardian.com/world/2016/jun/21/israeli-troops-mistakenly-kill-palestinian-teenager-stone-throwers"
    ]
  },
  {
    "title": "Torture During Custody From Palestinians Held Imprisoned Without Charges",
    "date": "2017",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.haaretz.com/israel-news/.premium-israel-tortures-palestinian-children-amnesty-report-says-1.5440012"
    ]
  },
  {
    "title": "Israeli Cop Sentenced To 9 Months After Killing Two Unarmed Palestinian Teens",
    "date": "2018",
    "sources": [
      "972mag"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://972mag.com/nakba-day-killings-cop-gets-9-months-prison-for-killing-unarmed-teen/134903/"
    ]
  },
  {
    "title": "Unarmed Protestor Holding Flag Shot By Live Bullets",
    "date": "2018",
    "sources": [
      "YouTube"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://youtu.be/KBCX-yMXins"
    ]
  },
  {
    "title": "Abdullah Shamali, Was Shot While Standing And Talking With His Friends 700 Meters Away From The Fence",
    "date": "2018",
    "sources": [
      "Twitter"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://mobile.twitter.com/shehabagencyen/status/990681863290347520"
    ]
  },
  {
    "title": "Muhammad Ayoub, 15-year-old Old Was Shot in The Head While Running Away From The Fence",
    "date": "2018",
    "sources": [
      "YouTube"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://youtu.be/GSTLZGhw-xE"
    ]
  },
  {
    "title": "Mentally Disabled Man Shot in The Back of His Head As He Was Walking Away",
    "date": "2018",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.haaretz.com/whdcMobileSite/middle-east-news/palestinians/.premium-idf-troops-shot-disabled-palestinian-in-the-back-of-the-head-as-he-walked-away-1.6743207"
    ]
  },
  {
    "title": "Palestinian Woman Shot By Israeli Sniper in East of Gaza For Waving Palestinian Flag",
    "date": "2018",
    "sources": [
      "EgyptToday"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/www.egypttoday.com/Article/1/47262/Video-Palestinian-woman-shot-by-Israeli-sniper-in-east-of"
    ]
  },
  {
    "title": "Medic Shot Dead By An IDF Sniper Near Fence",
    "date": "2018",
    "sources": [
      "WashingtonPost"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.washingtonpost.com/news/worldviews/wp/2018/06/02/a-palestinian-medic-was-shot-dead-in-gaza-now-israel-says-it-will-launch-a-probe/"
    ]
  },
  {
    "title": "Canadian Doctor Shot By IDF Sniper in Gaza",
    "date": "2018",
    "sources": [
      "CBC"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.cbc.ca/radio/asithappens/as-it-happens-tuesday-edition-1.4663685/canadian-shot-in-gaza-says-he-was-clearly-marked-as-a-doctor-1.4663689"
    ]
  },
  {
    "title": "Israeli Border Police Throws Stun Grenade At A Palestian Couple And Their infant Baby As They Were Fleeing",
    "date": "2018",
    "sources": [
      "TimesofIsrael"
    ],
    "links": [
      "https://www.timesofisrael.com/border-cops-filmed-throwing-stun-grenade-at-palestinian-couple-with-baby/"
    ]
  },
  {
    "title": "IDF Snipers Cheering As They Shoot An Unarmed Palestinian",
    "date": "2018",
    "sources": [
      "Guardian"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.theguardian.com/world/2018/apr/10/video-appears-show-cheers-israeli-sniper-shoots-palestinian"
    ]
  },
  {
    "title": "IDF Soldiers Shooting Tear Gas into A Palestinian School",
    "date": "2018",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.haaretz.com/israel-news/.premium-israeli-army-denied-throwing-tear-gas-into-hebron-school-then-a-video-surfaced-1.6721530?fbclid=IwAR07Kb_h0Yvlj75P3IUxBST3OoibGQcsCmPbYIePagDD86nJd211k0kA6IA"
    ]
  },
  {
    "title": "Israeli Settlers Beating Up Palestinian Farmer in Front of His Children",
    "date": "2018",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.haaretz.com/israel-news/.premium-when-settlers-beat-palestinian-fathers-in-front-of-their-sons-1.5961979"
    ]
  },
  {
    "title": "4-year-old Child Dies Four Days After Being Shot By The IDF While Protesting",
    "date": "2018",
    "sources": [
      "Reuters",
      "PressTV"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.reuters.com/article/us-israel-palestinians-boy/gaza-boy-4-dies-from-israeli-fire-palestinian-medics-idUSKBN1OB1MC",
      "https://archive.ph/o/5fS7X/https://www.presstv.com/Detail/2018/12/12/582673/Gazan-kid-dies-of-Israeli-gunfire-wounds-sustained-in-antioccupation-protests"
    ]
  },
  {
    "title": "Family Evicted From Their Home in The West Bank; Home To Be Given To A Settler",
    "date": "2019",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.haaretz.com/israel-news/.premium-clashes-erupt-during-eviction-of-palestinian-family-from-east-jerusalem-home-1.6955034"
    ]
  },
  {
    "title": "Palestinian Boy On The Way To School Shot in The Head By Israeli Police",
    "date": "2019",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.haaretz.com/israel-news/.premium-palestinian-teen-is-shot-in-the-head-by-israeli-police-and-lives-to-tell-the-tale-1.6851019"
    ]
  },
  {
    "title": "Young Israeli Kills 47-year-old Woman",
    "date": "2019",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.haaretz.com/israel-news/.premium-top-rabbis-call-for-donations-to-israeli-charged-with-killing-palestinian-woman-1.6896612"
    ]
  },
  {
    "title": "Israeli Settlers Attack Palestinian Mother And Her Son",
    "date": "2019",
    "sources": [
      "MEMO"
    ],
    "links": [
      "https://www.middleeastmonitor.com/20231107-palestinian-mother-and-child-attacked-in-israeli-city-of-netanya/"
    ]
  },
  {
    "title": "IDF Threatened Breaking The Teacher's Arm If He Doesn't Let Him Arrest Student",
    "date": "2019",
    "sources": [
      "CNN"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://edition-m.cnn.com/2019/03/31/middleeast/children-detained-in-divided-hebron-intl/index.html"
    ]
  },
  {
    "title": "Netanyahu Vows To Annex West Bank disputed territory filled w illegal settlements if re-elected",
    "date": "2019",
    "sources": [
      "BBC"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.bbc.com/news/world-middle-east-47840033"
    ]
  },
  {
    "title": "IDF Soldiers Laughing As They Beat Detained Father And Son",
    "date": "2019",
    "sources": [
      "i24News",
      "Haaretz"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.i24news.tv/en/news/israel/196938-190312-footage-reveals-convicted-idf-soldiers-laughing-and-beating-palestinian-detainees",
      "https://archive.ph/o/5fS7X/https://www.haaretz.com/israel-news/.premium-israeli-court-releases-footage-of-soldiers-beating-detained-palestinians-1.7017836"
    ]
  },
  {
    "title": "Palestinian Lawmaker Held in Israeli Jail For Two Years Without Any Charge",
    "date": "2019",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.haaretz.com/middle-east-news/palestinians/israel-releases-palestinian-lawmaker-held-for-nearly-two-years-without-charges-1.6979135"
    ]
  },
  {
    "title": "IDF Beating A Blind And Diabetic Man On His Bed in His Own Home",
    "date": "2019",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.haaretz.com/israel-news/.premium-without-saying-a-word-israeli-troops-beat-up-a-blind-man-in-his-bed-1.6980517"
    ]
  },
  {
    "title": "Illegal Settlers Filmed Attacking Palestinian Family, No Arrests Made",
    "date": "2019",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.haaretz.com/israel-news/jewish-settlers-filmed-attacking-palestinian-family-no-arrests-were-made-1.7112783"
    ]
  },
  {
    "title": "IDF Soldier Shoots Blindfolded And Handcuffed Palestinian Trying To Flee",
    "date": "2019",
    "sources": [
      "independent",
      "Haaretz"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.independent.co.uk/news/world/middle-east/palestine-israel-west-bank-teenager-shot-soldiers-army-handcuff-blindfold-a8881296.html",
      "https://archive.ph/o/5fS7X/https://www.haaretz.com/israel-news/.premium-israeli-soldiers-shoot-bound-blindfolded-palestinian-teen-trying-to-flee-1.7151104"
    ]
  },
  {
    "title": "Israel intentionally Shoots Journalists in Jerusalem",
    "date": "2019",
    "sources": [
      "JPost"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.jpost.com/Israel-News/Reporters-Without-Borders-Israel-committed-war-crimes-against-press-590207"
    ]
  },
  {
    "title": "Israeli Settler Sets Field On Fire",
    "date": "2019",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.haaretz.com/israel-news/.premium-israeli-army-blamed-palestinians-for-arson-by-settlers-then-a-video-emerged-1.7278047"
    ]
  },
  {
    "title": "IDF Soldiers Fatally Shoot Palestinian Man From Behind As He Was Fleeing",
    "date": "2019",
    "sources": [
      "YouTube"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://youtu.be/USkGsccZWow"
    ]
  },
  {
    "title": "Group of Settlers Throwing Stones At Palestinian Homes in The West Bank",
    "date": "2019",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.haaretz.com/whdcMobileSite/israel-news/.premium-video-shows-settlers-attacking-palestinian-home-in-west-bank-1.7336107"
    ]
  },
  {
    "title": "Israeli Court Evicts Palestinian Family From Their Home in East Jerusalem For Settlers",
    "date": "2019",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.haaretz.com/israel-news/.premium-israeli-court-evicts-palestinian-family-from-e-j-lem-home-lets-settlers-take-over-1.7392845"
    ]
  },
  {
    "title": "IDF Fires Tear Gas At Worshippers",
    "date": "2019",
    "sources": [
      "Twitter"
    ],
    "links": [
      "https://twitter.com/muslimdaily_/status/1150764162303352832?lang=en"
    ]
  },
  {
    "title": "IDF Soldiers Snipes A 10-year-old Palestinian in The Head After Protests Dispersed",
    "date": "2019",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.haaretz.com/israel-news/.premium-the-protest-dispersed-then-an-israeli-sniper-shot-a-9-year-old-boy-in-the-head-1.7542674"
    ]
  },
  {
    "title": "Israel Razes Palestinian Homes in The Occupied West Bank",
    "date": "2019",
    "sources": [
      "BBC"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.bbc.com/news/world-middle-east-49069082"
    ]
  },
  {
    "title": "Gaza Medic Shot in The Head By Israeli Forces Dies From injuries",
    "date": "2019",
    "sources": [
      "AlAraby"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.alaraby.co.uk/english/news/2019/6/10/gaza-medic-shot-by-israeli-forces-dies-from-injuries"
    ]
  },
  {
    "title": "IDF Admits To Killing 8 Gaza Family Members",
    "date": "2019",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://www.haaretz.com/middle-east-news/palestinians/.premium-israeli-army-admits-strike-that-killed-palestinian-family-intended-for-empty-house-1.8129435"
    ]
  },
  {
    "title": "Palestinians Watching Their Home Get Destroyed in Al-isawiya, East Jerusalem",
    "date": "2019",
    "sources": [
      "Youtube"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://youtu.be/inV6KWj2m2k"
    ]
  },
  {
    "title": "Gas Canisters Were Shot into His Church in Jerusalem; Archbishop Gets Hospitalized",
    "date": "2019",
    "sources": [
      "EgyptianStreets"
    ],
    "links": [
      "https://archive.ph/o/5fS7X/https://egyptianstreets.com/2019/12/21/palestines-archbishop-hanna-poisoned-by-israeli-gas-canister-following-calls-for-christians-to-defend-palestine/"
    ]
  },
  {
    "title": "Israeli Settlers Attack Israeli Undercover Police officers Disguised As Palestinians",
    "date": "2019",
    "sources": [
      "AlAraby"
    ],
    "links": [
      "https://www.alaraby.co.uk/english/news/2020/1/2/settlers-attack-undercover-israeli-police-officers-disguised-as-palestinians"
    ]
  },
  {
    "title": "Palestinian Boy Killed After Being Run Over By An Israeli Settler Who Fled The Scene",
    "date": "2019",
    "sources": [
      "ArabNews"
    ],
    "links": [
      "https://www.arabnews.com/node/1529421"
    ]
  },
  {
    "title": "Mosque in Jerusalem Torched By Israeli Settlers, Vandalised With Racist Graffiti",
    "date": "2020",
    "sources": [
      "MidEastEye"
    ],
    "links": [
      "https://www.middleeasteye.net/news/east-jerusalem-mosque-burned-israeli-settlers-price-tag-attack"
    ]
  },
  {
    "title": "Armed Israeli Settlers With Dogs Enter Palestinian Home And Attack Residents",
    "date": "2020",
    "sources": [
      "YouTube"
    ],
    "links": [
      "https://youtu.be/cUqiSiJZm04"
    ]
  },
  {
    "title": "300 Palestinian Olive And Irrigation Systems Destroyed By Vandals",
    "date": "2020",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://www.haaretz.com/middle-east-news/palestinians/.premium-palestinian-farmers-lose-hundreds-of-olive-fig-trees-to-west-bank-vandals-1.9095551"
    ]
  },
  {
    "title": "Gazan Girl Fighting Cancer Dies After Israel Denied Her Parents' Visit",
    "date": "2020",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://www.haaretz.com/israel-news/.premium-gazan-girl-died-after-israel-denied-her-parents-visit-she-won-t-be-the-last-1.8631960"
    ]
  },
  {
    "title": "Probe Shows Bedouin School Teacher Was Shot And Left To Die By Israeli Police For No Reason",
    "date": "2020",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://www.haaretz.com/amp/israel-news/.premium-probe-shows-how-police-shot-innocent-bedouin-teacher-and-left-him-to-die-1.8567644"
    ]
  },
  {
    "title": "8-year-old Boy On His Way Home From School Shot in The Eye By Israeli officer",
    "date": "2020",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://www.haaretz.com/israel-news/2020-02-17/ty-article/.premium/israeli-officer-who-wounded-palestinian-boy-in-the-eye-says-he-only-shot-at-a-wall/0000017f-db3c-db5a-a57f-db7e33ae0000"
    ]
  },
  {
    "title": "Unarmed Palestinian Man Shot in The Neck By The IDF in Ramallah",
    "date": "2021",
    "sources": [
      "Video",
      "APnews",
      "Haaretz"
    ],
    "links": [
      "https://www.reddit.com/r/Palestine/comments/kot23e/he_was_shot_in_the_neck_over_a_goddamn_electric/",
      "https://apnews.com/article/hebron-middle-east-israel-west-bank-4d208ecba0aad22ebb6667ebbe605b4e",
      "https://www.haaretz.com/israel-news/.premium-idf-investigation-into-shooting-of-palestinian-finds-soldiers-lives-were-in-danger-1.9430810"
    ]
  },
  {
    "title": "Elderly Palestinian Farmer And Son Attacked By Israeli Settlers",
    "date": "2021",
    "sources": [
      "Video",
      "Video Mirror",
      "JPost"
    ],
    "links": [
      "https://mobile.twitter.com/kann_news/status/1349332867210477568",
      "https://www.reddit.com/r/Palestine/comments/kwh7r7/the_video_in_which_the_settlers_attack_the/",
      "https://www.jpost.com/arab-israeli-conflict/territorial-west-bank-dispute-ends-in-violence-as-attack-numbers-spike-655514"
    ]
  },
  {
    "title": "Palestinian Shop Owner Shot in The Head By An Israeli Settler.",
    "date": "2021",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://www.haaretz.com/israel-news/.premium.MAGAZINE-a-settler-vigilante-noticed-a-suspicious-palestinian-and-shot-him-dead-1.9452881"
    ]
  },
  {
    "title": "3-year- Ld Palestinian Boy Loses His Eye Due To IDF While Standing in A Shop",
    "date": "2021",
    "sources": [
      "Video",
      "Mirror",
      "IMEMC"
    ],
    "links": [
      "https://www.reddit.com/r/Palestine/comments/moxufm/a_13yearold_palestinian_child_ezzeddin_nidal/",
      "https://www.instagram.com/p/CNnnxHGHvXV/?igshid=8unas74cs5rq",
      "https://imemc.org/article/palestinian-child-loses-eye-after-israeli-soldiers-shot-him-in-hebron/"
    ]
  },
  {
    "title": "Israel Destroys Irish Aid To Palestinian Community",
    "date": "2021",
    "sources": [
      "IrishTimes"
    ],
    "links": [
      "https://www.irishtimes.com/news/world/europe/israel-destroys-irish-aid-to-palestinian-village-community-1.4489881"
    ]
  },
  {
    "title": "IDF Shoots Palestinian Man Filming",
    "date": "2021",
    "sources": [
      "Video"
    ],
    "links": [
      "https://www.reddit.com/r/Palestine/comments/mwiig8/soldier_shooting_a_man_filming_directly/"
    ]
  },
  {
    "title": "Israeli Extremist Attacks Romanian Orthodox Church in Jerusalem",
    "date": "2021",
    "sources": [
      "OrthoChristian"
    ],
    "links": [
      "https://orthochristian.com/137190.html"
    ]
  },
  {
    "title": "Israel Border Police Attacking Palestinian Men And Women",
    "date": "2021",
    "sources": [
      "Video",
      "Mirror"
    ],
    "links": [
      "https://www.reddit.com/r/Palestine/comments/lfbnv4/just_another_day_in_palestine/",
      "https://gfycat.com/wearyshamelessichthyostega"
    ]
  },
  {
    "title": "IDF Using Tear Gas And Stun Grenades On Muslim Worshippers Outside Al-aqsa",
    "date": "2021",
    "sources": [
      "Video"
    ],
    "links": [
      "https://www.instagram.com/p/COli21TJY0z/?utm_medium=copy_link"
    ]
  },
  {
    "title": "IDF Throwing Stun Grenades Within A Palestinian Clinic",
    "date": "2021",
    "sources": [
      "Video",
      "Mirror"
    ],
    "links": [
      "https://www.reddit.com/r/Palestine/comments/n7kt7u/the_moment_idf_most_moral_army_in_the_world_threw/",
      "https://www.reddit.com/r/Palestine/comments/n7aqtu/%D8%A7%D8%AD%D8%AF_%D8%A7%D9%84%D8%A7%D9%85%D9%88%D8%B1_%D8%A7%D9%84%D9%84%D9%8A_%D8%B5%D8%A7%D8%B1%D8%AA_%D8%A7%D9%84%D9%84%D9%8A%D9%84%D8%A9_%D9%87%D9%88_%D8%A7%D8%B3%D8%AA%D9%87%D8%AF%D8%A7%D9%81_%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9/"
    ]
  },
  {
    "title": "Large Group of Israeli Settlers Lynching A Palestinian Man And Destroying His Car",
    "date": "2021",
    "sources": [
      "Mirror"
    ],
    "links": [
      "https://gfycat.com/narrowclosekillerwhale"
    ]
  },
  {
    "title": "Israeli Mob Filmed Trying To Break into A Palestinian Home in Haifa",
    "date": "2021",
    "sources": [
      "Mirror"
    ],
    "links": [
      "https://www.reddit.com/r/PublicFreakout/comments/nb4z0a/israeli_mob_and_police_try_to_break_into_a/"
    ]
  },
  {
    "title": "Israelis Attacking Arab-owned Shops in Israel",
    "date": "2021",
    "sources": [
      "Mirror"
    ],
    "links": [
      "https://www.reddit.com/r/Palestine/comments/nby9ue/israelis_vandalising_arab_owned_shops_in_bat_yam/"
    ]
  },
  {
    "title": "Child's Skin Burning off After A Molotov Cocktail Was Thrown into His House By Israeli Settlers",
    "date": "2021",
    "sources": [
      "CCTV"
    ],
    "links": [
      "https://twitter.com/QudsNen/status/1393466901033062401?s=19"
    ]
  },
  {
    "title": "Israeli Airstrike Killed 44 in Gaza",
    "date": "2021",
    "sources": [
      "NYT investigation"
    ],
    "links": [
      "https://www.nytimes.com/video/world/middleeast/100000007787471/israel-airstrikes-gaza.html"
    ]
  },
  {
    "title": "Israel Arrested 13 Palestinian Journalists Without Charges",
    "date": "2021",
    "sources": [
      "ReportersWithoutBorders"
    ],
    "links": [
      "https://rsf.org/en/news/israel-now-holding-13-palestinian-journalists"
    ]
  },
  {
    "title": "Israeli Air Strikes Kills Sixty Children, Eleven of Which Are Receiving Treatments For Trauma",
    "date": "2021",
    "sources": [
      "NRC"
    ],
    "links": [
      "https://www.nrc.no/news/2021/may/11-children-killed"
    ]
  },
  {
    "title": "IDF Shooting 16yr Old Palestinian in The Back With As She Walks Back Home in Sheikh Jarrah.",
    "date": "2021",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://www.haaretz.com/israel-news/.premium-jerusalem-police-officer-who-shot-palestinian-girl-suspended-after-footage-emerges-1.9845088"
    ]
  },
  {
    "title": "Israeli Authorities Demolish Or Seize 58 Palestinian-owned Structures Across The West Bank, including East Jerusalem",
    "date": "2021",
    "sources": [
      "UN OCHA"
    ],
    "links": [
      "https://reliefweb.int/report/occupied-palestinian-territory/west-bank-demolitions-and-displacement-overview-march-2021"
    ]
  },
  {
    "title": "Israeli Guards Brutally Assaulting Palestinian Prisoners",
    "date": "2021",
    "sources": [
      "Video",
      "DemocracyNow"
    ],
    "links": [
      "https://youtu.be/vVr7OTRrYZo",
      "https://www.democracynow.org/2021/6/11/headlines/shocking_video_shows_israeli_guards_brutally_assaulting_palestinian_prisoners"
    ]
  },
  {
    "title": "At Least 4 Palestinians Were Killed By Settlers' Bullets As IDF Watches",
    "date": "2021",
    "sources": [
      "Haaretz",
      "Mirror"
    ],
    "links": [
      "https://www.haaretz.com/israel-news/.premium-settler-masked-person-filmed-shooting-at-palestinians-as-israeli-soldiers-watch-1.10006087",
      "https://www.instagram.com/tv/CRXKWhvp6bt/"
    ]
  },
  {
    "title": "Palestinian Boy, Killed After IDF Fired 13 Shots into His Family's Car As They Were Heading Home.",
    "date": "2021",
    "sources": [
      "Haaretz",
      "AJ",
      "BBC"
    ],
    "links": [
      "https://www.haaretz.com/middle-east-news/.premium-israeli-troops-kill-palestinian-in-west-bank-health-ministry-says-1.10043148",
      "https://www.aljazeera.com/news/2021/7/28/israeli-army-kills-palestinian-boy-in-west-bank-ministry",
      "https://www.bbc.com/news/world-middle-east-58010712"
    ]
  },
  {
    "title": "IDF Soldiers Kill A Baby, A Teenager And Four Others.",
    "date": "2021",
    "sources": [
      "Haaretz",
      "RT"
    ],
    "links": [
      "https://archive.is/KAc8K",
      "https://www.rt.com/news/531023-idf-palestinian-deaths-gaza-shelling/"
    ]
  },
  {
    "title": "Israeli Undercover Police Filmed Violently Abducting Palestinian",
    "date": "2021",
    "sources": [
      "Video"
    ],
    "links": [
      "https://www.reddit.com/r/Palestine/comments/q77jmd/israeli_undercover_police_filmed_violently/"
    ]
  },
  {
    "title": "Israeli Sniper's Execution of Veteran Al Jazeera Journalist, Shireen Abu Akleh in Jenin",
    "date": "2022",
    "sources": [
      "Graphic video of incident"
    ],
    "links": [
      "https://twitter.com/LinahAlsaafin/status/1524319721050542080?s=19"
    ]
  },
  {
    "title": "Three Palestinian Men Killed During A Raid in Jenin",
    "date": "2022",
    "sources": [
      "AlJazeera"
    ],
    "links": [
      "https://www.aljazeera.com/news/2022/12/8/israel-kills-three-west-bank-jenin-general-strike-called"
    ]
  },
  {
    "title": "16-year-old Palestinian Girl Killed By Israeli Army Gunfire in Jenin",
    "date": "2022",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://www.haaretz.com/israel-news/2022-12-12/ty-article/.premium/16-year-old-palestinian-girl-killed-by-israeli-army-gunfire-in-jenin/00000185-0300-d6b4-ad87-fb55bdde0000"
    ]
  },
  {
    "title": "Israel Kills Palestinian Student On His Way To School",
    "date": "2022",
    "sources": [
      "AlJazeera"
    ],
    "links": [
      "https://www.aljazeera.com/news/2022/11/21/israeli-forces-kill-young-palestinian-man-in-occupied-west-bank-2"
    ]
  },
  {
    "title": "Four Palestinians Killed in 24 Hours",
    "date": "2022",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://www.haaretz.com/israel-news/2022-11-29/ty-article/.premium/palestinian-seriously-hurt-in-clashes-with-israeli-forces-near-hebron/00000184-c043-d05a-a3b4-e363c5010000"
    ]
  },
  {
    "title": "Thirty Palestinian Familities Expelled From Jerusalem",
    "date": "2022",
    "sources": [
      "MEMO"
    ],
    "links": [
      "https://www.middleeastmonitor.com/20221121-haaretz-30-palestinian-families-face-expulsion-from-jerusalem/"
    ]
  },
  {
    "title": "Palestinian Boy Shot in The Head By The IDF",
    "date": "2022",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://www.haaretz.com/israel-news/twilight-zone/2022-10-15/ty-article-magazine/.highlight/a-palestinian-boy-went-out-with-friends-an-israeli-soldier-shot-him-dead/00000183-d86d-ddf0-adb7-fe6d4eb80000"
    ]
  },
  {
    "title": "Palestinian Teen Killed in Israeli Army Raid in Jenin",
    "date": "2022",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://www.haaretz.com/middle-east-news/palestinians/2022-05-21/ty-article/palestinian-teen-killed-in-israeli-army-raid-in-jenin-health-ministry-says/00000180-f6cc-d18b-a787-f7ed05ea0000"
    ]
  },
  {
    "title": "17-year-old Palestinian Killed During Israeli Military Raid in Northern West Bank",
    "date": "2023",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://www.haaretz.com/israel-news/2023-08-22/ty-article/17-year-old-palestinian-killed-during-israeli-military-raid-in-northern-west-bank/0000018a-1c25-d19a-affb-3eef1b9a0000"
    ]
  },
  {
    "title": "Israeli Forces Kill One Palestinian And injure 8 Others in West Bank Refugee Camp Raid",
    "date": "2023",
    "sources": [
      "Haaretz"
    ],
    "links": [
      "https://www.haaretz.com/israel-news/2023-06-13/ty-article/israeli-forces-kill-one-palestinian-injure-8-others-in-west-bank-refugee-camp-raid/00000188-b52e-d1d6-a7b9-ffffcb4e0000"
    ]
  },
  {
    "title": "Palestinian Toddler And Father Shot By IDF Soldier in The West Bank",
    "date": "2023",
    "sources": [
      "BBC"
    ],
    "links": [
      "https://www.bbc.com/news/world-middle-east-65812442"
    ]
  },
  {
    "title": "Israeli Soldiers Abusing Bound And Blindfolded Palestinian Detainees",
    "date": "2023",
    "sources": [
      "NBCNews"
    ],
    "links": [
      "https://www.nbcnews.com/news/world/videos-israeli-soldiers-abuse-palestinian-detainees-rcna123214"
    ]
  },
  {
    "title": "King David Hotel Bombing",
    "modalContent": "Right-wing Zionist terrorists attacked a British HQ located within the hotel killing 91 and injuring 46. The leader of the perpetrators, Manachem Begin became the Prime Minister of Israel in 1977. \n\n Read More on [Wiki](https://en.m.wikipedia.org/wiki/King_David_Hotel_bombing), [Haaretz](https://www.haaretz.com/israel-news/.premium-historian-calls-1946-attack-on-king-david-hotel-terror-1.5414668)",
    "type": "massacre",
    "date": "1946",
    "sources": [
      "NBCNews"
    ],
    "links": [
      "https://www.nbcnews.com/news/world/videos-israeli-soldiers-abuse-palestinian-detainees-rcna123214"
    ]
  },
  {
    "title": "Deir Yassin Massacre",
    "modalContent": "117 villagers including women, elderly & children were slaughtered by Zionist Paramilitary groups. The first-hand accounts included a report of a \"young fellow\" tied to a tree and set on fire, a woman and an old man shot in back, and girls lined up against a wall and shot with a submachine gun. Some members of the perpetrators were at a later time, absorbed into the IDF, one (Menachem Begin) became PM of Israel. He later stated in his book *Without what was done at Deir Yassin, there would not have been a state of Israel.* \n\n Read More on [Wiki](https://en.wikipedia.org/wiki/Deir_Yassin_massacre), [Haaretz](https://www.haaretz.com/israel-news/MAGAZINE-testimonies-from-the-censored-massacre-at-deir-yassin-1.5494094), [Article by University of Massachusetts Professor (PDF)](https://www.google.com/url?sa=t&source=web&rct=j&url=https://people.umass.edu/olga/MyArticles/Gershenson_WeAreVictimsofOurPast.pdf&ved=2ahUKEwiG99LG8P3wAhUBWX0KHRNrArcQFjAMegQICBAC&usg=AOvVaw2rjjGYofuM3hh7Ml7U2kVq&cshid=1622806675105), ['Born in Deir Yassin' Documentary](https://youtu.be/kiLt5awzmyI), [Britannica](https://www.britannica.com/topic/Irgun-Zvai-Leumi)",
    "type": "massacre",
    "date": "1948",
    "sources": [
      "NBCNews"
    ],
    "links": [
      "https://www.nbcnews.com/news/world/videos-israeli-soldiers-abuse-palestinian-detainees-rcna123214"
    ]
  },
  {
    "title": "Palestinian Exocus (Nakba)",
    "modalContent": "The expulsion of 700,000 Palestinian Arabs from their Homeland during the war and establishment of Israel in May 1948, these includes testimonies of massacres, rape and looting. During and immediately following the state’s creation, Israel expropriated approximately 4,244,776 acres of Palestinian land. \n\n Read More on [Haaretz](https://www.haaretz.com/amp/middle-east-news/palestinians/.premium.MAGAZINE-hidden-stories-of-the-nakba-1.6010350), [Haaretz](https://www.haaretz.com/whdcMobileSite/israel-news/.premium.MAGAZINE-how-israel-systematically-hides-evidence-of-1948-expulsion-of-arabs-1.7435103), [Atlantic](https://amp.theatlantic.com/amp/article/560294/), [Vox](https://www.vox.com/2018/11/20/18080030/israel-palestine-nakba), [TheWallsOfJerusalem](https://books.google.com.sg/books?id=D7p9DwAAQBAJ&pg=PA145&lpg=PA145&dq=4244776+acres&source=bl&ots=d-nqWE37SJ&sig=ACfU3U2qcmZrtLXyEFw-mY766JMFS8EIrQ&hl=en&sa=X&ved=2ahUKEwiEkJ7b5LXpAhWLdn0KHSnyDVcQ6AEwAnoECAQQAQ#v=onepage&q=145&f=false)",
    "type": "massacre",
    "date": "1948",
    "sources": [
      "NBCNews"
    ],
    "links": [
      "https://www.nbcnews.com/news/world/videos-israeli-soldiers-abuse-palestinian-detainees-rcna123214"
    ]
  },
  {
    "title": "Palestinian Exocus (Nakba)",
    "modalContent": "The expulsion of 700,000 Palestinian Arabs from their Homeland during the war and establishment of Israel in May 1948, these includes testimonies of massacres, rape and looting. During and immediately following the state’s creation, Israel expropriated approximately 4,244,776 acres of Palestinian land. \n\n Read More on [Haaretz](https://www.haaretz.com/amp/middle-east-news/palestinians/.premium.MAGAZINE-hidden-stories-of-the-nakba-1.6010350), [Haaretz](https://www.haaretz.com/whdcMobileSite/israel-news/.premium.MAGAZINE-how-israel-systematically-hides-evidence-of-1948-expulsion-of-arabs-1.7435103), [Atlantic](https://amp.theatlantic.com/amp/article/560294/), [Vox](https://www.vox.com/2018/11/20/18080030/israel-palestine-nakba), [TheWallsOfJerusalem](https://books.google.com.sg/books?id=D7p9DwAAQBAJ&pg=PA145&lpg=PA145&dq=4244776+acres&source=bl&ots=d-nqWE37SJ&sig=ACfU3U2qcmZrtLXyEFw-mY766JMFS8EIrQ&hl=en&sa=X&ved=2ahUKEwiEkJ7b5LXpAhWLdn0KHSnyDVcQ6AEwAnoECAQQAQ#v=onepage&q=145&f=false)",
    "type": "massacre",
    "date": "1948",
    "sources": [
      "NBCNews"
    ],
    "links": [
      "https://www.nbcnews.com/news/world/videos-israeli-soldiers-abuse-palestinian-detainees-rcna123214"
    ]
  },
  {
    "title": "Abu Shusha Massacre",
    "modalContent": "a village was attacked by the Kiryati Brigade during Operation Barak. During the attack, a Haganah soldier was reported to have attempted to rape a 20 yr old female prisoner twice. Israeli historian, Aryeh Yitzhaki, explains the events as a massacre citing a testimony from the Kheil Mishmar (Guard Units): > \"A soldier of Kiryati Brigade captured 10 men and 2 women. All were killed except a young woman who was raped and disposed of. At the dawn of 14 May, units of Giv'ati brigade assaulted Abu Shusha village. Fleeing villagers were shot on sight. Others were killed in the streets or axed to death. Some were lined up against a wall and executed. No men were left; women had to bury the dead.\" > A book by Israeli Political Scientist Meron Benvenisti mentioned that in 1995, a mass grave with 52 skeletons was discovered in Abu Shusha, but their cause of death is undetermined. More recently, research conducted by Birzeit University, mostly on the basis of interviews with former residents, suggests that between 60-70 residents were killed during the attack. \n\n Read More on [Wiki](https://en.wikipedia.org/wiki/Abu_Shusha), [Benny Morris' Book pg.257](https://books.google.com.sg/books?id=uM_kFX6edX8C&pg=PA257&redir_esc=y#v=onepage&q&f=false), [Gutenburg.org](http://self.gutenberg.org/articles/Abu_Shusha_massacre), [BirzeitUniversity Research](http://web.archive.org/web/20031205170448/www.birzeit.edu/ourvoice/history/jan99/destvil.html), [Meron Benvenisti's Book pg.248](https://archive.org/details/cityofstonehidde00benvrich/page/248/mode/1up), [Ahram.org](https://english.ahram.org.eg/NewsContent/50/1203/397269/AlAhram-Weekly/World/Anatomy-of-a-massacre.aspx)",
    "type": "massacre",
    "date": "1948",
    "sources": [
      "NBCNews"
    ],
    "links": [
      "https://www.nbcnews.com/news/world/videos-israeli-soldiers-abuse-palestinian-detainees-rcna123214"
    ]
  },
  {
    "title": "Lydda Massacre",
    "modalContent": "led by 'Palmach' (considered the \“tip of the spear\” during the war and in the establishment of the IDF) during 'Operation Danny' which ultimate goal during the Arab-Israeli War was to gain control of the road to Jerusalem. \n\nKenneth Bilby was in the city at the time. He wrote: \"[The Israeli jeep column] raced into Lydda with rifles, Stens, and sub-machine guns blazing. It coursed through the main streets, blasting at everything that moved ... the corpses of Arab men, women, and even children were strewn about the streets in the wake of this ruthlessly brilliant charge.\" The raid lasted 47 minutes, leaving 100–150 Palestinian Arabs dead, according to Moshe Dayan's 89th Battalion.\n\nYoav Gelber describes what followed as probably the bloodiest massacre of the war. Moshe Kelman ordered troops to shoot at any clear target, including at anyone seen on the streets. Israeli soldiers threw grenades into houses they suspected snipers were hiding in. Residents who ran out of their homes in panic were shot. Yeruham Cohen, an IDF intelligence officer, said around 250 died between 11:30 and 14:00 hrs.\n\nIn 2013, testimony provided to [Zochrot](https://zochrot.org/en), Yerachmiel Kahanovich, a Palmach soldier present on the scene, stated he himself, amid the shelling of a mosque, had fired a PIAT anti-tank missile with enormous shock wave impact inside the mosque where Palestinians were taking refuge in, and on examining it afterwards found the walls scattered with the remains of people. He also stated that anyone straying from the flight trail was shot dead. This event was also confirmed by Binyamin Roski who was also a Palmach soldier from the Yiftach Brigade.\n\nAccording to Morris, dozens died in the mosque, including unarmed men, women and children; an eyewitness published a memoir in 1998 saying he had removed 95 bodies from one of the mosques.\n\nDr. Klaus Dreyer of the IDF Medical Corps complained on 15 July (3 days later) that there were still corpses lying in and around Lydda, which constituted a health hazard and a \"moral and aesthetic issue.\" \n\n Read More on [Benyamin Roski Interview](https://youtu.be/6qHDlqv1kLM), [Yirachmiel Kahanovich Interview](https://zochrot.org/en/testimony/54345), [Ilan Pappé: Salvaging Nakba Documents](https://www.palestine-studies.org/en/node/1650358), [972mag](https://www.972mag.com/despite-efforts-to-erase-it-the-nakbas-memory-is-more-present-than-ever-in-israel/), [Journal](https://www.jstor.org/stable/4327250?seq=1)",
    "type": "massacre",
    "date": "1948",
    "sources": [],
    "links": []
  },
  {
    "title": "Al Dawayima Massacre",
    "modalContent": "occurred after the town was occupied by the IDF's 89th Commando Battalion. According to the village leader, IDF troops fired indiscriminately for over an hour, during which time many fled. On returning the day with other villagers, 60 bodies were found in the mosque, mostly elderly men. Numerous corpses of men, women and children, lay in the streets. 80 bodies of men, women and children were then found in the entrance of the El Zagh cavern. According to an IDF soldier: > \"the 1st [wave] of conquerors killed about 80 to 100 men, women, and children. The children they killed by breaking their heads with sticks. There was not a house without dead.\ >  > \"1 commander ordered his men to put 2 old women in the house and blow it up. 1 soldier boasted that he had raped a woman and then shot her. 1 woman, with a baby in her arms was employed to clean the courtyard where the soldiers ate. She worked a day or two. In the end they shot her and her baby. \n\n Read More on [Wiki](https://en.wikipedia.org/wiki/Al-Dawayima_massacre), [Mondoweiss](http://mondoweiss.net/2016/02/barbarism-by-an-educated-and-cultured-people-dawayima-massacre-was-worse-than-deir-yassin/), [Haaretz](https://www.haaretz.com/israel-news/.premium-the-poem-that-exposed-atrocities-perpetrated-by-israel-in-48-1.5418995) ",
    "type": "massacre",
    "date": "1948",
    "sources": [],
    "links": []
  },
  {
    "title": "The Safsaf Massacre",
    "modalContent": "After the Upper Galilee village surrendered to the IDF, 54-62 villagers had their hands tied, shot dead and buried in a pit. There was also 3 reports of rape, including the rape and murder of a 14-yr old girl. Yosef Nachmani (Senior officer in the Haganah as well as the director of the Jewish National Fund) confirmed the incident in his diaries. \n\n Read More on [Wiki](https://en.wikipedia.org/wiki/Safsaf_massacre), [JewishCurrents](https://archive.jewishcurrents.org/october-29-safsaf-massacre-1948/), [Haaretz](https://www.haaretz.com/amp/israel-news/.premium.MAGAZINE-how-israel-systematically-hides-evidence-of-1948-expulsion-of-arabs-1.7435103)",
    "type": "massacre",
    "date": "1948",
    "sources": [],
    "links": []
  },
  {
    "title": "The Hula Massacre",
    "modalContent": "Occurred in a village in Lebanon where according to an IDF superior, 35-58 men ages (ages between 15-60) who posed no resistance and surrendered immediately were executed by 2 IDF officers w a sub-machine gun and had the house blown up on top of them as a revenge for a separate incident the men had nothing to do with. \n\n Read More on [Wiki](https://en.wikipedia.org/wiki/Hula_massacre), [Haaretz](https://www.haaretz.com/israel-news/.premium-israeli-who-commanded-massacre-of-dozens-of-arab-captives-in-1948-dies-at-93-1.7022943)",
    "type": "massacre",
    "date": "1948",
    "sources": [],
    "links": []
  },
  {
    "title": "Blowing Up The Al-Dawayima Mosque",
    "modalContent": "After the war in 1948, as commander of the strategic Gush Yoav area, Zvi took PM Ben Gurion and Chief of Staff Moshe Dayan on a tour. During the tour, he was ordered by Dayan to loot a crescent off the top of a mosque in the destroyed village of Al-Dawayima (the scene of a wartime massacre in October 1948) and bring it to his office the next morning. To obey this order, Zvi was forced to blow up the mosque. \n\n Read More on[Zvi Steklov Interview](https://zochrot.org/en/video/54716)",
    "type": "massacre",
    "date": "1948",
    "sources": [],
    "links": []
  },
  {
    "title": "Gang Rape & Murder of Bedouin Girl",
    "modalContent": "Captured by the IDF in Negev. According to declassified documents, 20 soldiers took part in the episode, including a platoon commander. All were court-martialed but given relatively low prison sentences. \n\n Read More on [Haaretz](https://www.haaretz.com/1.4746524), [Guardian](https://www.theguardian.com/world/2003/nov/04/israel1)",
    "type": "massacre",
    "date": "1949",
    "sources": [],
    "links": []
  },
  {
    "title": "Qibya Massacre",
    "modalContent": "IDF troops under Ariel Sharon killed at least 69 Palestinian villagers, two-thirds of them were women and children. 45 homes, a school and a mosque were destroyed. The attack began with a mortar barrage on the village. IDF deployed explosive charges to breach the barbed fence and mined roads to prevent Jordanian forces from intervening. At the same time at least 25 mortar shells were fired into Budrus (neighbouring village) before IDF troops simultaneously entered the village from 3 sides. Ariel Sharon wrote: \"The orders were clear, Qibya was to be an example for everyone.\" Original documents showed that Sharon personally ordered his troops to achieve \"maximal killing and damage to property\", and post-operational reports speak of breaking into houses and clearing them with grenades and shooting. \n\n Read More on [Wiki](https://en.wikipedia.org/wiki/Qibya_massacre), [972mag](https://www.972mag.com/how-the-media-covers-massacres-lessons-from-1950/), [Cambridge](https://www.cambridge.org/core/journals/modern-american-history/article/edge-of-the-abyss-the-origins-of-the-israel-lobby-19491954/E1690BDB5CA87C66B2B65D12CA1D716A/core-reader), [Haaretz](https://www.haaretz.com/opinion/.premium-israel-prefers-not-to-air-its-dirty-laundry-1.5375076), [CounterPunch](https://www.counterpunch.org/2003/10/14/qibya-and-sharon-50-years-later/)",
    "type": "massacre",
    "date": "1953",
    "sources": [],
    "links": []
  },
  {
    "title": "Lavon Affair",
    "modalContent": "A failed false flag operation where Egyptian Jews were recruited by Israeli Military Intelligence to plant bombs inside Egyptian, American, and British-owned civilian targets, their foiled plan was to blame the attacks on the Muslim Brotherhood. \n\n Read More on [Haaretz](https://www.haaretz.com/israel-news/israel-reveals-controversial-lavon-affair-correspondence-62-years-later-1.5401166), [TimesofIsrael](https://www.timesofisrael.com/new-revelations-in-lavon-affair-raise-more-questions-then-they-answer/amp/), [Wiki](https://en.wikipedia.org/wiki/Lavon_Affair)",
    "type": "massacre",
    "date": "1954",
    "sources": [],
    "links": []
  },
  {
    "title": "Kafr Qasim Massacre",
    "modalContent": "Israeli Border Police killed 49 Arabs (19 men, 6 women, 23 children, 1 unborn child) returning home from work during a curfew they were unaware of. Those involved in the massacre were found guilty but were pardoned and released from prison in a single year. The highest ranking official prosecuted for the massacre confessed before his death, that the massacre were planned to ethnically cleanse Israeli Arabs from the region, and that his trial was staged to protect Israeli political and military elites, including Prime Minister Ben Gurion, from taking responsibility for the massacre. \n\n Read More on [Wiki](https://en.wikipedia.org/wiki/Kafr_Qasim_massacre), [Haaretz](https://www.haaretz.com/israel-news/.premium.MAGAZINE-general-s-confession-links-massacre-to-israel-s-secret-plan-to-expel-arabs-1.6550421), [972mag](https://972mag.com/48-human-beings-were-massacred-and-we-have-forgotten-them/81313/), [Medium](https://medium.com/@thepalestineproject/israel-must-acknowledge-the-kafr-qasim-massacre-dc62349b2956)",
    "type": "massacre",
    "date": "1956",
    "sources": [],
    "links": []
  },
  {
    "title": "USS Liberty",
    "modalContent": "Israel deliberately attacked an American Cargo Vessel, killing 34 and wounding 174 without any repercussions. \n\n Read More [Accounts from Survivors of USS Liberty](https://youtu.be/6XFTn70Rdso), [Haaretz](https://www.haaretz.com/us-news/but-sir-its-an-american-ship-never-mind-hit-her-1.5492908), [Chicago Tribune](http://articles.chicagotribune.com/2007-10-02/news/0710010866_1_israeli-pilots-spy-ship-uss-liberty/), [Wiki](https://en.m.wikipedia.org/wiki/USS_Liberty_incident)",
    "type": "massacre",
    "date": "1967",
    "sources": [],
    "links": []
  },
  {
    "title": "Ras Sedr Massacre",
    "modalContent": "49-52 Egyptian prisoners of war were executed by the IDF during the six-day war. The mass grave was found in June 2000. A report has detailed confessions of Israeli officers who witnessed the act including an IDF Brigadier-General who admitted to killing 49 Egyptian prisoners of war in the Sinai Desert in later interviews after retirement. [Wiki](https://en.wikipedia.org/wiki/Ras_Sedr_massacre), [IOL](https://www.iol.co.za/news/africa/executed-egyptain-troops-grave-found-41369), [AlAraby](https://english.alaraby.co.uk/english/comment/2016/10/24/who-was-responsible-for-israels-1967-massacre), [Reuters](https://www.reuters.com/article/us-egypt-israel-killings-idUSL0464322620070304), [NYT](https://www.nytimes.com/1995/09/21/world/egypt-says-israelis-killed-pow-s-in-67-war.html)",
    "type": "massacre",
    "date": "1967",
    "sources": [],
    "links": []
  },
  {
    "title": "Bahr El-Baqar Primary School Bombing",
    "modalContent": "Israeli Air Force bombed a school in Egypt, killing 46 children and wounding 50 others. While many Israeli officials consider it a human error, Moshe Dayan (then-defense minister) and Yosef Tekoah (then-Israeli Envoy to the UN) has constantly defended the bombing. \n\n Read More on [Military.wikia](https://military.wikia.org/wiki/Bahr_El-Baqar_primary_school_bombing), [Wiki](https://en.wikipedia.org/wiki/Bahr_El-Baqar_primary_school_bombing), [India Print](https://www.theindiaprint.com/international-news-english/the-israeli-army-had-bombed-the-school-of-children-from-the-sky-the-reason-for-some-photos-to-hide-the-mistake-38778), [Ahram](https://english.ahram.org.eg/NewsContent/1/64/199065/Egypt/Politics-/Egypts-Bahr-AlBaqar-Flashbacks-of-an-Israeli-war-c.aspx), [Mondoweiss](https://mondoweiss.net/2018/04/unhappy-history-massacres/), [Jewish Telegraph](https://www.jta.org/1970/04/10/archive/dayan-states-if-israeli-planes-did-hit-school-it-was-inside-military-installation)",
    "type": "massacre",
    "date": "1970",
    "sources": [],
    "links": []
  },
  {
    "title": "Operation Trojan",
    "modalContent": "according to ex-Mossad agent in his book, Mossad instigated the US bombing of Libya by planting a transmission device and impersonating as the Libyan Government sending terrorist orders to its embassies around the world. Read story in page 113-117 of [PDF](https://www.riksavisen.no/uploads/other-side-of-deception-victor-ostrovsky.pdf)",
    "type": "massacre",
    "date": "1986",
    "sources": [],
    "links": []
  },
  {
    "title": "Cave of Patriarchs Massacre",
    "modalContent": "American-Israeli Settler, Baruch Goldstein opened fire in Ibrahimi Mosque, killing 29 (according to IDF)/48 (according to Palestinian witnesses) and wounding more than 125. 100s of Israelis gather to honour the killer when he was buried. Conspiracy arises when people found out that IDF soldiers who were supposed to guard the mosque wasn't present on the day of the attack. \n\n Read More on [Wiki](https://en.wikipedia.org/wiki/Cave_of_the_Patriarchs_massacre), [JPost](https://www.jpost.com/Arab-Israeli-Conflict/The-Goldstein-massacres-shadow-on-Hebron-58423), [NYT](https://www.nytimes.com/1994/04/01/world/hundreds-of-jews-gather-to-honor-hebron-killer.html), [LAT](https://www.latimes.com/archives/la-xpm-1994-03-10-mn-32305-story.html)",
    "type": "massacre",
    "date": "1994",
    "sources": [],
    "links": []
  },
  {
    "title": "Qana Massacre",
    "modalContent": "IDF fired artillery shells at a UN Compound where 800 Lebanese civillians were taking refuge. 106 civillians were killed, 116 injured, 4 Fiji UN forces were also seriously injured. \n\n Read More on [Wiki](https://en.wikipedia.org/wiki/Qana_massacre), [AlAraby](https://www.alaraby.co.uk/english/amp/society/2016/9/28/in-lebanon-the-qana-massacre-will-be-peres-legacy), [Independent](https://www.independent.co.uk/voices/shimon-peres-dies-israel-qana-massacre-never-forget-no-peacemaker-robert-fisk-a7334656.html?amp), [DailyMotion](https://www.dailymotion.com/video/x2uiz2l)",
    "type": "massacre",
    "date": "1996",
    "sources": [],
    "links": []
  },
  {
    "title": "Second Qana Massacre",
    "modalContent": "Air-strike carried out by IDF on a building Lebanon during the war. 28 civillians were killed out of which 16 were children. Upon investigation, IDF concluded that there was in fact no rocket launched from Qana on the day of the deadly strike by IDF. \n\n Read More on [Wiki](https://en.wikipedia.org/wiki/Qana_airstrike), [BBC](http://news.bbc.co.uk/2/hi/middle_east/5228554.stm), [Norman Finkelstein](http://normanfinkelstein.com/2006/08/02/comrades-the-party-line-has-changed/)",
    "type": "massacre",
    "date": "2006",
    "sources": [],
    "links": []
  },
  {
    "title": "Operation Cast Lead",
    "modalContent": "Estimated 1391 Palestinians killed, 759 to be civillians, 344 children, 110 women. 13 Israelis killed, out of which 10 are soldiers. Israel also admits using 'White Phosphorus' during their military offensive. \n\n Read More on [Haaretz](https://www.haaretz.com/1.5129727), [Haaretz](https://www.haaretz.com/1.5092160), [Amnesty](https://www.amnesty.org/en/documents/MDE15/015/2009/en/), [France24](https://www.france24.com/en/20090802-israel-acknowledges-use-white-phosphorus-shells-gaza-civilians), [Investigation: F.A](https://forensic-architecture.org/investigation/white-phosphorus-in-urban-environments)",
    "type": "massacre",
    "date": "2008",
    "sources": [],
    "links": []
  },
  {
    "title": "Operation Protective Edge",
    "modalContent": "After the Kidnapping & Murder of 3 Israeli Teens allegedly by Hamas (Opinions divided among Israel's Security Services on who was actually behind it), Disproportionate Collective Punishment ensued against the people of Gaza (estimated 2104 Palestinians killed, including 1,462 civilians, of whom 495 were children and 253 women. 17,200 homes destroyed or severely damaged. More than 10,000 injured). \n\n Read More on [Image](https://i.redd.it/4uer2l1nwbb61.jpg), [NYmag](https://nymag.com/intelligencer/2014/07/hamas-didnt-kidnap-the-israeli-teens-after-all.html), [BBC](https://www.bbc.com/news/world-middle-east-28439404), [B'Tselem](https://www.btselem.org/press_releases/20160720_fatalities_in_gaza_conflict_2014), [Amnesty](https://www.amnesty.org.uk/gaza-operation-protective-edge)",
    "type": "massacre",
    "date": "2014",
    "sources": [],
    "links": []
  },
  {
    "title": "Duma Arson Attack",
    "modalContent": "Israeli Settlers firebombed a Palestinian home, killing an 18-month old baby and his parents who succumbed to their 3rd degree burns weeks later. Their 4-year-old son who suffered 2nd and 3rd degree burns on more than 60% of his body becomes sole survivor of the attack. Graffiti left by the arsonists read \"Revenge, Price tag, Long live the Messiah\". Months after the incident, Israeli Radicals [celebrate wedding by stabbing photo of 18-month old Palestinian baby that was killed in the Arson Attack](https://www.haaretz.com/israel-news/video-hilltop-youth-stab-photo-of-dawabsheh-baby-at-wedding-1.5381297)  In 2020, Yair Netanyahu [retweets crowdfunding legal appeal for Israeli terrorist](https://www.timesofisrael.com/after-sentencing-netanyahus-son-tweets-in-support-of-duma-killer/) convicted of the Arson Attack. Two dozen senior Israeli Rabbis have also [issued a statement supporting the terrorist.](https://www.middleeastmonitor.com/20200918-israel-rabbis-issue-statement-supporting-israeli-terrorist-convicted-of-murdering-dawabsheh-family/) \n\n\n Read More on [Wiki](https://en.wikipedia.org/wiki/Duma_arson_attack), [Guardian](https://theguardian.com/world/2015/jul/31/death-18-month-old-in-arson-attack-heightens-tensions-west-bank-israel))",
    "type": "massacre",
    "date": "2015",
    "sources": [],
    "links": []
  },

]
  

  export const faqData = {
    title: "FAQ (How it works)",
    rows: [
      {
        title: "1. What are the rules of war? ",
        content: "Also known as the rules of armed conflict, the international humanitarian law is a set of rules that seek to limit unnecessary adverse effects of armed conflict. It is mainly coded in four international agreements called the Geneva Conventions and three additional protocols that extend them. All countries have ratified the original Geneva Conventions and the vast majority of them have also ratified the additional protocols."
      },
      {
        title: "2. What happens when the rules of war are violated?",
        content: "War crimes are committed by responsible individuals in a nation. Ideally, provided that the nation has ratified the laws in question, it takes responsibility to prosecute and trial such individuals. If it does not, then the international criminal court can do that on the nation's behalf provided that it (or any other nation where the individual is) has ratified the Rome Statute. The Rome Statute recapitulate and slightly extends the rules in the Geneva Conventions and their additional protocols and establishes the function, structure and jurisdiction of the international criminal court."
      },
      {
        title: "3. Are all of these certainly war crimes committed by Israel?",
        content: "These are all likely war crimes committed by Israel since the 7th of October, 2023 and before. It takes lawyers and lengthy investigations to prove that or vice versa."
      }]
  }


export const finaleText = ["This is just a glimpse of the likely war crimes committed by Israel.",  
                           "This should not undermine your respect towards Israeli people in general. Only specific people are complicit in these crimes against humanity."];
export const finaleVideoPath = "./CrimesPage/history.mp4"