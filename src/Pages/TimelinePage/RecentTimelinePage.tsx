import React from "react";
import { Timeline, TimelineItemsProps } from "react-alternating-timeline";
import "./RecentTimelinePage.scss";
import { Zoom } from "react-swift-reveal";
import Banner from "../../components/Simple/Banner";
import { dailyNews } from "../../PagesData/TimelinePageData";

type Event = {
  text: string;
  link?: string;
  description?:string;
  images?:string[];
};

interface TimelineCardInterface {
  title: string;
  events: Event[];
}

export function TimelineCard({
  cardData,
}: {
  cardData: TimelineCardInterface;
}) {
  return (
      <div className="points-list">
        <h1>{cardData.title}</h1>
        <ol className="my-list">
          {cardData.events.map((e, index) => (
            <li key={index} tabIndex={1}>
              {e.link ? (
                <a href={e.link} target="_blank" rel="noopener noreferrer">
                  {e.text}
                </a>
              ) : (
                <span>{e.text}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
  );
}

const items: TimelineItemsProps = dailyNews.map((news, index) => ({
  key: `item-${index}`,
  date: news.date,
  children: ((index>1) ? <Zoom duration={300}><TimelineCard cardData={news} /></Zoom> : <TimelineCard cardData={news} />)
  ,
}));

const RecentTimelinePage: React.FC = () => {
  return (
    <div className="timeline-container">
      <Banner
        title="Major News Headlines Regarding Gaza Since Oct. 7"
        styleObj={{ color: "white" }}
      />
      <Timeline
        items={items}
        formatDate={(date: Date) =>
          date.toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        }
        positioning="left"
      />
          <p style={{color: '#7f7f7f', margin: 'auto', textAlign: 'center', marginBottom: '-1rem'}}> This page is updated every few days... </p>

    </div>
  );
};

export default RecentTimelinePage;
