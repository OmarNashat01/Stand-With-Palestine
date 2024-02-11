import React from "react";
import { Timeline, TimelineItemsProps } from "react-alternating-timeline";
import "./RecentTimelinePage.scss";
import { Zoom } from "react-swift-reveal";
import Banner from "../../components/Simple/Banner";
import { dailyNews } from "../../PagesData/TimelinePageData";
import Head from "../../components/Simple/Head";

type Event = {
  text: string;
  link?: string | null;
  description?: string;
  images?: string[];
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
      <Head
        title="Recent Timeline!"
        description="Get updated status for the timeline of the recent war and the major events occuring in it."
        keywords="Palestinian-Isreali war timeline, Isreali-Palestinian war timeline, Palestinian-Isreali war events, Palestinian-Isreali war latest events"
        image=""
        url=""
      />
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
  date: new Date(news.date),
  children: ((index < dailyNews.length - 2) ? <Zoom duration={300}><TimelineCard cardData={news} /></Zoom> : <TimelineCard cardData={news} />)
  ,
})).reverse();

const RecentTimelinePage: React.FC = () => {
  return (
    <div className="timeline-container">
      <Banner
        title="Major News Headlines Regarding Gaza Since Oct. 7"
        styleObj={{ color: "white" }}
      />
      <p style={{ color: '#7f7f7f', margin: 'auto', textAlign: 'center', marginBottom: '-5rem' }}> This page is updated every few days... </p>
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

    </div>
  );
};

export default RecentTimelinePage;
