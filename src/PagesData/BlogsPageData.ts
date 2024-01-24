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
        showBlog: true,
        type: "article",
        name: "Murder of Shireen Abu Akleh",
        subTitle: "",
        imagePath: "/BlogsPage/Shireen_Abu_Akleh.jpg",
        blogPath: "/BlogsPage/murder-of-shireen-abu-akleh.md",
        summary: "The story of how the IDF killed Shireen and got away with it.",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Imposing an Exhaustive Blockade on Gaza",
        blogPath: "/BlogsPage/crime-blockade.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Using Illegal Incendiary Weapons in Attacks",
        blogPath: "/BlogsPage/crime-weapon.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Forcible Transfer of Civilians in Gaza",
        blogPath: "/BlogsPage/crime-force-transfer-north.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Murder and Severe Injury of Innocent Civilians",
        blogPath: "/BlogsPage/crime-innocent-murder.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Mass Destruction of Civilian Objects",
        blogPath: "/BlogsPage/crime-destruction-civilian-objects.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Destruction of Holy Places of Worship",
        blogPath: "/BlogsPage/crime-destruction-holy-places.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Destruction of Schools and Universities",
        blogPath: "/BlogsPage/crime-destruction-schools.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Damage or Destruction of Medical Facilities",
        blogPath: "/BlogsPage/crime-destruction-medical.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Destruction of Food and Water Supplies",
        blogPath: "/BlogsPage/crime-destruction-food.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Murder of Journalists",
        blogPath: "/BlogsPage/crime-murder-journalists.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Murder of Surrenderers",
        blogPath: "/BlogsPage/crime-murder-surrenders.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Arbitrary Detention of Civilians and Home Raids",
        blogPath: "/BlogsPage/crime-arbitrary-detention.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Torture and Sexual Abuse of Detainees",
        blogPath: "/BlogsPage/crime-torture.md",
    },
    {
        showBlog: false,
        type: "article",
        subTitle: "Israeli War Crimes",
        summary: "",
        imagePath: "",
        name: "Illegal Settlements in the west bank",
        blogPath: "/BlogsPage/crime-illegal-settlements.md",
    },
];
