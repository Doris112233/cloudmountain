import React, { useState } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@mui/material/Grid';
import { Slider, Modal, Button } from 'antd';
import { useMediaQuery, useTheme } from '@mui/material';
import type { SliderMarks } from 'antd/es/slider';
import './index.less';
import data from '../../data/report';

interface ReportProps {
  initCurr: number;
}

const Report: React.FC<ReportProps> = (props) => {
  const intl = useIntl();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [curr, setCurr] = useState<number>(props.initCurr ? props.initCurr : 0);
  const [picModal, setPicModal] = useState<boolean>(false);

  const passedStyle = {
    color: '#8da745',
  };

  const masksBig: SliderMarks = {};
  const masksSmall: SliderMarks = {};

  data.forEach((item, index) => {
    masksBig[index] = {
      style: curr >= index ? passedStyle : undefined,
      label: item.isAnnual ? (
        <strong style={{ fontSize: '16px' }}>
          {item.name + intl.formatMessage({ id: 'us.report.annual' })}
        </strong>
      ) : (
        <div>{item.name}</div>
      ),
    };
    masksSmall[index] = {
      style: curr >= index ? passedStyle : undefined,
      label: <div>{item.sm}</div>,
    };
  });

  const renderPictureModal = () => {
    return (
      <Modal
        className="report-pic-viewer"
        footer={null}
        onCancel={() => setPicModal(false)}
      >
        <div className="report-pic-viewer">
          <img className="report-pic-viewer" src={data[curr].href}></img>
        </div>
      </Modal>
    );
  };

  const renderPic = () => {
    if (data[curr].isAnnual || data[curr].isPdf) {
      return (
        <a href={data[curr].href} target="_blank">
          <div className="report-card">
            <img style={{ width: '45vh' }} src={data[curr].src}></img>
          </div>
        </a>
      );
    } else {
      return (
        <div onClick={() => setPicModal(true)}>
          <div className="report-card">
            <img className="report-pic" src={data[curr].src}></img>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="report-container">
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        style={{ background: '#ffffff', margin: 'auto', height: '100%' }}
      >
        <Grid item xs={4} sm={3} md={2} className="report-box">
          {!isMobile && (
            <div
              style={{ height: '70vh', overflow: 'scroll', marginLeft: '-4vh' }}
            >
              <Slider
                style={{ height: '100vh', marginTop: '20px' }}
                // tooltipVisible={false}
                marks={masksBig}
                defaultValue={curr}
                vertical
                onChange={(v: any) => setCurr(v)}
                reverse
                step={1}
                min={0}
                max={data.length - 1}
              />
            </div>
          )}
          {isMobile && (
            <div style={{ height: '70vh', overflow: 'scroll' }}>
              <Slider
                style={{ height: '100vh' }}
                // tooltipVisible={false}
                marks={masksSmall}
                defaultValue={curr}
                vertical
                onChange={(v: any) => setCurr(v)}
                reverse
                step={1}
                min={0}
                max={data.length - 1}
              />
            </div>
          )}
        </Grid>
        <Grid
          item
          xs={8}
          sm={8}
          className="report-box"
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs={12} style={{ margin: 'auto' }}>
            {renderPic()}
          </Grid>
          <Grid item>
            <div className="report-tip">{'点击封面阅读'}</div>
          </Grid>
          <Grid item>
            {data[curr].href && data[curr].down && (
              <Button
                type="primary"
                href={data[curr].href}
                download={data[curr].down}
                style={{ marginTop: 16, borderRadius: 10 }}
              >
                下载报告
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
      {renderPictureModal()}
    </div>
  );
};

export default Report;
