import React from "react";
import { getLocale, useIntl } from "@umijs/max";
import data from "../../../data/partner";
import ProgressiveImage from "../../../components/ProgressiveImage";
import "./index.less";

const Partner: React.FC = () => {
  const intl = useIntl();
  const currentLocale = getLocale();
  const isChinese = currentLocale === "zh-CN";
  const isEnglish = !isChinese;

  const partners = [];
  for (let i = 1; i <= 15; i++) {
    partners.push({
      name: intl.formatMessage({ id: `us.partner.${i}` }),
      type: "partner",
    });
  }

  const govPartners = [];
  for (let i = 1; i <= 18; i++) {
    govPartners.push({
      name: intl.formatMessage({ id: `us.govpartner.${i}` }),
      type: "govpartner",
    });
  }

  return (
    <div
      className={`partner-container ${isChinese ? "partner-zh" : "partner-en"}`}
    >
      <div className="partner-content">
        <p>{intl.formatMessage({ id: "us.partner.desc" })}</p>
        {isEnglish && (
          <ul>
            <li>{intl.formatMessage({ id: "us.partner.list.1" })}</li>
            <li>{intl.formatMessage({ id: "us.partner.list.2" })}</li>
            <li>{intl.formatMessage({ id: "us.partner.list.3" })}</li>
            <li>{intl.formatMessage({ id: "us.partner.list.4" })}</li>
          </ul>
        )}
      </div>

      <hr className="partner-divider" />

      {isChinese ? (
        // Chinese version - show image
        <div className="partner-image-container">
          <ProgressiveImage
            src={data.partner}
            alt="合作伙伴"
            className="partner-image"
            wrapperClassName="partner-progressive-media"
          />
        </div>
      ) : (
        // English version - show partner lists
        <div className="partner-content">
          <div className="partner-list-section">
            <h3 className="partner-section-title">
              {intl.formatMessage({ id: "us.partner.list.1" })}
            </h3>
            <div className="partner-names">
              {partners.map((partner, index) => (
                <div key={index} className="partner-line">
                  {partner.name}
                </div>
              ))}
            </div>
          </div>

          <hr className="partner-divider" />

          <div className="partner-list-section">
            <h3 className="partner-section-title">
              {intl.formatMessage({ id: "us.partner.list.2" })}
            </h3>
            <div className="partner-names">
              {govPartners.map((partner, index) => (
                <div key={index} className="partner-line">
                  {partner.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Partner;
