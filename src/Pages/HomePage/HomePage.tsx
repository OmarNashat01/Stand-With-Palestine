import React from 'react';
// Homepage Primary Subcomponents
import HeroWideSectionExtra from '../../components/HeroSections/HeroWideSectionExtra';
import HeroDigitsSection from '../../components/HeroSections/HeroDigitsSection';
import HeroWideSection from '../../components/HeroSections/HeroWideSection';
import HeroSliderImage from '../../components/HeroSections/HeroSliderImage';
import HeroGridVideo from '../../components/HeroSections/HeroGridVideo';
import HeroButton from '../../components/Simple/HeroButton';
import LazyLoad from 'react-lazyload';
// Homepage Secondary Subcomponents
import Banner from '../../components/Simple/Banner';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


// Homepage Data
import homeData from '../../PagesData/HomePageData'

const HomePage = () => {

  return (
    <div style={{ flex: 1, borderTopLeftRadius: '4rem', borderTopRightRadius: '4rem', backgroundColor: '#101010' }}>
      {/* Main Hero Section*/}
      <HeroWideSection {...homeData.mainHeroSection} />
      
      {/* Intense Section*/}
      <Banner {...homeData.intenseGridBanner} />
      <Carousel swipeable={false} interval={50000} autoPlay infiniteLoop showStatus={false}>
        {/* @ts-ignore */}
        <HeroGridVideo {...homeData.intenseGridSection1} />
        {/* <HeroGridVideo {...homeData.intenseGridSection2} /> */}
      </Carousel >

      {/* Status Section*/}
      <Banner {...homeData.statusBanner} id="first-banner"/>
      <HeroDigitsSection {...homeData.statusSection} />

      {/* Timeline Section*/}
      <Banner {...homeData.timelineBanner} />
      <Carousel swipeable={false} interval={50000} autoPlay infiniteLoop showStatus={false} dynamicHeight={true}>
        <HeroWideSectionExtra {...homeData.historicTimelineSection}/>
        <HeroWideSectionExtra {...homeData.recentTimelineVeto2Section}/>
        <HeroWideSectionExtra {...homeData.recentTimelineVetoSection}/>
        <HeroWideSectionExtra {...homeData.recentTimelineEndSection}/>
        <HeroWideSectionExtra {...homeData.recentTimelineCrimeSection}/>
        <HeroWideSectionExtra {...homeData.recentTimelineDiplomaticSection}/>
      </Carousel>

      {/* War Lies and Crimes Section*/}
      <Banner {...homeData.warCrimeBanner} />
      <Carousel swipeable={false} interval={50000} autoPlay infiniteLoop showStatus={false} dynamicHeight={true}>
        <HeroWideSectionExtra {...homeData.genocideSection}/>
        <HeroWideSectionExtra {...homeData.warCrimesLiesSection}/>
        <HeroSliderImage {...homeData.beforeAfterSection} />
      </Carousel>



      {/* Blogs Section*/}
      <Banner {...homeData.blogBanner} />
      <Carousel swipeable={false} interval={50000} autoPlay infiniteLoop showStatus={false}>
        <HeroWideSectionExtra {...homeData.interviewSection1} />
        <HeroWideSectionExtra {...homeData.interviewSection0} />
        <HeroWideSectionExtra {...homeData.interviewSection2} />
      </Carousel>

      {/* Support Section*/}
      <Banner {...homeData.supportBanner} />
      <HeroWideSection {...homeData.supportSection}
      />
    </div>
  );
}

export default HomePage;