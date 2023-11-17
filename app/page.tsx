import Hero from "./components/hero/hero";

import styles from "./page.module.scss";
import TimelineSection from "./components/timelinesection/TimelineSection";
import { TimelineSectionInterface } from "@/types/types";

const sectionContent: TimelineSectionInterface = {
  date: {
    day: "17",
    month: "oct",
    year: "2023",
  },
  direction: "left",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero
        title={"How long will the lies and aggression continue?"}
        imgPath={"/images/hero.png"}
      />
    </main>
  );
}
