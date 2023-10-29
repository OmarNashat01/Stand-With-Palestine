import { TimelineSectionInterface } from "@/types/types";
import Scrollbar from "./scrollbar/Scrollbar";

const TimelineSection = ({
  sectionContent,
}: {
  sectionContent: TimelineSectionInterface;
}) => {
  return (
    <div>
      <Scrollbar date={sectionContent.date} />
    </div>
  );
};

export default TimelineSection;
