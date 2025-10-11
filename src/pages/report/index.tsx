import React, { useState } from "react";
import { useIntl, setLocale } from "umi";
import Grid from "@mui/material/Grid";
import { Slider, Modal, Button } from "antd";
import { useMediaQuery, useTheme } from "@mui/material";
import type { SliderMarks } from "antd/es/slider";
import "./index.less";
import reportStructure from "../../data/reportStructure";
import LoadingSpinner from "../../components/LoadingSpinner";

interface ReportProps {
  initCurr: number;
}

const Report: React.FC<ReportProps> = (props) => {
  const intl = useIntl();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [curr, setCurr] = useState<number>(props.initCurr ? props.initCurr : 0);
  const [picModal, setPicModal] = useState<boolean>(false);
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const [loadingStartTime, setLoadingStartTime] = useState<number>(Date.now());

  const passedStyle = {
    color: "#8da745",
  };

  // Helper function to build report name based on type
  const getReportName = (
    item: (typeof reportStructure)[0],
    isShort: boolean = false,
  ) => {
    const locale = intl.locale;
    const isChinese = locale === "zh-CN";

    if (item.type === "annual") {
      // Annual reports: just the year (e.g., "2019" in both languages)
      return item.year.toString();
    } else if (item.type === "quarterly") {
      // Quarterly reports
      const quarterKey = `us.report.q${item.period}`;
      if (isChinese) {
        // Chinese: "2019年-第三季度" or "2019-3" (short)
        if (isShort) {
          return `${item.year}-${item.period}`;
        }
        return `${item.year}${intl.formatMessage({ id: "us.report.year" })}-${intl.formatMessage({ id: quarterKey })}`;
      } else {
        // English: "2019 - Q3" or "2019-3" (short)
        if (isShort) {
          return `${item.year}-${item.period}`;
        }
        return `${item.year} - ${intl.formatMessage({ id: quarterKey })}`;
      }
    } else if (item.type === "monthly") {
      // Monthly reports
      if (isChinese) {
        // Chinese: "2021年1-2月" or "2021-1-2" (short)
        if (isShort) {
          return `${item.year}-${item.period}`;
        }
        return `${item.year}${intl.formatMessage({ id: "us.report.year" })}${item.period}${intl.formatMessage({ id: "us.report.month" })}`;
      } else {
        // English: "Jan-Feb 2021" for full, "2021-1-2" for short
        if (isShort) {
          return `${item.year}-${item.period}`;
        }
        // For English, we'll use a simple format for now
        const monthMap: { [key: string]: string } = {
          "1-2": "Jan-Feb",
          "3-4": "Mar-Apr",
          "5-6": "May-Jun",
          "7-8": "Jul-Aug",
          "9-10": "Sep-Oct",
          "11-12": "Nov-Dec",
        };
        const monthStr = monthMap[item.period as string] || item.period;
        return `${monthStr} ${item.year}`;
      }
    }
    return item.year.toString();
  };

  const masksBig: SliderMarks = {};
  const masksSmall: SliderMarks = {};

  reportStructure.forEach((item, index) => {
    const reportName = getReportName(item, false);
    const reportSm = getReportName(item, true);

    masksBig[index] = {
      style: curr >= index ? passedStyle : undefined,
      label: item.isAnnual ? (
        <strong style={{ fontSize: "16px" }}>
          {reportName + intl.formatMessage({ id: "us.report.annual" })}
        </strong>
      ) : (
        <div>{reportName}</div>
      ),
    };
    masksSmall[index] = {
      style: curr >= index ? passedStyle : undefined,
      label: <div>{reportSm}</div>,
    };
  });

  const handleImageLoad = () => {
    const loadingDuration = Date.now() - loadingStartTime;
    const minLoadingTime = 300;

    if (loadingDuration < minLoadingTime) {
      setTimeout(
        () => setImageLoading(false),
        minLoadingTime - loadingDuration,
      );
    } else {
      setImageLoading(false);
    }
  };

  const handleImageError = () => {
    setImageLoading(false);
  };

  const handleSliderChange = (value: number) => {
    setCurr(value);
    setImageLoading(true); // Reset loading state when changing reports
    setLoadingStartTime(Date.now()); // Record when loading started
  };

  const renderPictureModal = () => {
    return (
      <Modal
        className="report-pic-viewer"
        footer={null}
        onCancel={() => setPicModal(false)}
      >
        <div className="report-pic-viewer">
          <img
            className="report-pic-viewer"
            src={reportStructure[curr].href}
          ></img>
        </div>
      </Modal>
    );
  };

  const renderPic = () => {
    if (reportStructure[curr].isAnnual || reportStructure[curr].isPdf) {
      return (
        <a href={reportStructure[curr].href} target="_blank">
          <div className="report-card">
            <img
              style={{ width: "45vh" }}
              src={reportStructure[curr].src}
              onLoad={handleImageLoad}
              onError={handleImageError}
            ></img>
          </div>
        </a>
      );
    } else {
      return (
        <div onClick={() => setPicModal(true)}>
          <div className="report-card">
            <img
              className="report-pic"
              src={reportStructure[curr].src}
              onLoad={handleImageLoad}
              onError={handleImageError}
            ></img>
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
        style={{ background: "#ffffff", margin: "auto", height: "100%" }}
      >
        <Grid item xs={4} sm={3} md={2} className="report-box">
          {!isMobile && (
            <div
              style={{ height: "70vh", overflow: "scroll", marginLeft: "-4vh" }}
            >
              <Slider
                style={{ height: "100vh", marginTop: "20px" }}
                // tooltipVisible={false}
                marks={masksBig}
                defaultValue={curr}
                vertical
                onChange={handleSliderChange}
                reverse
                step={1}
                min={0}
                max={reportStructure.length - 1}
              />
            </div>
          )}
          {isMobile && (
            <div style={{ height: "70vh", overflow: "scroll" }}>
              <Slider
                style={{ height: "100vh" }}
                // tooltipVisible={false}
                marks={masksSmall}
                defaultValue={curr}
                vertical
                onChange={handleSliderChange}
                reverse
                step={1}
                min={0}
                max={reportStructure.length - 1}
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
          <Grid item xs={12} style={{ margin: "auto", position: "relative" }}>
            <LoadingSpinner
              visible={imageLoading}
              size="large"
              tip="加载中..."
            />
            {renderPic()}
          </Grid>
          {/* <Grid item>
            <div className="report-tip">{'点击封面阅读'}</div>
          </Grid> */}
          <Grid item>
            {reportStructure[curr].href && reportStructure[curr].down && (
              <Button
                type="primary"
                href={reportStructure[curr].href}
                download={reportStructure[curr].down}
                style={{ marginTop: 16, borderRadius: 10 }}
              >
                {intl.formatMessage({ id: "us.report.download" })}
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
