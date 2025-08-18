import React from 'react';
import { useIntl } from 'umi';
import Grid from '@mui/material/Grid';
import data from '../../../data/partner';
import './index.less';
import Divider from '@mui/material/Divider';

const Partner: React.FC = (props) => {
  const intl = useIntl();

  const src = data[0].src;
  const partners = [
    {
      name: intl.formatMessage({ id: 'us.partner.1.name' }),
      desc: intl.formatMessage({ id: 'us.partner.1.desc' }),
      link: intl.formatMessage({ id: 'us.partner.1.link' }),
    },
    {
      name: intl.formatMessage({ id: 'us.partner.2.name' }),
      desc: intl.formatMessage({ id: 'us.partner.2.desc' }),
      link: intl.formatMessage({ id: 'us.partner.2.link' }),
    },
    {
      name: intl.formatMessage({ id: 'us.partner.3.name' }),
      desc: intl.formatMessage({ id: 'us.partner.3.desc' }),
      link: intl.formatMessage({ id: 'us.partner.3.link' }),
    },
    {
      name: intl.formatMessage({ id: 'us.partner.4.name' }),
      desc: intl.formatMessage({ id: 'us.partner.4.desc' }),
      link: intl.formatMessage({ id: 'us.partner.4.link' }),
    },
    {
      name: intl.formatMessage({ id: 'us.partner.5.name' }),
      desc: intl.formatMessage({ id: 'us.partner.5.desc' }),
      link: intl.formatMessage({ id: 'us.partner.5.link' }),
    },
    {
      name: intl.formatMessage({ id: 'us.partner.6.name' }),
      desc: intl.formatMessage({ id: 'us.partner.6.desc' }),
      link: intl.formatMessage({ id: 'us.partner.6.link' }),
    },
  ];

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} sm={10} md={8}>
        <h1 className="partner-title">
          {intl.formatMessage({ id: 'us.partner.title' })}
        </h1>
        <p className="partner-desc">
          {intl.formatMessage({ id: 'us.partner.desc' })}
        </p>
        <p className="partner-list">
          {intl.formatMessage({ id: 'us.partner.list' })}
        </p>
      </Grid>
      <Grid item xs={12} sm={10} md={8}>
        <Grid container spacing={2}>
          {partners.map((partner, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div className="partner-card">
                <h2>{partner.name}</h2>
                <p>{partner.desc}</p>
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {partner.link}
                </a>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Partner;
