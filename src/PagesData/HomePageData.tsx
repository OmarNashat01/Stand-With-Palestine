const homeData = {
    mainHeroSection: {
      circular: true,
      imagePath: "./HomePage/gaza-ouch.webp",
      overlayColor: "rgba(0, 0, 0, 0.35)",
      title: "Genocide is a Daily Reality in Palestine",
      subTitle: "Tens of Thousands of Innocents are being Brutally Murdered or Severely Injured",
      subTitle2: 
      `They painfully die incinerated by bombs, possibly mutilated, entire buildings fall on them or 
      they are burned with chemical weapons—all while enduring intense starvation.`,
      buttonText1: "Learn More ▼",
      buttonText2: "Support ♥",
      showDay: true,
      minHeight: "max(80vh, 600px)",
      blur: "blur(0px)",
      onClick1: "first-banner",
      onClick2: "./support"
    },
  
    statusBanner: {
      title: "Women and Children are Most Targeted in Terms of Casualties",
      bgColor:"",
      color:""
    },
  
    statusSection: {
      imagePath: './HomePage/gaza-child-sad.webp',
      numbers: [13430, 8900, 72520, "~2M"],
      texts: ["Children Killed", "Woman Killed", "People in Pain", "People Displaced"],
      onClick: "./status",
      violent: true
    },
  
    timelineBanner: {
      title: "Violence Has Been Evolving Both Before & During the Conflict",
      bgColor:"",
      color:""
    },
  
    historicTimelineSection: {
      imagePath: "./HomePage/blockade.jpeg",
      extraImagePath: "./HomePage/PMap.png",
      overlayColor: "rgba(0, 0, 0, 0.55)",
      blur: "blur(3px)",
      title: "Violence Did Not Begin with the Attacks from Hamas.",
      subTitle: "",
      text: 
      `Gaza has been under an illegal and violent blockade for 16 years.| 
       Israel occupies and continues to construct illegal settlements in the West Bank.| 
       Over 9000 Palestinians have been killed prior to this conflict since 2000, and over 4000 were imprisoned.|
       70% of Gaza residents are refugees that were expelled from their homes in Palestine by Israel in 1948.
       `,
      bulleted: "ordered",
      buttonText1: "Check Crime Record ▶",
      buttonText2: "",
      reverse: true,
      isYouTube: false,
      isLocalVideo: false,
      onClick1: './crimes'
    },


    recentTimelineEndSection: {
      imagePath: "https://www.al-monitor.com/sites/default/files/styles/article_header/public/2023-10/c3544adf3c932f83c76ca2dedbd86cc0a8bab26d.jpg?h=69f2b9d0&itok=JJEYpj8L",
      extraImagePath: "https://cdnuploads.aa.com.tr/uploads/Contents/2023/12/01/thumbs_b_c_a46b58748b653f2f17f5fe5ae35deabb.jpg?v=121358",
      isLocalVideo: false,
      isYouTube: false,
      overlayColor: "rgba(0, 0, 0, 0.6)",
      blur: "blur(3px)",
      bulleted: '',
      title: "Hundreds Killed as Israel Resumes Attacks on Gaza",
      subTitle: "1st Dec. 2023",
      text: 
      `Israel’s attacks erupted again, as airstrikes started striking Gaza minutes after a weeklong truce with Hamas expired. Israel recalled its negotiators from Qatar because of what it described as a dead end in the talks.`,
      buttonText1: "Check Timeline ▶",
      buttonText2: "Read More",
      reverse: true,
      onClick1: './timeline/recent',
      onClick2: 'https://apnews.com/article/israel-hamas-war-news-12-1-2023-c944c736efdf8993c7a17cf683d6e364',
      violent: true
    },


    recentTimelineVeto2Section: {
      imagePath: "https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production%20Library/08-12-2023-UN-Photo-SC-meeting-Gaza.jpg/image1170x530cropped.jpg",
      extraImagePath: "https://english.ahram.org.eg/Media/News/2024/2/20/41_2024-638440558223399705-339.jpg",
      isLocalVideo: false,
      isYouTube: false,
      overlayColor: "rgba(0, 0, 0, 0.6)",
      blur: "blur(3px)",
      bulleted: '',
      title: "US Vetoes Another Ceasefire Resolution for Gaza",
      subTitle: "20th Feb. 2024",
      text: 
      `The UN Security Council met again in emergency session in New York on Gaza Tuesday, where the United States vetoed a resolution put forward on behalf of Arab States by Algeria demanding “an immediate humanitarian ceasefire that must be respected by all parties`,
      buttonText1: "Check Timeline ▶",
      buttonText2: "Read More",
      reverse: true,
      onClick1: './timeline/recent',
      onClick2: 'https://news.un.org/en/story/2024/02/1146697',
      violent: true
    },
  

    recentTimelineVetoSection: {
      imagePath: "https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production%20Library/08-12-2023-UN-Photo-SC-meeting-Gaza.jpg/image1170x530cropped.jpg",
      extraImagePath: "https://static.timesofisrael.com/www/uploads/2023/12/347B2Q3-Preview.jpg",
      isLocalVideo: false,
      isYouTube: false,
      overlayColor: "rgba(0, 0, 0, 0.6)",
      blur: "blur(3px)",
      bulleted: '',
      title: "The US Vetoes Resolution That Called For Cease Fire in Gaza",
      subTitle: "8th Dec. 2023",
      text: 
      `The US vetoed a resolution put forward by the United Arab Emirates and backed by over 90 Member States. There were 13 votes in favour and the United Kingdom abstained.`,
      buttonText1: "Check Timeline ▶",
      buttonText2: "Read More",
      reverse: true,
      onClick1: './timeline/recent',
      onClick2: 'https://news.un.org/en/story/2023/12/1144562',
      violent: true
    },
  
    recentTimelineCrimeSection: {
      imagePath: "./HomePage/gaza-carry.jpeg",
      extraImagePath: "./HomePage/almost.mp4",
      isLocalVideo: true,
      isYouTube: false,
      overlayColor: "rgba(0, 0, 0, 0.6)",
      blur: "blur(3px)",
      title: "Israel Bombs in the vicinity of the Indonesian Hospital",
      subTitle: "9th Nov. 2023",
      text: 
      `Many civilians have been brutally killed and injured during the bombing; 
      it caused serious damage to some hospital facilities, as well as panic among civilians seeking shelter there.|
      Over 20/35 hospitals are out of service due to bombs or a lack of supplies; 
      remaining hospitals lacking anaesthetics perform surgical operations without numbing and patients scream.`,
      bulleted: "unordered",
      buttonText1: "Check Timeline ▶",
      buttonText2: "Read More",
      reverse: true,
      onClick1: './timeline/recent',
      onClick2: 'https://www.palestinechronicle.com/dead-and-wounded-in-israeli-bombing-near-indonesian-hospital/',
      violent: true
    },
  
    recentTimelineDiplomaticSection: {
      imagePath: "./HomePage/gaza-demolish.jpeg",
      extraImagePath: "./HomePage/us-aid.webp",
      overlayColor: "rgba(0, 0, 0, 0.6)",
      blur: "blur(2px)",
      title: "White House Approves a $14.3B Military Aid for Israel",
      subTitle: "3rd Nov. 2023",
      text: 
      `The House approved a nearly $14.5 billion military aid package Thursday for Israel, a muscular U.S. 
      response to the war with Hamas but also a partisan approach by new Speaker Mike Johnson that poses 
      a direct challenge to Democrats and President Joe Biden.`,
      bulleted: "",
     buttonText1: "Check Timeline ▶",
      buttonText2: "Read More",
      reverse: true,
      isYouTube: false,
      isLocalVideo: false,
      onClick1: './timeline/recent',
      onClick2: 'https://apnews.com/article/house-israel-aid-ukraine-republicans-biden-gaza-b7bfe528b12ac5954cfd5c034f11320d',
    },
  
    warCrimeBanner: {
      title: "Israel Commits Flagrant War Crimes Against Humanity in Gaza",
      bgColor:"",
      color:""
    },
  
    genocideSection: {
      imagePath: "",
      extraImagePath: "./HomePage/genocide.mp4",
      overlayColor: "rgba(0, 0, 0, 0.6)",
      blur: "blur(3px)",
      title: "Israel is Committing Genocide in Gaza",
      subTitle: "",
      text: 
      `Intended killing members of a nation, or causing serious bodily or mental harm is genocide by definition.|
      President said #It is an entire nation out there that is responsible#.|
       Coordinator of Government Activities said #There will be no electricity and no water, there will only be destruction. You wanted hell, you will get hell#.|
       Finance Minister said #There is no such thing as a Palestinian nation. There is no Palestinian history#.|
       Prime Minister said regarding the state of Gaza post-war #We must have security control. I insist upon it#.
       `,
      bulleted: "unordered",
      buttonText1: "Israeli Intents ▶",
      isYouTube: false,
      isLocalVideo: true,
      reverse: false,
      buttonText2: "Israeli War Crimes ▶",
      onClick1: "./intents",
      onClick2: "./crimes"
    },
  
    warCrimesLiesSection: {
      imagePath: "",
      extraImagePath: "./HomePage/Azhar-University.mp4",
      overlayColor: "rgba(0, 0, 0, 0.6)",
      blur: "blur(3px)",
      isLocalVideo: true,
      title: "Israel Continues to Violate International Law and Spread Misinformation",
      subTitle: "This Includes:",
      text: 
      `The Death of Hundreds in the bombing of hospitals and ambulances.
      | Using internationally-banned chemical weapons.|
      Destroying civilian and holy structures such as schools, universities, bakeries, and mosques.
      | Bombing a secure route to South Gaza.|
      And much more.`,
      bulleted: "unordered",
      buttonText1: "Check Israeli Lies ▶",
      buttonText2: "Check Israeli War Crimes ▶",
      reverse: false,
      isYouTube: false,
      onClick1: "./lies",
      onClick2: "./crimes"
    },
  
    beforeAfterSection: {
      imagePath1: "./HomePage/Before.jpg",
      imagePath2: "./HomePage/After.jpg",
      imagePath1Resp: "./HomePage/Before-rot.png",
      imagePath2Resp: "./HomePage/After-rot.png",
      title: "Indiscriminate Attacks or Hamas is Everywhere",
      subTitle: "Before and after - Atatra, northern Gaza",
    },
  
    intenseGridBanner: {
      title: "This Is Real. See It With Your Own Eyes",
      bgColor:"",
      color:"",
    },
  
    intenseGridSection1: {
      videoSources: [
        "./HomePage/videos-grid/ChildSurvivor.mp4",
        "./HomePage/videos-grid/IsraelTargetsChildren.mp4",
        "./HomePage/videos-grid/ChildrenDead.mp4",
        "./HomePage/videos-grid/Child.mp4",
        "./HomePage/videos-grid/ChildrenGenocide.mp4",
        "./HomePage/videos-grid/ChildCarried.mp4",
        "./HomePage/videos-grid/Targeting Childrens2.mp4",
      ],
      violences: [
        false, true, true, false, true, true, true
      ]
    },
  
    intenseGridSection2: {
      videoSources: [
        "./CrimesPage/hospital0.mp4",
        "./CrimesPage/torture-raid-livestream.mp4",
        "./CrimesPage/destruction-by-israel1.mp4",
        "./CrimesPage/legs-video.mp4",
        "./CrimesPage/detain1.mp4",
        "./CrimesPage/israel-total.mp4",
        "./CrimesPage/bakery.mp4",
      ],
      violences: [
        false, true, false, true, true, false, false
      ]
    },
  
    blogBanner: {
      title: "Because Only a Few Media Outlets Care About Humanity... In Terms of Palestine",
      bgColor:"",
      color:""
    },

    interviewSection0: {
      imagePath: "https://img.freepik.com/premium-photo/concept-justice-law-scales-blue-background-3d_505080-404.jpg",
      extraImagePath: "./BlogsPage/sat.png",
      isYouTube: false,
      overlayColor: "rgba(0, 0, 0, 0.4)",
      blur: "blur(3px)",
      title: "What is a Proportionate Response?",
      subTitle: '',
      text: 
      `In this article you will understand what proportionality means as defined in the international humanitarian law and how it relates to the principle of distinction. 
      You will also be able to derive why Israel's response to the 7th of Oct. attack is not proportionate.`,
      buttonText1: "Read Blog ▶",
      buttonText2: "More Blogs ▶",
      reverse: true,
      bulleted: '',
      isLocalVideo: false,
      onClick1: './blogs/articles/what-is-a-proportional-response',
      onClick2: './blogs'
    },
    
    interviewSection1: {
      imagePath: "./HomePage/piers.webp",
      extraImagePath: "https://www.youtube.com/embed/4idQbwsvtUo?si=buoWlnAi7KOMcyyB\"",
      isYouTube: true,
      overlayColor: "rgba(0, 0, 0, 0.4)",
      blur: "blur(3px)",
      title: "Interview: Piers Morgan and Bassem Yousef",
      subTitle: '',
      text: 
      `In this interview, Bassem Yousef, an Egyptian comedian and satirist, 
      engages in a conversation with Piers Morgan about the recent events in Gaza. 
      The discussion revolves around the use of dark humor to highlight double standards in how people perceive Palestinians, 
      particularly in the context of the response to the October 7th attack by Israel.`,
      buttonText1: "Interview Analysis ▶",
      buttonText2: "More Blogs ▶",
      reverse: true,
      bulleted: '',
      isLocalVideo: false,
      onClick1: './blogs/interviews/piers-bassem-interview',
      onClick2: './blogs'
    },
  
    interviewSection2: {
      imagePath: "./HomePage/piers.webp",
      extraImagePath: "https://www.youtube.com/embed/YRFKkmsDpuw?si=m8UjFWMtwvPZ21ZU",
      isYouTube: true,
      overlayColor: "rgba(0, 0, 0, 0.6)",
      blur: "blur(3px)",
      title: "Interview: Piers Morgan and Cenk Ugyr",
      subTitle: '',
      text: `Cenk Uygur, co-founder and host of The Young Turks, 
      discusses the Israeli-Palestinian conflict with Piers Morgan, expressing frustration with what 
      he sees as double standards and bigotry against Palestinians and Muslims. 
      Uygur emphasizes that his criticism is not anti-Semitic and condemns both Hamas 
      and the Israeli government's actions.`,
      buttonText1: "Interview Analysis ▶",
      buttonText2: "More Blogs ▶",
      reverse: true,
      bulleted: '',
      isLocalVideo: false,
      onClick1: './blogs/interviews/piers-cenk-interview',
      onClick2: './blogs'
    },

  
    supportBanner: {
      title: "Please Stand with Palestine",
      bgColor: "#1a9eea",
      color: "white",
    },
  
    supportSection: {
      circular: false,
      minHeight: '40vh',
      imagePath: "./HomePage/paly.jpeg",
      overlayColor: "rgba(0, 0, 0, 0.6)",
      title: "Speak Up, Support Humanity, Support Palestine",
      subTitle: '',
      subTitle2: "Together, we can prevent thousands more from suffering and dying",
      buttonText1: "",
      buttonText2: "Here is What You Can Do",
      showDay: false,
      blur: "blur(4px)",
      onClick2: "./support"
    },
  };
  
  export default homeData;
  