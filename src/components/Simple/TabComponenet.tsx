import React, { useState, useEffect } from 'react';

interface TabComponentProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: string[];

}

const TabComponent: React.FC<TabComponentProps> = ({ activeTab, setActiveTab, tabs }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
  
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Remove event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const renderTabs = () => {
    return tabs.map((tab) => (
      <div
        key={tab}
        onClick={() => handleTabClick(tab)}
        style={{
          color: activeTab===tab ? 'white':'grey',
          padding: '0.3rem 1.2rem',
          backgroundColor: activeTab === tab ? 'red' : 'transparent',
          borderRadius: '25px',
          border: activeTab === tab ? '1px solid red' : '1px solid grey',
          cursor: 'pointer',
          fontSize:'0.9rem',
        }}
      >
        {tab}
      </div>
    ));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', margin: '1.5rem 0rem 1.0rem 0rem', justifyContent: 'center', gap: (screenWidth>900)?'3rem':'0.5rem', flexWrap:'wrap' }}>
      {renderTabs()}
    </div>
  );
};

export default TabComponent;
