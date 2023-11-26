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
        { path: "./CrimesPage/siege1.mp4", mode: "video" },
        { path: "./CrimesPage/siege2.mp4", mode: "video" },
      ],
      paragraphLeft: "",
      paragraphRight:
        " Israel has imposed a total blockade on Gaza; allowing no electricity, no water, no food and no gas, all of which are necessary for the life of the civilians. This has led to catastrophic consequences.",
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
        { path: "./CrimesPage/whitepv.mp4", mode: "video" },
        { path: "./CrimesPage/white-ph.png", mode: "img" },
        { path: "./CrimesPage/whitep.webp", mode: "img" },
      ],
      paragraphLeft: "",
      paragraphRight:
        "The Euro-Med Human Rights Monitor has established that since the 7th of October, Israel has launched beyond one thousand strikes using white phosphorous which is extremely harmful to humans.",
      onClickFunc: "weapon-crime",
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
        content: "War crimes are committed by responsible individuals in a nation. Ideally, provided that the nation has ratified the laws in question, it takes responsibility to prosecute and trial such individuals. If it does not, then the international criminal court can do that on the nation's behalf provided that it (or any other nation where the individual is) has ratified the Rome Statute."
      },
      {
        title: "3. Are all of these certainly war crimes committed by Israel?",
        content: "These are all likely war crimes committed by Israel. It takes lawyers and lengthy investigations to prove that or vice versa."
      }]
  }

