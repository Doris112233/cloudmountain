import React from "react";
import { useIntl, setLocale } from "umi";
import { Timeline as TimeL } from "antd";
import "./index.less";
import timelineStructure from "../../../data/timelineStructure";

const Timeline: React.FC = (props) => {
  const intl = useIntl();

  // const { Item } = TimeL;

  const timeDot = (time: string, green: boolean) => {
    return (
      <div
        className="time-dot"
        style={{ backgroundColor: green ? "#8da745" : "#f39800" }}
      >
        {time}
      </div>
    );
  };

  const newTimeline = () => {
    // const reversedData = [...timelineStructure].reverse();
    let st = 2022;
    return (
      <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
        <ul className="timeline timeline-split">
          {timelineStructure.map((item, index) => {
            const year = parseInt(item.time.split(".")[0]);
            if (year < st) {
              st = year;
            }
            return (
              <li className="timeline-item" key={`${item.time}-${index}`}>
                <div className="timeline-info">
                  <span>{item.time}</span>
                </div>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <p>{intl.formatMessage({ id: item.key })}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div className="row example-split">
      {/* <Card> */}
      <div className="col-md-12 example-title">
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
          {intl.formatMessage({ id: "timeline.title" })}
        </h2>
      </div>
      {newTimeline()}
      {/* </Card> */}
    </div>
  );
};

export default Timeline;
