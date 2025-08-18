import React from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@mui/material/Grid';
import { Card, Divider } from 'antd';
import './index.less';
import data from '../../../data/contact';
import {
  HomeOutlined,
  GlobalOutlined,
  PhoneOutlined,
  MailOutlined,
} from '@ant-design/icons';

const Contact: React.FC = (props) => {
  const intl = useIntl();

  const pics = data[0];

  const renderContactItem = (name: any, text: any) => {
    return (
      <Grid
        item
        xs={12}
        sm={10}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={4} sm={2}>
          {name}
        </Grid>
        <Grid item xs={8}>
          {text}
        </Grid>
      </Grid>
    );
  };

  const renderContact = () => {
    return (
      <>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={5}>
            <img className="contact-log" src={pics.rectlogo}></img>
          </Grid>
        </Grid>
        <Divider>
          <div className="contact-title">联系方式</div>
        </Divider>
        <Grid
          item
          xs={12}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {renderContactItem(
            <div className="contact-item-title">
              <HomeOutlined className="item-icon" />
              地址:
            </div>,
            <div>云南省大理古城苍坪街56号床单厂艺术区C-2-2</div>,
          )}
          {renderContactItem(
            <div className="contact-item-title">
              <PhoneOutlined className="item-icon" />
              电话:
            </div>,
            <div>0872-2504186</div>,
          )}
          {renderContactItem(
            <div className="contact-item-title">
              <GlobalOutlined className="item-icon" />
              网站:
            </div>,
            <a href="https://www.cloudmountain.cn" target="_blank">
              www.cloudmountain.cn
            </a>,
          )}
          {renderContactItem(
            <div className="contact-item-title">
              <MailOutlined className="item-icon" />
              邮件:
            </div>,
            <a href="mailto:info@cloudmountain.cn">info@cloudmountain.cn</a>,
          )}
        </Grid>
      </>
    );
  };

  const renderMedia = () => {
    return (
      <>
        <Divider>
          <div className="contact-title">关注我们</div>
        </Divider>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Grid
              item
              xs={12}
              sm={2}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={2}>
                <img className="media-logo" src={pics.wechat}></img>
              </Grid>
              <Grid item xs={6}>
                <img className="media-qr" src={pics.wechat_qr}></img>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={2}>
                <a href="https://weibo.com/p/1006065823202811" target="_blank">
                  <img className="media-logo" src={pics.weibo}></img>
                </a>
              </Grid>
              <Grid item xs={6}>
                <img className="media-qr" src={pics.weibo_qr}></img>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={2}>
                <img className="media-logo" src={pics.tiktok}></img>
              </Grid>
              <Grid item xs={6}>
                <img className="media-qr" src={pics.tiktok_qr}></img>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={2}>
                <img className="media-logo" src={pics.xiaohongshu}></img>
              </Grid>
              <Grid item xs={6}>
                <img className="media-qr" src={pics.xiaohongshu_qr}></img>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={2}>
                <a href="https://space.bilibili.com/402317570" target="_blank">
                  <img className="media-logo" src={pics.bilibili}></img>
                </a>
              </Grid>
              <Grid item xs={6}>
                <img className="media-qr" src={pics.bilibili_qr}></img>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          ></Grid>
        </Grid>
      </>
    );
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={12} sm={12} md={8}>
        <Card>
          {renderContact()}
          {renderMedia()}
        </Card>
      </Grid>
    </Grid>
  );
};

export default Contact;
