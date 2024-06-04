import React from 'react';
import GradientHero from "@/components/Simple/GradientHero";
import Image from 'next/image';

const NotFoundPage: React.FC = () => {
  return (
    <div
      style={{
        flex: 1,
        borderTopLeftRadius: '4rem',
        borderTopRightRadius: '4rem',
        backgroundColor: '#101010',
      }}
    >
      {/* Assuming CrimeHero and Banner components are imported */}
      <GradientHero title={"Page Not Found"} subTitle1={"Are You Lost?"} subTitle2={"Here is an Original Map of Palestine to Help You Get Back on Your Way"} />
      <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
        <Image src="/POG.gif" alt="Palestine Map" width={617} height={1031} />
      </div>
    </div>
  );
};

export default NotFoundPage;
