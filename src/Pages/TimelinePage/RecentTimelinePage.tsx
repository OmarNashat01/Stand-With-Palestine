import React from 'react';
import GradientHero from "../../components/Simple/GradientHero";

const RecentTimelinePage: React.FC = () => {
  return (
    <div style={{ flex: 1, borderTopLeftRadius: '4rem', borderTopRightRadius: '4rem', backgroundColor: '#101010' }}>
            <GradientHero title={"COMING SOON"} subTitle1="This Page is Under Construction" subTitle2="We Are Working Hard To Get This Up Quickly!" />
    </div>
  );
};

export default RecentTimelinePage;
