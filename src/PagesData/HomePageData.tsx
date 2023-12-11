const homeData = {
    mainHeroSection: {
      circular: true,
      imagePath: "./HomePage/gaza-ouch.webp",
      overlayColor: "rgba(0, 0, 0, 0.35)",
      title: "9/11 is a Daily Reality in Palestine",
      subTitle: "Tens of Thousands of Innocents are being Brutally Murdered or Severely Injured",
      subTitle2: 
      `They painfully die incinerated by bombs, possibly mutilated, entire buildings fall on them or 
      they are burned with chemical weapons—all while enduring intense starvation.`,
      buttonText1: "Learn More ▼",
      buttonText2: "Support ♥",
      showDay: true,
      minHeight: "80vh",
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
      numbers: [6000, 4000, 38000, "~1.65M"],
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
      imagePath: "./HomePage/aqsa.webp",
      extraImagePath: "./HomePage/PMap.png",
      overlayColor: "rgba(0, 0, 0, 0.4)",
      blur: "blur(3px)",
      title: "Violence Did Not Begin with the Attacks from Hamas.",
      subTitle: "",
      text: 
      `Gaza has been under an illegal and violent blockade for 16 years.| 
       Israel occupies and continues to construct illegal settlements in the West Bank.| 
       Over 9000 Palestinians have been killed prior to this conflict since 2000, and over 4000 were imprisoned.`,
      bulleted: "ordered",
      buttonText1: "Check Historic Timeline ▶",
      buttonText2: "",
      reverse: true,
      isYouTube: false,
      isLocalVideo: false,
      onClick1: './timeline/historic'
    },

    recentTimelineEndSection: {
      imagePath: "https://www.aljazeera.com/wp-content/uploads/2023/12/346P4H2-highres-1701417296.jpg?resize=1170%2C780&quality=80",
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
      buttonText1: "Check Conflict Timeline ▶",
      buttonText2: "Read More",
      reverse: true,
      onClick1: './timeline/recent',
      onClick2: 'https://apnews.com/article/israel-hamas-war-news-12-1-2023-c944c736efdf8993c7a17cf683d6e364',
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
      buttonText1: "Check Conflict Timeline ▶",
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
     buttonText1: "Check Conflict Timeline ▶",
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
      buttonText1: "Check Israeli War Crimes ▶",
      buttonText2: "",
      isYouTube: false,
      isLocalVideo: true,
      reverse: false,
      onClick1: "./crimes"
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
      title: "This Isn't a Propaganda. See It With Your Own Eyes",
      bgColor:"",
      color:""
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
      onClick1: './blogs/piers-bassem-interview',
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
      onClick1: './blogs/piers-cenk-interview',
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
  