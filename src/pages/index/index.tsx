import React, { useState } from 'react';
import { useIntl, setLocale } from 'umi';
import { Button } from 'antd';
import { Box } from '@mui/material';
import './index.less';
import data from '../../data/index';
import { Link, history } from 'umi';
import { CaretRightOutlined } from '@ant-design/icons';

const ellipse1 = data.ellipse1;
const ellipse2 = data.ellipse2;
const ellipse3 = data.ellipse3;

const Index: React.FC = (props) => {
  const intl = useIntl();
  const [expanded, setExpanded] = useState('wild');

  const cards = [
    {
      key: 'wild',
      shortLabel: intl.formatMessage({ id: 'home.work.card.wild.short' }),
      longLabel: intl.formatMessage({ id: 'home.work.card.wild.long' }),
      img: ellipse1,
      path: '/programs/investigation',
    },
    {
      key: 'community',
      shortLabel: intl.formatMessage({ id: 'home.work.card.community.short' }),
      longLabel: intl.formatMessage({ id: 'home.work.card.community.long' }),
      img: ellipse2,
      path: '/programs/community',
    },
    {
      key: 'public',
      shortLabel: intl.formatMessage({ id: 'home.work.card.public.short' }),
      longLabel: intl.formatMessage({ id: 'home.work.card.public.long' }),
      img: ellipse3,
      path: '/programs/public',
    },
  ];

  return (
    <div className="full-page">
      <div className="section-container section-head">
        <div className="image-head-section">
          <img src={data.headpic} />
        </div>
        <div className="text-head-section">
          <h1>{intl.formatMessage({ id: 'home.title' })}</h1>
          <p>{intl.formatMessage({ id: 'home.description' })}</p>
          <Box
            sx={{
              marginTop: '10px',
              display: 'flex',
              justifyContent: 'flex-start',
              gap: '10px',
              flexDirection: {
                xxs: 'column',
                xs: 'column',
                sm: 'row',
                md: 'row',
              },
            }}
          >
            <Button>
              <Link to="/us/overview">
                <b>{intl.formatMessage({ id: 'home.button.learn' })}</b>
              </Link>
            </Button>
            <Button
              style={{
                marginLeft: '-10px',
              }}
              type="text"
              icon={<CaretRightOutlined />}
              className="responsive-button"
            >
              <Link to="/support/month" style={{ color: 'inherit' }}>
                <b>{intl.formatMessage({ id: 'home.support' })}</b>
              </Link>
            </Button>
          </Box>
        </div>
      </div>

      <div className="section-container section-why">
        <div className="why-image-section">
          <img src={data.map} alt="Gibbon distribution map" />
        </div>
        <div className="why-text-section">
          <div className="content-title">
            <h2>{intl.formatMessage({ id: 'home.why.title' })}</h2>
          </div>
          <div className="content-desc">
            <p>{intl.formatMessage({ id: 'home.why.content' })}</p>
          </div>
          <div className="content-button-container">
            <Button className="content-button">
              <Link to="/protect/archive">
                <b>{intl.formatMessage({ id: 'home.button.learn' })}</b>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="section-container section-work">
        <div className="work-left">
          <div className="content-title">
            <h2>{intl.formatMessage({ id: 'home.work.title' })}</h2>
          </div>
          <div className="content-desc">
            {intl.formatMessage({ id: 'home.work.content' })}
          </div>
          <div className="content-button-container">
            <Button className="content-button">
              <Link to="/programs/overview">
                <b>{intl.formatMessage({ id: 'home.button.learn' })}</b>
              </Link>
            </Button>
          </div>
        </div>
        <div className="work-right">
          {cards.map((card) => (
            <div
              key={card.key}
              className={`work-card ${card.key} ${
                expanded === card.key ? 'expanded' : 'shrunk'
              }`}
              onClick={() => {
                if (expanded === card.key) {
                  history.push(card.path);
                } else {
                  setExpanded(card.key);
                }
              }}
            >
              <img src={card.img} alt={card.longLabel} />
              <div className="work-card-label">
                <span>
                  {expanded === card.key ? card.longLabel : card.shortLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-story">
        <div className="story-title">
          <h2>{intl.formatMessage({ id: 'home.story.title' })}</h2>
        </div>
        <div className="story-cards">
          <div className="story-card">
            <div className="story-card-image">
              <Link to="/programs/investigation">
                <img src={data.story1} alt="story1" />
              </Link>
            </div>
            <p>
              {intl.formatMessage({ id: 'home.story.card1' })}{' '}
              <span className="arrow">{'>'}</span>
            </p>
          </div>
          <div className="story-card">
            <div className="story-card-image">
              <Link to="/programs/community">
                <img src={data.story2} alt="story2" />
              </Link>
            </div>
            <p>
              {intl.formatMessage({ id: 'home.story.card2' })}{' '}
              <span className="arrow">{'>'}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="section-support">
        <div className="support-content">
          <div className="content-desc support-desc">
            <h2>{intl.formatMessage({ id: 'home.support.content' })}</h2>
          </div>
          <div className="content-button-container">
            <Button className="content-button">
              <Link to="/support/month">
                <b>{intl.formatMessage({ id: 'home.support' })}</b>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
