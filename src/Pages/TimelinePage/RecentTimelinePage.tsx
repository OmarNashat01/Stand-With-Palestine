import React from "react";
import { Timeline, TimelineItemsProps } from "react-alternating-timeline";
import "./RecentTimelinePage.scss";

type Event = {
  text: string;
  link?: string;
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
        {cardData.events.map((e) => {
          return e.link ? (
            <li tabIndex={1}>
              <a href={e.link} target="_blank">
                {e.text}
              </a>
            </li>
          ) : (
            <li tabIndex={1}>{e.text}</li>
          );
        })}
      </ol>
    </div>
  );
}

const items: TimelineItemsProps = [
  {
    key: "first",
    date: new Date("2023-10-08"),
    children: (
      <TimelineCard
        cardData={{
          title: "First Day of Extermination",
          events: [
            {
              text: "At least 510 Palestinians had been killed and 2,751 are injured",
            },
            {
              text: "Several buildings have been razed to the ground by Israeli airstrikes in Gaza City. ",
            },
            {
              text: "An Israeli airstrike kills 19 members of the same family in southern Gaza refugee camp.",
            },
            {
              text: "At least 510 Palestinians had been killed and 2,751 are injured",
              link: "https://edition.cnn.com/videos/world/2023/10/10/drone-video-israel-airstrikes-gaza-hamas-es-intl-ldn-vpx.cnn",
            },
          ],
        }}
      />
    ),
  },
  {
    key: "second",
    date: new Date("2023-10-09"),
    children: (
      <TimelineCard
        cardData={{
          title: "Second Day of Extermination",
          events: [
            {
              text: "7 Palestinians killed by Israeli forces in West Bank",
            },
            {
              text: "Israeli defense minister announces ‘complete siege’ of Gaza: No power, food or fuel.",
              link: "https://web.archive.org/web/20231009105739/https://www.timesofisrael.com/liveblog_entry/defense-minister-announces-complete-siege-of-gaza-no-power-food-or-fuel/",
            },
            {
              text: "At least 510 Palestinians had been killed and 2,751 are injured",
            },
          ],
        }}
      />
    ),
  },
  {
    key: "third",
    date: new Date("2023-10-09"),
    children: (
      <TimelineCard
        cardData={{
          title: "Second Day of Extermination",
          events: [
            {
              text: "7 Palestinians killed by Israeli forces in West Bank",
            },
            {
              text: "Israeli defense minister announces ‘complete siege’ of Gaza: No power, food or fuel.",
              link: "https://web.archive.org/web/20231009105739/https://www.timesofisrael.com/liveblog_entry/defense-minister-announces-complete-siege-of-gaza-no-power-food-or-fuel/",
            },
            {
              text: "At least 510 Palestinians had been killed and 2,751 are injured",
            },
          ],
        }}
      />
    ),
  },
  {
    key: "fourth",
    date: new Date("2023-10-09"),
    children: (
      <TimelineCard
        cardData={{
          title: "Second Day of Extermination",
          events: [
            {
              text: "7 Palestinians killed by Israeli forces in West Bank",
            },
            {
              text: "Israeli defense minister announces ‘complete siege’ of Gaza: No power, food or fuel.",
              link: "https://web.archive.org/web/20231009105739/https://www.timesofisrael.com/liveblog_entry/defense-minister-announces-complete-siege-of-gaza-no-power-food-or-fuel/",
            },
            {
              text: "At least 510 Palestinians had been killed and 2,751 are injured",
            },
          ],
        }}
      />
    ),
  },
  {
    key: "fifth",
    date: new Date("2023-10-09"),
    children: (
      <TimelineCard
        cardData={{
          title: "Second Day of Extermination",
          events: [
            {
              text: "7 Palestinians killed by Israeli forces in West Bank",
            },
            {
              text: "Israeli defense minister announces ‘complete siege’ of Gaza: No power, food or fuel.",
              link: "https://web.archive.org/web/20231009105739/https://www.timesofisrael.com/liveblog_entry/defense-minister-announces-complete-siege-of-gaza-no-power-food-or-fuel/",
            },
            {
              text: "At least 510 Palestinians had been killed and 2,751 are injured",
            },
          ],
        }}
      />
    ),
  },
];
const HistoricTimelinePage: React.FC = () => {
  return (
    <div className="timeline-container">
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
