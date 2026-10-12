import React from "react";
import { useIntl } from "@umijs/max";
import dataArchaeo from "../../../data/archaeo";
import ProgressiveImage from "../../../components/ProgressiveImage";
import "./index.less";

export default () => {
  const intl = useIntl();

  return (
    <div className="china-page">
      <section className="section-archeology">
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
    </div>
  );
};
