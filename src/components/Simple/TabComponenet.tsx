import React, { useState, useEffect } from 'react';

interface TabComponentProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: string[];
  tabUI?: boolean;
  smallGap?: boolean;
  leftAlign?: boolean;
  manyTabs?: boolean;
  redSelected?: boolean;

}

const TabComponent: React.FC<TabComponentProps> = ({ activeTab, setActiveTab, tabs, tabUI = true, smallGap = false, leftAlign = false, manyTabs = true, redSelected = false }) => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

      // Remove event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
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
          textAlign: 'center',
          color: activeTab === tab ? 'white' : 'grey',
          padding: '0.3rem 1.2rem',
          backgroundColor: activeTab === tab ? (redSelected ? '#d60a0a' : '#151515') : 'transparent',
          borderRadius: (!manyTabs || (screenWidth > 900 && tabUI)) ? '15px 15px 0 0' : '25px',
          borderTop: activeTab === tab ? '1px solid #151515' : '0.5px solid  #2f2f2f',
          borderLeft: activeTab === tab ? '1px solid #151515' : '0.5px solid  #2f2f2f',
          borderRight: activeTab === tab ? '1px solid #151515' : '0.5px solid  #2f2f2f',
          borderBottom: ((screenWidth < 900 && manyTabs) || !tabUI) ? activeTab === tab ? '1px solid #151515' : '0.5px solid  #2f2f2f' : '',
          cursor: 'pointer',
          fontSize: '0.9rem',
        }}
      >
        {tab}
      </div>
    ));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', margin: (!manyTabs || screenWidth > 900) ? '1.5rem 1rem 0.0rem 1rem' : '1.1rem 1rem 1.1rem 1rem', justifyContent: (leftAlign) ? 'flex-start' : 'center', gap: (screenWidth > 900 && !smallGap) ? '3rem' : '0.5rem', flexWrap: 'wrap' }}>
      {renderTabs()}
    </div>
  );
};

export default TabComponent;
