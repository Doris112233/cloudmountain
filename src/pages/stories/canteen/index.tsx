import React from "react";
import { useIntl } from "@umijs/max";
import { Card, Row, Col } from "antd";
import "./index.less";
import CustomDivider from "../../../components/customDivider";

const CanteenStory: React.FC = () => {
  const intl = useIntl();

  return (
    <div className="story-container">
      <Card>
        <Row
          gutter={[24, 24]}
          justify="center"
          className="story-content-container"
        >
          <Col xs={24} sm={22} md={20} lg={18}>
            <div className="story-header">
              <CustomDivider>
                <div className="story-main-title">
                  {intl.formatMessage({ id: "story.canteen.title" })}
                </div>
              </CustomDivider>
            </div>

            <div className="story-content">
              <p className="story-paragraph">
                {intl.formatMessage({ id: "story.canteen.p1" })}
              </p>

              <p className="story-paragraph">
                {intl.formatMessage({ id: "story.canteen.p2" })}
              </p>

              <p className="story-paragraph">
                {intl.formatMessage({ id: "story.canteen.p3" })}
              </p>

              <p className="story-paragraph">
                {intl.formatMessage({ id: "story.canteen.p4" })}
              </p>

              <p className="story-paragraph">
                {intl.formatMessage({ id: "story.canteen.p5" })}
              </p>

              <p className="story-paragraph">
                {intl.formatMessage({ id: "story.canteen.p6" })}
              </p>

              <p className="story-paragraph">
                {intl.formatMessage({ id: "story.canteen.p7" })}
              </p>

              <p className="story-paragraph">
                {intl.formatMessage({ id: "story.canteen.p8" })}
              </p>

              <p className="story-paragraph">
                {intl.formatMessage({ id: "story.canteen.p9" })}
              </p>

              <p className="story-paragraph">
                {intl.formatMessage({ id: "story.canteen.p10" })}
              </p>

              <p className="story-paragraph">
                {intl.formatMessage({ id: "story.canteen.p11" })}
              </p>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default CanteenStory;
