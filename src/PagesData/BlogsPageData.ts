interface Blog {
    showBlog: boolean;
    type: "article" | "interview";
    name: string;
    subTitle: string;
    imagePath: string;
    blogPath: string;
    summary: string;
}

export const blogs: Blog[] = [
    {
        showBlog: true,
        type: "interview",
        name: "Cenk Ugyr X Piers Morgan Interview",
        subTitle: "Antisemitism ≠ Pro-Palestine",
        imagePath: "/BlogsPage/cenk.png",
        blogPath: "/BlogsPage/piers-cenk-interview.json", // path in public folder
        summary:
            "In this interview, Cenk Ugyr, co-founder and host of The Young Turks, discusses the Israeli-Palestinian conflict with Piers Morgan.",
    },
    {
        showBlog: true,
        type: "interview",
        name: "Bassem Yousef X Piers Morgan Interview",
        subTitle: "Dark Comedy Can Save Lives",
        imagePath: "/BlogsPage/bassem.png",
        blogPath: "/BlogsPage/piers-bassem-interview.json", // path in public folder
        summary:
            "In this interview, Bassem Yousef, an Egyptian comedian and satirist, engages in a conversation with Piers Morgan about the recent events in Gaza.",
    },
    {
        showBlog: true,
        type: "interview",
        name: "Yuval Harari X Piers Morgan Interview",
        subTitle: "Israeli Government is a Root Problem",
        imagePath: "/BlogsPage/harari.png",
        blogPath: "/BlogsPage/piers-harari-interview.json",
        summary:
            "Yuval Harari, an Israeli professor and author, discusses the ongoing conflict with Piers Morgan.",
    },
    {
        showBlog: true,
        type: "article",
        name: "What is a Proportionate Response?",
        subTitle: "Important Concepts of the IHL",
        imagePath: "/BlogsPage/sat.png",
        blogPath: "/BlogsPage/what-is-a-proportional-response.md",
        summary:
            "What does proportionality mean? And how does it relate to the principle of distinction?.",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Imposing an Exhaustive Blockade on Gaza",
        blogPath: "/BlogsPage/blockade-crime.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Using Illegal Incendiary Weapons in Attacks",
        blogPath: "/BlogsPage/weapon-crime.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Forcible Transfer of Civilians in North Gaza",
        blogPath: "/BlogsPage/force-transfer-north-crime.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Forcible Transfer of Civilians in South Gaza",
        blogPath: "/BlogsPage/force-transfer-south-crime.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Murder and Severe Injury of Innocent Civilians",
        blogPath: "/BlogsPage/innocent-murder-crime.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Mass Destruction of Civilian Objects",
        blogPath: "/BlogsPage/destruction-civilian-objects-crime.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Destruction of Holy Places of Worship",
        blogPath: "/BlogsPage/destruction-holy-places-crime.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Destruction of Schools and Universities",
        blogPath: "/BlogsPage/destruction-schools-crime.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Damage or Destruction of Medical Facilities",
        blogPath: "/BlogsPage/destruction-medical-crime.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Destruction of Food and Water Supplies",
        blogPath: "/BlogsPage/destruction-food-crime.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Murder of Journalists",
        blogPath: "/BlogsPage/murder-journalists-crime.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Murder of Surrenderers",
        blogPath: "/BlogsPage/murder-surrenders-crime.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Arbitrary Detention of Civilians and Home Raids",
        blogPath: "/BlogsPage/arbitrary-detention-crime.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Torture and Sexual Abuse of Detainees",
        blogPath: "/BlogsPage/torture-crime.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Illegal Settlements in the west bank",
        blogPath: "/BlogsPage/illegal-settlements-crime.md",
    },
];
