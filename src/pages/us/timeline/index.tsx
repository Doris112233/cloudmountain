import React from "react";
import { useIntl } from "@umijs/max";
import "./index.less";
import timelineStructure from "../../../data/timelineStructure";

const Timeline: React.FC = () => {
  const intl = useIntl();

  const newTimeline = () => {
    return (
      <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
        <ul className="timeline timeline-split">
          {timelineStructure.map((item, index) => {
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
      <div className="col-md-12 example-title">
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
          {intl.formatMessage({ id: "timeline.title" })}
        </h2>
      </div>
      {newTimeline()}
    </div>
  );
};

export default Timeline;
