import React from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@mui/material/Grid';
import { Divider } from 'antd';
import './index.less';
const Tianxing: React.FC = (props) => {
  const intl = useIntl();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
        <Divider>
          <div className="tianxing-title">
            {intl.formatMessage({ id: 'about.mission' })}
          </div>
        </Divider>
      </Grid>
      <Grid item xs={12} sm={10} md={8}>
        {intl.formatMessage({ id: 'about.mission.1' })}
      </Grid>

      <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
        <Divider>
          <div className="tianxing-title">
            {intl.formatMessage({ id: 'about.vision' })}
          </div>
        </Divider>
      </Grid>
      <Grid item xs={12} sm={10} md={8}>
        {intl.formatMessage({ id: 'about.vision.1' })}
      </Grid>

      <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
        <Divider>
          <div className="tianxing-title">
            {intl.formatMessage({ id: 'about.value' })}
          </div>
        </Divider>
      </Grid>
      <Grid item xs={12} sm={10} md={8}>
        {intl.formatMessage({ id: 'about.value.1' })}
      </Grid>

      <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
        <Divider>
          <div className="tianxing-title">
            {intl.formatMessage({ id: 'about.slogan' })}
          </div>
        </Divider>
      </Grid>
      <Grid item xs={12} sm={10} md={8}>
        {intl.formatMessage({ id: 'about.slogan.1' })}
      </Grid>

      <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
        <Divider>
          <div className="tianxing-title">
            {intl.formatMessage({ id: 'about.focusing' })}
          </div>
        </Divider>
      </Grid>
      <Grid item xs={12} sm={10} md={8}>
        {intl.formatMessage({ id: 'about.focusing.1' })}
      </Grid>
    </Grid>
  );
};

export default Tianxing;
