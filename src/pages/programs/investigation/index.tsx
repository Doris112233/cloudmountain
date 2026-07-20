import React from "react";
import { useIntl } from "@umijs/max";
import { Card, Row, Col } from "antd";
import "./index.less";
import data from "../../../data/headpics";
import programsData from "../../../data/programs";
import CustomDivider from "../../../components/customDivider";
import VideoEmbed from "../videoEmbed";
import ProgressiveImage from "../../../components/ProgressiveImage";
import ParallaxMedia from "../../../components/motion/ParallaxMedia";

const Investigation: React.FC = () => {
  const intl = useIntl();

  return (
    <div className="article-container program-page">
      <div className="program-hero">
        <ParallaxMedia amount={24}>
          <ProgressiveImage
            wrapperClassName="program-hero-media"
            className="program-hero-image"
            src={data["pi2"].src}
            alt={intl.formatMessage({ id: "programs.investigation" })}
            objectFit="cover"
            priority
          />
        </ParallaxMedia>
        <div className="program-hero-title">
          {intl.formatMessage({ id: "programs.investigation" })}
        </div>
      </div>
      <Card>
        <Row
          gutter={[24, 24]}
          justify="center"
          className="investigation-container"
        >
          <Col xs={24} sm={22} md={20} lg={18}>
            <div className="reason-section">
              <CustomDivider>
                <div className="tianxing-title">
                  {intl.formatMessage({ id: "programs.intro" })}
                </div>
              </CustomDivider>
              <div className="card-content">
                {intl.formatMessage({
                  id: "programs.investigation.intro.1",
                })}
                <br />
                <br />
                {intl.formatMessage({
                  id: "programs.investigation.intro.2",
                })}
                <br />
                <br />
                {intl.formatMessage({
                  id: "programs.investigation.intro.3",
                })}
              </div>
            </div>
            <Card className="project-card">
              <CustomDivider>
                <div className="tianxing-sub-title">
                  {intl.formatMessage({ id: "programs.investigation.title.1" })}
                </div>
              </CustomDivider>
              <div className="card-content">
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.time" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.investigation.time.1",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.activities" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.investigation.activities.1.1",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.activities.1.2",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.activities.1.3",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.outcome" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.investigation.outcome.1.1",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.outcome.1.2",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.outcome.1.3",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.outcome.1.4",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-image">
                    <ProgressiveImage
                      wrapperClassName="project-section-media"
                      src={programsData.investigation1}
                      alt="Investigation Program 1"
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="project-card">
              <CustomDivider>
                <div className="tianxing-sub-title">
                  {intl.formatMessage({ id: "programs.investigation.title.2" })}
                </div>
              </CustomDivider>
              <div className="card-content">
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.time" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.investigation.time.2",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.activities" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.investigation.activities.2.1",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.activities.2.2",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.activities.2.3",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.activities.2.4",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.outcome" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.investigation.outcome.2.1",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.outcome.2.2",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.outcome.2.3",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.outcome.2.4",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-image">
                    <ProgressiveImage
                      wrapperClassName="project-section-media"
                      src={programsData.investigation2}
                      alt="Investigation Program 2"
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="project-card">
              <CustomDivider>
                <div className="tianxing-sub-title">
                  {intl.formatMessage({ id: "programs.investigation.title.3" })}
                </div>
              </CustomDivider>
              <div className="card-content">
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.time" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.investigation.time.3",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.activities" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.investigation.activities.3.1",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.activities.3.2",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.activities.3.3",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.outcome" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.investigation.outcome.3.1",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.outcome.3.2",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.outcome.3.3",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.outcome.3.4",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.video" })}
                  </div>
                  <VideoEmbed
                    url="https://www.bilibili.com/video/BV1E7411X7YX"
                    title="Investigation Video"
                  />
                </div>
              </div>
            </Card>

            <Card className="project-card">
              <CustomDivider>
                <div className="tianxing-sub-title">
                  {intl.formatMessage({ id: "programs.investigation.title.4" })}
                </div>
              </CustomDivider>
              <div className="card-content">
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.time" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.investigation.time.4",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.activities" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.investigation.activities.4.1",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.activities.4.2",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.outcome" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.investigation.outcome.4.1",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.outcome.4.2",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.outcome.4.3",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.video" })}
                  </div>
                  <VideoEmbed
                    url="https://www.bilibili.com/video/BV1qf4y1x777"
                    title="Investigation Video"
                  />
                </div>
              </div>
            </Card>

            <Card className="project-card">
              <CustomDivider>
                <div className="tianxing-sub-title">
                  {intl.formatMessage({ id: "programs.investigation.title.5" })}
                </div>
              </CustomDivider>
              <div className="card-content">
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.time" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.investigation.time.5",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.activities" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.investigation.activities.5.1",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.activities.5.2",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.activities.5.3",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.outcome" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.investigation.outcome.5.1",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.outcome.5.2",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.outcome.5.3",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.outcome.5.4",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.outcome.5.5",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">视频 / Video</div>
                  <VideoEmbed
                    url="https://www.bilibili.com/video/BV13SHSeuEVA"
                    title="Investigation Video"
                  />
                </div>
              </div>
            </Card>

            <Card className="project-card">
              <CustomDivider>
                <div className="tianxing-sub-title">
                  {intl.formatMessage({ id: "programs.investigation.title.6" })}
                </div>
              </CustomDivider>
              <div className="card-content">
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.time" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.investigation.time.6",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.activities" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.investigation.activities.6.1",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.activities.6.2",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.outcome" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.investigation.outcome.6.1",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.outcome.6.2",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.investigation.outcome.6.3",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-image">
                    <ProgressiveImage
                      wrapperClassName="project-section-media"
                      src={programsData.investigation6}
                      alt="Investigation Program 6"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Investigation;
