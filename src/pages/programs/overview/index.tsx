import React from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@mui/material/Grid';
import { Button } from 'antd';
import { Link } from 'umi';
import './index.less';
import data from '../../../data/programs';

const Overview: React.FC = () => {
  const intl = useIntl();
  const cards = [
    {
      title: intl.formatMessage({ id: 'programs.overview.investigation' }),
      img: data.ov1,
      link: '/programs/investigation',
    },
    {
      title: intl.formatMessage({ id: 'programs.overview.community' }),
      img: data.ov2,
      link: '/programs/community',
    },
    {
      title: intl.formatMessage({ id: 'programs.overview.public' }),
      img: data.ov3,
      link: '/programs/public',
    },
  ];
  return (
    <div className="article-container">
      <div className="overview-container">
        <div className="overview-title">
          <h2>{intl.formatMessage({ id: 'programs.overview.title' })}</h2>
        </div>
        <div className="overview-content">
          <p>{intl.formatMessage({ id: 'programs.overview.content.1' })}</p>
          <p>{intl.formatMessage({ id: 'programs.overview.content.2' })}</p>
          <p>{intl.formatMessage({ id: 'programs.overview.content.3' })}</p>
          <p>{intl.formatMessage({ id: 'programs.overview.content.4' })}</p>
          <p>{intl.formatMessage({ id: 'programs.overview.content.5' })}</p>
        </div>
      </div>

      <div className="overview-image">
        <Grid container spacing={4} justifyContent="center">
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <div className="overview-image-card">
                <div className="image-container">
                  <img src={card.img} alt={card.title} />
                </div>
                <div className="card-overlay">
                  <h3>{card.title}</h3>
                  <Button className="learn-more-btn">
                    <Link to={card.link}>
                      {intl.formatMessage({ id: 'programs.overview.learn' })}
                    </Link>
                  </Button>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Overview;
