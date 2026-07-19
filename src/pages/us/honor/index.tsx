import Grid from "@mui/material/Grid";
import { useIntl } from "@umijs/max";
import "./index.less";
import honorStructure from "../../../data/honorStructure";

const Honor = () => {
  const intl = useIntl();

  return (
    <Grid item xs={12} sm={10} md={8}>
      <div className="col-md-12 example-title">
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
          {intl.formatMessage({ id: "us.honor.title" })}
        </h2>
      </div>
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
    </Grid>
  );
};

export default Honor;
