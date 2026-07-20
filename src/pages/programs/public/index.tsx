import React from "react";
import { useIntl } from "@umijs/max";
import { Card, Row, Col } from "antd";
import "./index.less";
import data from "../../../data/headpics";
import CustomDivider from "@/components/customDivider";
import ProgressiveImage from "../../../components/ProgressiveImage";

const Public: React.FC = () => {
  const intl = useIntl();

  return (
    <div className="article-container program-page">
      <div className="program-hero">
        <ProgressiveImage
          wrapperClassName="program-hero-media"
          className="program-hero-image"
          src={data["pp"].src}
          alt={intl.formatMessage({ id: "programs.public" })}
          objectFit="cover"
          priority
        />
        <div className="program-hero-title">
          {intl.formatMessage({ id: "programs.public" })}
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
                {intl.formatMessage({ id: "programs.public.intro.1" })}
                <br />
                <br />
                {intl.formatMessage({ id: "programs.public.intro.2" })}
                <br />
                <br />
                {intl.formatMessage({ id: "programs.public.intro.3" })}
                <br />
                <br />
                {intl.formatMessage({ id: "programs.public.intro.4" })}
              </div>
            </div>
            <Card className="project-card">
              <CustomDivider>
                <div className="tianxing-sub-title">
                  {intl.formatMessage({ id: "programs.public.title.1" })}
                </div>
              </CustomDivider>
              <div className="card-content">
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.time" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({ id: "programs.public.time.1" })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.activities" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.public.activities.1.1",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.public.activities.1.2",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.public.activities.1.3",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.outcome" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({ id: "programs.public.outcome.1.1" })}
                    <br />
                    {intl.formatMessage({ id: "programs.public.outcome.1.2" })}
                    <br />
                    {intl.formatMessage({ id: "programs.public.outcome.1.3" })}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="project-card">
              <CustomDivider>
                <div className="tianxing-sub-title">
                  {intl.formatMessage({ id: "programs.public.title.2" })}
                </div>
              </CustomDivider>
              <div className="card-content">
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.time" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({ id: "programs.public.time.2" })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.activities" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: "programs.public.activities.2.1",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.public.activities.2.2",
                    })}
                    <br />
                    {intl.formatMessage({
                      id: "programs.public.activities.2.3",
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: "programs.outcome" })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({ id: "programs.public.outcome.2.1" })}
                    <br />
                    {intl.formatMessage({ id: "programs.public.outcome.2.2" })}
                    <br />
                    {intl.formatMessage({ id: "programs.public.outcome.2.3" })}
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

export default Public;
