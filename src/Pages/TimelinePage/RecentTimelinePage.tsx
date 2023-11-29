import React from "react";
import { Timeline, TimelineItemsProps } from "react-alternating-timeline";
import "./RecentTimelinePage.scss";
import { Zoom } from "react-swift-reveal";
import Banner from "../../components/Simple/Banner";

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

const dailyNews = [
  {
    date: new Date("2023-10-08"),
    title: "Day 1",
    events: [
      {
        text: "At least 510 Palestinians had been killed and 2,751 are injured",
        link: "https://edition.cnn.com/videos/world/2023/10/10/drone-video-israel-airstrikes-gaza-hamas-es-intl-ldn-vpx.cnn",
        description: "",
        images: []
      },
      {
        text: "Several buildings have been razed to the ground by Israeli airstrikes in Gaza City. ",
        link: "https://edition.cnn.com/videos/world/2023/10/10/drone-video-israel-airstrikes-gaza-hamas-es-intl-ldn-vpx.cnn",
        description: "",
        images: []
      },
      {
        text: "An Israeli airstrike kills 19 members of the same family in southern Gaza refugee camp.",
        link: "https://edition.cnn.com/videos/world/2023/10/10/drone-video-israel-airstrikes-gaza-hamas-es-intl-ldn-vpx.cnn",
        description: "",
        images: []
      },
      {
        text: "At least 510 Palestinians had been killed and 2,751 are injured",
        link: "https://edition.cnn.com/videos/world/2023/10/10/drone-video-israel-airstrikes-gaza-hamas-es-intl-ldn-vpx.cnn",
        description: "",
        images: []
      },
    ],
  },
  {
    date: new Date("2023-10-09"),
    title: "Day 2",
    events: [
      {
        text: "At least 510 Palestinians had been killed and 2,751 are injured",
        link: "https://edition.cnn.com/videos/world/2023/10/10/drone-video-israel-airstrikes-gaza-hamas-es-intl-ldn-vpx.cnn",
        description: "",
        images: []
      },
      {
        text: "Several buildings have been razed to the ground by Israeli airstrikes in Gaza City. ",
        link: "https://edition.cnn.com/videos/world/2023/10/10/drone-video-israel-airstrikes-gaza-hamas-es-intl-ldn-vpx.cnn",
        description: "",
        images: []
      },
      {
        text: "An Israeli airstrike kills 19 members of the same family in southern Gaza refugee camp.",
        link: "https://edition.cnn.com/videos/world/2023/10/10/drone-video-israel-airstrikes-gaza-hamas-es-intl-ldn-vpx.cnn",
        description: "",
        images: []
      },
      {
        text: "At least 510 Palestinians had been killed and 2,751 are injured",
        link: "https://edition.cnn.com/videos/world/2023/10/10/drone-video-israel-airstrikes-gaza-hamas-es-intl-ldn-vpx.cnn",
        description: "",
        images: []
      },
    ],
  },
  {
    date: new Date("2023-10-10"),
    title: "Day 3",
    events: [
      {
        text: "At least 510 Palestinians had been killed and 2,751 are injured",
        link: "https://edition.cnn.com/videos/world/2023/10/10/drone-video-israel-airstrikes-gaza-hamas-es-intl-ldn-vpx.cnn",
        description: "",
        images: []
      },
      {
        text: "Several buildings have been razed to the ground by Israeli airstrikes in Gaza City. ",
        link: "https://edition.cnn.com/videos/world/2023/10/10/drone-video-israel-airstrikes-gaza-hamas-es-intl-ldn-vpx.cnn",
        description: "",
        images: []
      },
      {
        text: "An Israeli airstrike kills 19 members of the same family in southern Gaza refugee camp.",
        link: "https://edition.cnn.com/videos/world/2023/10/10/drone-video-israel-airstrikes-gaza-hamas-es-intl-ldn-vpx.cnn",
        description: "",
        images: []
      },
      {
        text: "At least 510 Palestinians had been killed and 2,751 are injured",
        link: "https://edition.cnn.com/videos/world/2023/10/10/drone-video-israel-airstrikes-gaza-hamas-es-intl-ldn-vpx.cnn",
        description: "",
        images: []
      },
    ],
  },
  {
    date: new Date("2023-10-11"),
    title: "Day 4",
    events: [
      {
        text: "At least 510 Palestinians had been killed and 2,751 are injured",
        link: "https://edition.cnn.com/videos/world/2023/10/10/drone-video-israel-airstrikes-gaza-hamas-es-intl-ldn-vpx.cnn",
        description: "",
        images: []
      },
      {
        text: "Several buildings have been razed to the ground by Israeli airstrikes in Gaza City. ",
        link: "https://edition.cnn.com/videos/world/2023/10/10/drone-video-israel-airstrikes-gaza-hamas-es-intl-ldn-vpx.cnn",
        description: "",
        images: []
      },
      {
        text: "An Israeli airstrike kills 19 members of the same family in southern Gaza refugee camp.",
        link: "https://edition.cnn.com/videos/world/2023/10/10/drone-video-israel-airstrikes-gaza-hamas-es-intl-ldn-vpx.cnn",
        description: "",
        images: []
      },
      {
        text: "At least 510 Palestinians had been killed and 2,751 are injured",
        link: "https://edition.cnn.com/videos/world/2023/10/10/drone-video-israel-airstrikes-gaza-hamas-es-intl-ldn-vpx.cnn",
        description: "",
        images: []
      },
    ],
  },
  {
    date: new Date("2023-10-12"),
    title: "Day 5",
    events: [
      {
        text: "At least 510 Palestinians had been killed and 2,751 are injured",
        link: "https://edition.cnn.com/videos/world/2023/10/10/drone-video-israel-airstrikes-gaza-hamas-es-intl-ldn-vpx.cnn",
        description: "",
        images: []
      },
      {
        text: "Several buildings have been razed to the ground by Israeli airstrikes in Gaza City. ",
        link: "https://edition.cnn.com/videos/world/2023/10/10/drone-video-israel-airstrikes-gaza-hamas-es-intl-ldn-vpx.cnn",
        description: "",
        images: []
      },
      {
        text: "An Israeli airstrike kills 19 members of the same family in southern Gaza refugee camp.",
        link: "https://edition.cnn.com/videos/world/2023/10/10/drone-video-israel-airstrikes-gaza-hamas-es-intl-ldn-vpx.cnn",
        description: "",
        images: []
      },
      {
        text: "At least 510 Palestinians had been killed and 2,751 are injured",
        link: "https://edition.cnn.com/videos/world/2023/10/10/drone-video-israel-airstrikes-gaza-hamas-es-intl-ldn-vpx.cnn",
        description: "",
        images: []
      },
    ],
  },
];

const items: TimelineItemsProps = dailyNews.reverse().map((news, index) => ({
  key: `item-${index}`,
  date: news.date,
  children: ((index>1) ?     <Zoom duration={300}><TimelineCard cardData={news} /></Zoom> : <TimelineCard cardData={news} />)
  ,
}));

const HistoricTimelinePage: React.FC = () => {
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

    </div>
  );
};

export default HistoricTimelinePage;
