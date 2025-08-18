import React from 'react';
import { useIntl, setLocale, getLocale } from 'umi';
import Grid from '@mui/material/Grid';
import { Divider, Avatar, Tag } from 'antd';
import './index.less';
import getCouncilData from '../../../data/council';

const Council: React.FC = (props) => {
  const intl = useIntl();
  const currentLocale = getLocale();
  const data = getCouncilData(currentLocale);

  const renderPeopleCard = (person: any) => {
    return (
      <Grid
        className="council-card"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={3} sm={3} md={3}>
          <Avatar className="council-ava" src={person.avatar} />
        </Grid>
        <Grid item xs={12} container direction="column" spacing={2}>
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <div className="council-pos">{person.position}</div>
            </Grid>
            <Grid item xs={12}>
              <div className="council-name">{person.name}</div>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {person.title.map((item: any) => {
              return <Tag color="#F5C16D">{item}</Tag>;
            })}
          </Grid>
          <Grid item xs={12}>
            <div className="council-desc">
              {/* {person.desc[0]} */}
              {Array.isArray(person.desc) ? (
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  {person.desc.map((item: string, index: number) => (
                    <li key={index} style={{ marginBottom: '8px' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ margin: 0 }}>{person.desc}</p>
              )}
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const renderBossCard = (person: any) => {
    return (
      <Grid
        className="council-card"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Grid item xs={3} sm={3} md={3}>
          <Avatar className="council-ava-boss" src={person.avatar} />
        </Grid>
        <Grid item xs={12} sm={8} container direction="column" spacing={2}>
          <Grid item>
            <div className="council-pos-name-boss">
              <Grid container>
                <Grid item>
                  <div className="council-pos">{person.position}</div>
                </Grid>
                <Grid item>
                  <div className="council-name">{person.name}</div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item>
            {person.title.map((item: any) => {
              return <Tag color="#F5C16D">{item}</Tag>;
            })}
          </Grid>
          <Grid item>
            <div className="council-desc">
              {person.desc[0]}
              {Array.isArray(person.desc) ? (
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  {person.desc.slice(1).map((item: string, index: number) => (
                    <li key={index} style={{ marginBottom: '8px' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ margin: 0 }}>{person.desc}</p>
              )}
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return (
    <div className="full-page">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <div className="council-title">
            {intl.formatMessage({ id: 'about.council.title' })}
          </div>
        </Grid>
        <Grid item xs={12}>
          {renderBossCard(data[0])}
        </Grid>
        <Divider />
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid xs={12} sm={12} md={12} lg={5} item>
            {renderPeopleCard(data[1])}
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={5} item>
            {renderPeopleCard(data[2])}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid xs={12} sm={12} md={12} lg={5} item>
            {renderPeopleCard(data[3])}
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={5} item>
            {renderPeopleCard(data[4])}
          </Grid>
        </Grid>
        <Divider />
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid xs={12} sm={12} md={12} lg={5} item>
            {renderPeopleCard(data[5])}
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={5} item>
            {renderPeopleCard(data[6])}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid xs={12} sm={12} md={12} lg={5} item>
            {renderPeopleCard(data[7])}
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={5} item>
            {renderPeopleCard(data[8])}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Council;
