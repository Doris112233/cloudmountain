import React from 'react';
import { useIntl, setLocale } from 'umi';
import { Timeline as TimeL } from 'antd';
import './index.less';
import data from '../../../data/timeline';

const Timeline: React.FC = (props) => {
  const intl = useIntl();

  const { Item } = TimeL;

  const timeDot = (time: string, green: boolean) => {
    return (
      <div
        className="time-dot"
        style={{ backgroundColor: green ? '#8da745' : '#f39800' }}
      >
        {time}
      </div>
    );
  };

  const renderTimeline = () => {
    data.reverse();
    let st = 2022;
    let reve = true;
    return (
      <TimeL mode="alternate">
        {data.map((item, index) => {
          if (item.time.split('.')[0] < st) {
            st = parseInt(item.time.split('.')[0]);
            reve = !reve;
          }
          return (
            <Item dot={timeDot(item.time, reve)}>
              <div className={index % 2 ? 'tl-left' : 'tl-right'}>
                {item.text}
              </div>
            </Item>
          );
        })}
        <Item
          dot={
            <div
              className="time-dot"
              style={{ backgroundColor: !reve ? '#8da745' : '#f39800' }}
            >
              开始
            </div>
          }
        ></Item>
      </TimeL>
    );
  };

  const newTimeline = () => {
    data.reverse();
    let st = 2022;
    return (
      <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
        <ul className="timeline timeline-split">
          {data.map((item, index) => {
            if (item.time.split('.')[0] < st) {
              st = parseInt(item.time.split('.')[0]);
            }
            return (
              <li className="timeline-item">
                <div className="timeline-info">
                  <span>{item.time}</span>
                </div>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <p>{item.text}</p>
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
        <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>云山大事记</h2>
      </div>
      {newTimeline()}
      {/* </Card> */}
    </div>
  );
};

export default Timeline;
