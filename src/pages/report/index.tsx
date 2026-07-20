import React, { useState } from "react";
import { useIntl } from "@umijs/max";
import Grid from "@mui/material/Grid";
import { Slider, Modal, Button } from "antd";
import { useMediaQuery, useTheme } from "@mui/material";
import type { SliderMarks } from "antd/es/slider";
import "./index.less";
import reportStructure from "../../data/reportStructure";
import ProgressiveImage from "../../components/ProgressiveImage";

interface ReportProps {
  initCurr: number;
}

const Report: React.FC<ReportProps> = (props) => {
  const intl = useIntl();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [curr, setCurr] = useState<number>(props.initCurr ? props.initCurr : 0);
  const [picModal, setPicModal] = useState<boolean>(false);

  const passedStyle = {
    color: "#89c24b",
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
  const timelineHeight = Math.max(reportStructure.length * 52, 1000);
  const mobileTimelineHeight = Math.max(reportStructure.length * 44, 900);

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

  const handleSliderChange = (value: number) => {
    setCurr(value);
  };

  const renderPictureModal = () => {
    return (
      <Modal
        className="report-pic-viewer"
        open={picModal}
        footer={null}
        onCancel={() => setPicModal(false)}
      >
        <div className="report-pic-viewer">
          <ProgressiveImage
            wrapperClassName="report-modal-media"
            className="report-pic-viewer"
            src={reportStructure[curr].href}
            alt={getReportName(reportStructure[curr])}
          />
        </div>
      </Modal>
    );
  };

  const renderPic = () => {
    if (reportStructure[curr].isAnnual || reportStructure[curr].isPdf) {
      return (
        <a
          href={reportStructure[curr].href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="report-card">
            <ProgressiveImage
              key={reportStructure[curr].src}
              wrapperClassName="report-cover-media"
              style={{ width: "100%" }}
              src={reportStructure[curr].src}
              alt={getReportName(reportStructure[curr])}
            />
          </div>
        </a>
      );
    } else {
      return (
        <button
          type="button"
          className="report-image-button"
          aria-label={getReportName(reportStructure[curr])}
          onClick={() => setPicModal(true)}
        >
          <div className="report-card">
            <ProgressiveImage
              key={reportStructure[curr].src}
              wrapperClassName="report-cover-media"
              className="report-pic"
              src={reportStructure[curr].src}
              alt={getReportName(reportStructure[curr])}
            />
          </div>
        </button>
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
            <div className="report-timeline-scroll report-timeline-scroll--desktop">
              <Slider
                className="report-timeline-slider report-timeline-slider--desktop"
                style={{ height: timelineHeight }}
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
            <div className="report-timeline-scroll report-timeline-scroll--mobile">
              <Slider
                className="report-timeline-slider report-timeline-slider--mobile"
                style={{ height: mobileTimelineHeight }}
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
          key={curr}
          item
          xs={8}
          sm={8}
          className="report-box report-selection-transition"
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs={12} style={{ margin: "auto", position: "relative" }}>
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
