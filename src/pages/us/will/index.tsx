import React from "react";
import { useIntl } from "@umijs/max";
import "./index.less";

const items = [
  {
    key: "mission",
    labelId: "about.mission",
    textId: "about.mission.1",
    wide: true,
  },
  { key: "vision", labelId: "about.vision", textId: "about.vision.1" },
  { key: "slogan", labelId: "about.slogan", textId: "about.slogan.1" },
  { key: "value", labelId: "about.value", textId: "about.value.1" },
  {
    key: "focusing",
    labelId: "about.focusing",
    textId: "about.focusing.1",
    wide: true,
  },
];

const Will: React.FC = () => {
  const intl = useIntl();

  return (
    <dl className="fact-grid will-grid">
      {items.map((item) => (
        <div key={item.key} className={`fact ${item.wide ? "fact--wide" : ""}`}>
          <dt>{intl.formatMessage({ id: item.labelId })}</dt>
          <dd>{intl.formatMessage({ id: item.textId })}</dd>
        </div>
      ))}
    </dl>
  );
};

export default Will;
