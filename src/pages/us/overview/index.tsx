import { Menu } from 'antd';
import './index.less';
import Contact from '../contact';
import Partner from '../partner';
import Council from '../council';
import Timeline from '../timeline';
import Will from '../will';
import Report from '../../report';
import { useState } from 'react';
import { useIntl } from 'umi';
import { useMediaQuery } from 'react-responsive';
import Honor from '../honor';

const sectionComponents = {
  will: <Will />,
  council: <Council />,
  report: <Report initCurr={0} />,
  timeline: <Timeline />,
  partner: <Partner />,
  contact: <Contact />,
  honor: <Honor />,
};

export default function Overview() {
  const intl = useIntl();
  const [currentSection, setCurrentSection] = useState('will');
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleMenuClick = (e: any) => {
    setCurrentSection(e.key);
  };

  const sectionKeys = [
    {
      key: 'will',
      label: intl.formatMessage({ id: 'about.menu.will' }),
    },
    {
      key: 'council',
      label: intl.formatMessage({ id: 'about.menu.council' }),
    },
    {
      key: 'report',
      label: intl.formatMessage({ id: 'about.menu.report' }),
    },
    {
      key: 'timeline',
      label: intl.formatMessage({ id: 'about.menu.timeline' }),
    },
    {
      key: 'partner',
      label: intl.formatMessage({ id: 'about.menu.partner' }),
    },
    {
      key: 'honor',
      label: intl.formatMessage({ id: 'about.menu.honor' }),
    },
    {
      key: 'contact',
      label: intl.formatMessage({ id: 'about.menu.contact' }),
    },
  ];

  return (
    <div>
      <div className="article-container">
        <div className="overview-container">
          <div className="overview-title">
            <h2>{intl.formatMessage({ id: 'about.overview.title' })}</h2>
          </div>
          <div className="overview-content">
            <p>{intl.formatMessage({ id: 'about.overview.content.1' })}</p>
            <p>{intl.formatMessage({ id: 'about.overview.content.2' })}</p>
            <p>{intl.formatMessage({ id: 'about.overview.content.3' })}</p>
          </div>
        </div>
        <div className="us-content">
          <div className="us-menu">
            <Menu
              mode={isMobile ? 'horizontal' : 'inline'}
              defaultSelectedKeys={['1']}
              items={sectionKeys}
              onClick={handleMenuClick}
              style={{ justifyContent: 'center', width: '100%' }}
            />
          </div>
          <div style={{ flex: 1 }} className="us-section">
            {
              sectionComponents[
                currentSection as keyof typeof sectionComponents
              ]
            }
          </div>
        </div>
      </div>
    </div>
  );
}
