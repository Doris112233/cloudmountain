import React, { useEffect } from 'react';
import { useIntl, setLocale } from 'umi';
import { Card, Divider, Row, Col } from 'antd';
import './index.less';
import data from '../../../data/headpics';
import CustomDivider from '../../../components/customDivider';

const Community: React.FC = props => {
  const intl = useIntl();

  return (
    <div className="article-container">
      <div className="image-container">
        <img
          className="title-img"
          src={data['pc'].src}
          alt="Image Title Loading"
        ></img>
        <div className="title-overlay">
          {intl.formatMessage({ id: 'programs.community' })}
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
                  {intl.formatMessage({ id: 'programs.intro' })}
                </div>
              </CustomDivider>
              <div className="card-content">
                {intl.formatMessage({ id: 'programs.community.intro.1' })}
                <br />
                <br />
                {intl.formatMessage({ id: 'programs.community.intro.2' })}
                <br />
                <br />
                {intl.formatMessage({ id: 'programs.community.intro.3' })}
                <br />
                <br />
                {intl.formatMessage({ id: 'programs.community.intro.4' })}
              </div>
            </div>
            <Card className="project-card">
              <Divider>
                <div className="tianxing-sub-title">
                  {intl.formatMessage({ id: 'programs.community.title.1' })}
                </div>
              </Divider>
              <div className="card-content">
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: 'programs.time' })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({ id: 'programs.community.time.1' })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: 'programs.activities' })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: 'programs.community.activities.1.1',
                    })}
                    <br />
                    {intl.formatMessage({
                      id: 'programs.community.activities.1.2',
                    })}
                    <br />
                    {intl.formatMessage({
                      id: 'programs.community.activities.1.3',
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: 'programs.outcome' })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: 'programs.community.outcome.1.1',
                    })}
                    <br />
                    {intl.formatMessage({
                      id: 'programs.community.outcome.1.2',
                    })}
                    <br />
                    {intl.formatMessage({
                      id: 'programs.community.outcome.1.3',
                    })}
                    <br />
                    {intl.formatMessage({
                      id: 'programs.community.outcome.1.4',
                    })}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="project-card">
              <Divider>
                <div className="tianxing-sub-title">
                  {intl.formatMessage({ id: 'programs.community.title.2' })}
                </div>
              </Divider>
              <div className="card-content">
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: 'programs.time' })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({ id: 'programs.community.time.2' })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: 'programs.activities' })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: 'programs.community.activities.2.1',
                    })}
                    <br />
                    {intl.formatMessage({
                      id: 'programs.community.activities.2.2',
                    })}
                    <br />
                    {intl.formatMessage({
                      id: 'programs.community.activities.2.3',
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: 'programs.outcome' })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: 'programs.community.outcome.2.1',
                    })}
                    <br />
                    {intl.formatMessage({
                      id: 'programs.community.outcome.2.2',
                    })}
                    <br />
                    {intl.formatMessage({
                      id: 'programs.community.outcome.2.3',
                    })}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="project-card">
              <Divider>
                <div className="tianxing-sub-title">
                  {intl.formatMessage({ id: 'programs.community.title.3' })}
                </div>
              </Divider>
              <div className="card-content">
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: 'programs.time' })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({ id: 'programs.community.time.3' })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: 'programs.activities' })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: 'programs.community.activities.3.1',
                    })}
                    <br />
                    {intl.formatMessage({
                      id: 'programs.community.activities.3.2',
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: 'programs.outcome' })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: 'programs.community.outcome.3.1',
                    })}
                    <br />
                    {intl.formatMessage({
                      id: 'programs.community.outcome.3.2',
                    })}
                    <br />
                    {intl.formatMessage({
                      id: 'programs.community.outcome.3.3',
                    })}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="project-card">
              <Divider>
                <div className="tianxing-sub-title">
                  {intl.formatMessage({ id: 'programs.community.title.4' })}
                </div>
              </Divider>
              <div className="card-content">
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: 'programs.time' })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({ id: 'programs.community.time.4' })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: 'programs.activities' })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: 'programs.community.activities.4.1',
                    })}
                    <br />
                    {intl.formatMessage({
                      id: 'programs.community.activities.4.2',
                    })}
                    <br />
                    {intl.formatMessage({
                      id: 'programs.community.activities.4.3',
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: 'programs.outcome' })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: 'programs.community.outcome.4.1',
                    })}
                    <br />
                    {intl.formatMessage({
                      id: 'programs.community.outcome.4.2',
                    })}
                    <br />
                    {intl.formatMessage({
                      id: 'programs.community.outcome.4.3',
                    })}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="project-card">
              <Divider>
                <div className="tianxing-sub-title">
                  {intl.formatMessage({ id: 'programs.community.title.5' })}
                </div>
              </Divider>
              <div className="card-content">
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: 'programs.time' })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({ id: 'programs.community.time.5' })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: 'programs.activities' })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: 'programs.community.activities.5.1',
                    })}
                    <br />
                    {intl.formatMessage({
                      id: 'programs.community.activities.5.2',
                    })}
                    <br />
                    {intl.formatMessage({
                      id: 'programs.community.activities.5.3',
                    })}
                    <br />
                    {intl.formatMessage({
                      id: 'programs.community.activities.5.4',
                    })}
                  </div>
                </div>
                <div className="section-item">
                  <div className="section-title">
                    {intl.formatMessage({ id: 'programs.outcome' })}
                  </div>
                  <div className="section-content">
                    {intl.formatMessage({
                      id: 'programs.community.outcome.5.1',
                    })}
                    <br />
                    {intl.formatMessage({
                      id: 'programs.community.outcome.5.2',
                    })}
                    <br />
                    {intl.formatMessage({
                      id: 'programs.community.outcome.5.3',
                    })}
                    <br />
                    {intl.formatMessage({
                      id: 'programs.community.outcome.5.4',
                    })}
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

export default Community;
