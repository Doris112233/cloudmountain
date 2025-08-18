import React, { useState } from 'react';
import { useIntl } from 'umi';
import { Button, Tabs, Card, Descriptions, Typography } from 'antd';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import data from '../../../data/archive';
import dataArchaeo from '../../../data/archaeo';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.less';
import './index.less';
import { SoundOutlined, PauseOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

// const hoAu = require('./audio/Hoolock_tianxing.mp3');

import tianxing from '../../../../public/audio/archive/Hoolock_tianxing.mp3';
import lar from '../../../../public/audio/archive/Hylobates_lar.mp3';
import concolor from '../../../../public/audio/archive/Nomascus_concolor.mp3';
import hainanus from '../../../../public/audio/archive/Nomascus_hainanus.mp3';
import leucogenys from '../../../../public/audio/archive/Nomascus_leucogenys.mp3';
import nasutus from '../../../../public/audio/archive/Nomascus_nasutus.mp3';

const audios = [
  new Audio(tianxing),
  new Audio(hainanus),
  new Audio(nasutus),
  new Audio(concolor),
  new Audio(leucogenys),
  new Audio(lar),
];

const ImgViewer = (props: { src: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  return (
    <div>
      <div style={{ display: isLoading ? 'none' : 'block' }}>
        <img
          onLoad={() => setIsLoading(false)}
          style={{ height: '30rem' }}
          src={props.src}
        />
      </div>
      <div style={{ display: isLoading ? 'block' : 'none' }}>
        <Spin />
      </div>
    </div>
  );
};

export default (props: { location: { query: { id: string } } }) => {
  const queryId = props.location.query.id;
  const intl = useIntl();
  const [selected, setSelected] = useState<number>(parseInt(queryId) || 0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const { Item } = Descriptions;
  const { Text, Title } = Typography;

  const descItemStyle = {
    color: '#8da745',
  };

  const changeTab = (key: string) => {
    audios[selected].pause();
    audios[selected].currentTime = 0;
    setSelected(parseInt(key));
  };

  const playAudio = () => {
    if (isPlaying) {
      audios[selected].pause();
    } else {
      audios[selected].play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="full-page">
      <section className="section-archeology">
        <div className="section-archeology-container"></div>
        <div className="section-archeology-header">
          <h1>{intl.formatMessage({ id: 'protect.inChina.title' })}</h1>
        </div>
        <div className="section-archeology-content">
          <div className="text-section">
            <p>{intl.formatMessage({ id: 'protect.inChina.content.1' })}</p>
            <p>{intl.formatMessage({ id: 'protect.inChina.content.2' })}</p>
            <div className="image-row">
              <img
                src={dataArchaeo.archaeo1}
                alt={intl.formatMessage({ id: 'protect.inChina.content.3' })}
              />
              <div className="side-text">
                <p>{intl.formatMessage({ id: 'protect.inChina.content.4' })}</p>
              </div>
            </div>
            <p>{intl.formatMessage({ id: 'protect.inChina.content.5' })}</p>
          </div>
          <div className="vertical-image">
            <img src={dataArchaeo.archaeo2} alt="青铜长臂猿" />
          </div>
        </div>
      </section>
      <section className="section-archive">
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid
            container
            item
            xs={12}
            sm={10}
            md={8}
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item xs={2} sm={3} md={3}>
              <Button
                type="primary"
                style={{ marginTop: 10 }}
                onClick={playAudio}
                icon={isPlaying ? <PauseOutlined /> : <SoundOutlined />}
              >
                {intl.formatMessage({ id: 'protect.archive.listen' })}
              </Button>
            </Grid>
            <Grid item xs={10} sm={9} md={9}>
              <Tabs
                defaultActiveKey="0"
                onChange={changeTab}
                activeKey={selected.toString()}
                style={{ marginTop: 30 }}
                tabPosition="top"
                type="card"
                items={data.map((item) => ({
                  key: item.key.toString(),
                  label: intl.formatMessage({ id: item.name }),
                  children: null,
                }))}
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item xs={12} sm={6} md={5} className="archiveItem">
              <Card>
                <Swiper>
                  {[...new Array(data[selected].imageCount)].map(
                    (item, index) => (
                      <SwiperSlide key={index}>
                        <Container
                          maxWidth="sm"
                          style={{ textAlign: 'center' }}
                        >
                          <ImgViewer
                            src={data[selected].images[index]}
                          ></ImgViewer>
                        </Container>
                      </SwiperSlide>
                    ),
                  )}
                </Swiper>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={5} className="archiveItem">
              <Card>
                <Descriptions
                  title={intl.formatMessage({ id: data[selected].name })}
                  column={1}
                >
                  <Item
                    label={
                      <div style={descItemStyle}>
                        {intl.formatMessage({ id: 'protect.archive.name' })}
                      </div>
                    }
                  >
                    <i>{data[selected].latin}</i>
                  </Item>
                  <Item
                    label={
                      <div style={descItemStyle}>
                        {intl.formatMessage({ id: 'protect.archive.taxonomy' })}
                      </div>
                    }
                  >
                    <Text>
                      {intl.formatMessage({
                        id: data[selected].classification.family,
                      })}
                      &nbsp;
                      {intl.formatMessage({
                        id: data[selected].classification.genus,
                      })}
                    </Text>
                  </Item>
                  <Item
                    label={
                      <div style={descItemStyle}>
                        {intl.formatMessage({ id: 'protect.archive.body' })}
                      </div>
                    }
                  >
                    <p>
                      {intl.formatMessage({ id: 'protect.archive.weight' })}
                      {`${data[selected].body.weight}kg`}
                      &nbsp;
                    </p>
                    <p>
                      {intl.formatMessage({ id: 'protect.archive.length' })}
                      {`${data[selected].body.height}cm`}
                    </p>
                  </Item>
                  <Item
                    label={
                      <div style={descItemStyle}>
                        {intl.formatMessage({ id: 'protect.archive.iucn' })}
                      </div>
                    }
                  >
                    {intl.formatMessage({ id: data[selected].IUCN })}
                  </Item>
                  <Item
                    label={
                      <div style={descItemStyle}>
                        {intl.formatMessage({ id: 'protect.archive.status' })}
                      </div>
                    }
                  >
                    {intl.formatMessage({ id: data[selected].chineseLevel })}
                  </Item>
                  <Item
                    label={
                      <div style={descItemStyle}>
                        {intl.formatMessage({ id: 'protect.archive.range' })}
                      </div>
                    }
                  >
                    {intl.formatMessage({ id: data[selected].distribution })}
                  </Item>
                  <Item
                    label={
                      <div style={descItemStyle}>
                        {intl.formatMessage({ id: 'protect.archive.number' })}
                      </div>
                    }
                  >
                    {intl.formatMessage({ id: data[selected].amount })}
                  </Item>
                  <Item
                    label={
                      <div style={descItemStyle}>
                        {intl.formatMessage({ id: 'protect.archive.feature' })}
                      </div>
                    }
                  >
                    {intl.formatMessage({ id: data[selected].feature })}
                  </Item>
                </Descriptions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </section>
    </div>
  );
};
