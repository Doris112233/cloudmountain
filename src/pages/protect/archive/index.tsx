import React, { useEffect, useRef, useState } from "react";
import { useIntl, useLocation } from "@umijs/max";
import { Button, Tabs, Card, Descriptions, Typography } from "antd";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import data from "../../../data/archive";
import dataArchaeo from "../../../data/archaeo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./index.less";
import { SoundOutlined, PauseOutlined } from "@ant-design/icons";
import { ArchiveAudioController } from "./audioController";
import { archiveAudioUrls, normalizeArchiveId } from "./utils";
import ProgressiveImage from "../../../components/ProgressiveImage";

const ImgViewer = (props: { src: string; alt: string }) => {
  return (
    <ProgressiveImage
      src={props.src}
      alt={props.alt}
      wrapperClassName="archive-progressive-media"
      style={{ height: "30rem", width: "100%" }}
      objectFit="contain"
    />
  );
};

export default () => {
  const location = useLocation();
  const queryId = new URLSearchParams(location.search).get("id");
  const intl = useIntl();
  const [selected, setSelected] = useState<number>(
    normalizeArchiveId(queryId, data.length),
  );
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioController = useRef<ArchiveAudioController | null>(null);

  if (!audioController.current) {
    audioController.current = new ArchiveAudioController(
      archiveAudioUrls,
      (src) => new Audio(src),
      setIsPlaying,
    );
  }

  useEffect(() => () => audioController.current?.destroy(), []);

  const { Item } = Descriptions;
  const { Text } = Typography;

  const descItemStyle = {
    color: "#89c24b",
  };

  const changeTab = (key: string) => {
    audioController.current?.stop();
    setSelected(normalizeArchiveId(key, data.length));
  };

  const playAudio = () => {
    void audioController.current?.toggle(selected);
  };

  return (
    <div className="full-page">
      <section className="section-archeology">
        <div className="section-archeology-container"></div>
        <div className="section-archeology-header">
          <h1>{intl.formatMessage({ id: "protect.inChina.title" })}</h1>
        </div>
        <div className="section-archeology-content">
          <div className="text-section">
            <p>{intl.formatMessage({ id: "protect.inChina.content.1" })}</p>
            <p>{intl.formatMessage({ id: "protect.inChina.content.2" })}</p>
            <div className="image-row">
              <ProgressiveImage
                src={dataArchaeo.archaeo1}
                alt={intl.formatMessage({ id: "protect.inChina.content.3" })}
              />
              <div className="side-text">
                <p>{intl.formatMessage({ id: "protect.inChina.content.4" })}</p>
              </div>
            </div>
            <p>{intl.formatMessage({ id: "protect.inChina.content.5" })}</p>
          </div>
          <div className="vertical-image">
            <ProgressiveImage src={dataArchaeo.archaeo2} alt="青铜长臂猿" />
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
                {intl.formatMessage({ id: "protect.archive.listen" })}
              </Button>
            </Grid>
            <Grid
              item
              xs={10}
              sm={9}
              md={9}
              style={{ minWidth: 0, width: "100%" }}
            >
              <div className="tabs-container">
                <Tabs
                  defaultActiveKey="0"
                  onChange={changeTab}
                  activeKey={selected.toString()}
                  style={{ marginTop: 30 }}
                  tabPosition="top"
                  type="card"
                  renderTabBar={(props, DefaultTabBar) => (
                    <div style={{ minWidth: "max-content" }}>
                      <DefaultTabBar {...props} />
                    </div>
                  )}
                  items={data.map((item) => ({
                    key: item.key.toString(),
                    label: intl.formatMessage({ id: item.name }),
                    children: null,
                  }))}
                />
              </div>
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
                  {data[selected].images.map((image) => (
                    <SwiperSlide key={image}>
                      <Container maxWidth="sm" style={{ textAlign: "center" }}>
                        <ImgViewer
                          src={image}
                          alt={intl.formatMessage({ id: data[selected].name })}
                        />
                      </Container>
                    </SwiperSlide>
                  ))}
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
                        {intl.formatMessage({ id: "protect.archive.name" })}
                      </div>
                    }
                  >
                    <i>{data[selected].latin}</i>
                  </Item>
                  <Item
                    label={
                      <div style={descItemStyle}>
                        {intl.formatMessage({ id: "protect.archive.taxonomy" })}
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
                        {intl.formatMessage({ id: "protect.archive.body" })}
                      </div>
                    }
                  >
                    <p>
                      {intl.formatMessage({ id: "protect.archive.weight" })}
                      {`${data[selected].body.weight}kg`}
                      &nbsp;
                    </p>
                    <p>
                      {intl.formatMessage({ id: "protect.archive.length" })}
                      {`${data[selected].body.height}cm`}
                    </p>
                  </Item>
                  <Item
                    label={
                      <div style={descItemStyle}>
                        {intl.formatMessage({ id: "protect.archive.iucn" })}
                      </div>
                    }
                  >
                    {intl.formatMessage({ id: data[selected].IUCN })}
                  </Item>
                  <Item
                    label={
                      <div style={descItemStyle}>
                        {intl.formatMessage({ id: "protect.archive.status" })}
                      </div>
                    }
                  >
                    {intl.formatMessage({ id: data[selected].chineseLevel })}
                  </Item>
                  <Item
                    label={
                      <div style={descItemStyle}>
                        {intl.formatMessage({ id: "protect.archive.range" })}
                      </div>
                    }
                  >
                    {intl.formatMessage({ id: data[selected].distribution })}
                  </Item>
                  <Item
                    label={
                      <div style={descItemStyle}>
                        {intl.formatMessage({ id: "protect.archive.number" })}
                      </div>
                    }
                  >
                    {intl.formatMessage({ id: data[selected].amount })}
                  </Item>
                  <Item
                    label={
                      <div style={descItemStyle}>
                        {intl.formatMessage({ id: "protect.archive.feature" })}
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
