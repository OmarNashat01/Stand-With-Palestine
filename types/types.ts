export interface ContnetInterface {
  title: string;
  summary: string;
  killed: {
    count: number;
    summary: string;
  };
  injured: {
    count: number;
    summary: string;
  };
}
export interface SubeventInterface {
  title: string;
  image: string;
  link: string;
  summary: string;
}
export interface TimelineSectionInterface {
  direction: "left" | "right";
  // images: string[];
  date: {
    day: string;
    month: string;
    year: string;
  };
  // content: ContnetInterface;
  // subEvents: SubeventInterface[];
}
