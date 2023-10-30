import "./styles.scss";

interface DateInterface {
  day: string;
  month: string;
  year: string;
}

const Scrollbar = ({ date }: { date: DateInterface }) => {
  return (
    <div className="scrollbar">
      <div className="movable-part">
        <div className="v">
          <div className="h">
            <div className="hl" />
            <p>
              {date.day} {date.month}
            </p>
          </div>
          <h3>{date.year}</h3>
        </div>
      </div>

      <div className="vl" />
    </div>
  );
};

export default Scrollbar;
