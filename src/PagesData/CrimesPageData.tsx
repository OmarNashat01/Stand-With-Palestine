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
      onClickFunc: "blockade-crime",
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
      onClickFunc: "weapon-crime",
    },
    {
      title: "Forcible Transfer of Civilians in North Gaza",
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
      ],
      paragraphLeft: "",
      paragraphRight:
        `On the 14th of October 2023 Israeli ordered the evacuation of over one million civilians living in north Gaza. 
        Israel still proceeded by bombing civilians during their transfer along a route it designated as safe and murdered thousands in the south using air strikes. `,
      onClickFunc: "force-transfer-north-crime",
    },
    {
      title: "Forcible Transfer of Civilians in South Gaza",
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
        { path: "./CrimesPage/khan-younis-evac.mp4", mode: "video", violence: false, crop: true },
        { path: "./CrimesPage/leaflet.png", mode: "img", violence: false, crop: false },
        { path: "./CrimesPage/evac-map-south.jpeg", mode: "img", violence: false, crop: false }
      ],
      paragraphLeft: "",
      paragraphRight:
        `On the 17th of Nov. 2023, citizens in Khan Younis, the largest city in southern Gaza which hosts hundreds of thousands who fled northern Gaza in October received orders from the Israeli military to evacuate the city and head to known shelters.`,
      onClickFunc: "force-transfer-south-crime",
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
      onClickFunc: "innocent-murder-crime",
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
      onClickFunc: "destruction-civilian-objects-crime",
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
      onClickFunc: "destruction-holy-places-crime",
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
      onClickFunc: "destruction-schools-crime",
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
      onClickFunc: "destruction-medical-crime",
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
      onClickFunc: "destruction-food-crime",
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
      onClickFunc: "murder-journalists-crime",
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
      onClickFunc: "murder-surrenders-crime",
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
      onClickFunc: "arbitrary-detention-crime",
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
      onClickFunc: "torture-crime",
    },
    {
      title: "Illegal Settlements in the west bank",
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
      onClickFunc: "illegal-settlements-crime",
    },
  ];

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
        content: "These are all likely war crimes committed by Israel since the 7th of October, 2023. It takes lawyers and lengthy investigations to prove that or vice versa."
      }]
  }


export const finaleText = ["This is just a glimpse of the war crimes likely committed by Israel since the 7th of October; history is full of many others.",  
                           "This should not undermine your respect towards Israeli people in general. Only specific people are complicit in these crimes against humanity."];
export const finaleVideoPath = "./CrimesPage/history.mp4"
