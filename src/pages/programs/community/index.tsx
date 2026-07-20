import React from "react";
import { useIntl } from "@umijs/max";
import { Card, Row, Col } from "antd";
import "./index.less";
import data from "../../../data/headpics";
import programsData from "../../../data/programs";
import CustomDivider from "../../../components/customDivider";
import VideoEmbed from "../videoEmbed";
import ProgressiveImage from "../../../components/ProgressiveImage";

const Community: React.FC = () => {
  const intl = useIntl();

  return (
    <div className="article-container program-page">
      <div className="program-hero">
        <ProgressiveImage
          wrapperClassName="program-hero-media"
          className="program-hero-image"
          src={data["pc"].src}
          alt={intl.formatMessage({ id: "programs.community" })}
          objectFit="cover"
          priority
        />
        <div className="program-hero-title">
          {intl.formatMessage({ id: "programs.community" })}
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
                {intl.formatMessage({ id: "programs.community.intro.1" })}
                <br />
                <br />
                {intl.formatMessage({ id: "programs.community.intro.2" })}
                <br />
                <br />
                {intl.formatMessage({ id: "programs.community.intro.3" })}
                <br />
                <br />
                {intl.formatMessage({ id: "programs.community.intro.4" })}
              </div>
            </div>
            <Card className="project-card">
              <CustomDivider>
                <div className="tianxing-sub-title">
                  {intl.formatMessage({ id: "programs.community.title.1" })}
                </div>
              </CustomDivider>
              <div className="card-content">
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.time" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({ id: "programs.community.time.1" })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.activities" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.community.activities.1.1",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.community.activities.1.2",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.community.activities.1.3",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.outcome" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.community.outcome.1.1",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.community.outcome.1.2",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.community.outcome.1.3",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.community.outcome.1.4",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-image">
                    <ProgressiveImage
                      wrapperClassName="project-section-media"
                      src={programsData.community1}
                      alt="Community Program 1"
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="project-card">
              <CustomDivider>
                <div className="tianxing-sub-title">
                  {intl.formatMessage({ id: "programs.community.title.2" })}
                </div>
              </CustomDivider>
              <div className="card-content">
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.time" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({ id: "programs.community.time.2" })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.activities" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.community.activities.2.1",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.community.activities.2.2",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.community.activities.2.3",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.outcome" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.community.outcome.2.1",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.community.outcome.2.2",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.community.outcome.2.3",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-image">
                    <ProgressiveImage
                      wrapperClassName="project-section-media"
                      src={programsData.community2}
                      alt="Community Program 2"
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="project-card">
              <CustomDivider>
                <div className="tianxing-sub-title">
                  {intl.formatMessage({ id: "programs.community.title.3" })}
                </div>
              </CustomDivider>
              <div className="card-content">
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.time" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({ id: "programs.community.time.3" })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.activities" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.community.activities.3.1",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.community.activities.3.2",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.outcome" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.community.outcome.3.1",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.community.outcome.3.2",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.community.outcome.3.3",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.video" })}
                  </div>
                  <VideoEmbed
                    url="https://www.bilibili.com/video/BV1Zq4y1B7cH"
                    title="Investigation Video"
                  />
                </div>
              </div>
            </Card>

            <Card className="project-card">
              <CustomDivider>
                <div className="tianxing-sub-title">
                  {intl.formatMessage({ id: "programs.community.title.4" })}
                </div>
              </CustomDivider>
              <div className="card-content">
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.time" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({ id: "programs.community.time.4" })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.activities" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.community.activities.4.1",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.community.activities.4.2",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.community.activities.4.3",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.outcome" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.community.outcome.4.1",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.community.outcome.4.2",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.community.outcome.4.3",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-image">
                    <ProgressiveImage
                      wrapperClassName="project-section-media"
                      src={programsData.community4}
                      alt="Community Program 4"
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="project-card">
              <CustomDivider>
                <div className="tianxing-sub-title">
                  {intl.formatMessage({ id: "programs.community.title.5" })}
                </div>
              </CustomDivider>
              <div className="card-content">
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.time" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({ id: "programs.community.time.5" })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.activities" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.community.activities.5.1",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.community.activities.5.2",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.community.activities.5.3",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.community.activities.5.4",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.outcome" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.community.outcome.5.1",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.community.outcome.5.2",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.community.outcome.5.3",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.community.outcome.5.4",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.video" })}
                  </div>
                  <VideoEmbed
                    url="https://www.bilibili.com/video/BV1Cb421n7uQ"
                    title="Investigation Video"
                  />
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Community;
