import { useIntl } from "@umijs/max";
import "./index.less";
import honorStructure from "../../../data/honorStructure";

const Honor = () => {
  const intl = useIntl();

  return (
    <div className="honor-list">
      {honorStructure.map((honor, index) => (
        <div className="honor-card" key={index}>
          <div className="honor-content">
            <div className="honor-year">{honor.year}</div>
            <p className="honor-text">
              {intl.formatMessage({ id: honor.key })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Honor;
