import styles from "./page.module.scss";
import TimelineSection from "./components/timelinesection/TimelineSection";
import { TimelineSectionInterface } from "@/types/types";

export default function Home() {
  const sectionContent: TimelineSectionInterface = {
    date: {
      day: "17",
      month: "oct",
      year: "2023",
    },
    direction: "left",
  };
  return (
    <main className={styles.main}>
      <TimelineSection sectionContent={sectionContent} />
    </main>
  );
}
