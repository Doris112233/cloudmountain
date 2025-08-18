import Grid from '@mui/material/Grid';
import { useIntl } from 'umi';
import './index.less';

const Honor = () => {
  const intl = useIntl();
  const honors = [
    {
      cn: '2016年，入选“创绿家”计划',
      en: '2016, selected in "The Green Starters funding scheme"',
    },
    {
      cn: '2017年，入选“劲草伙伴”计划',
      en: '2017, selected in "The Growing Up Together scheme"',
    },
    {
      cn: '2019年，“守护天行长臂猿的家”项目获得“迈向生态文明，向环保先锋致敬“荣誉',
      en: '2019, "Protecting the Home of Skywalker Gibbons" project honored with the "Toward Ecological Civilization: Salute to Environmental Pioneers" award',
    },
    {
      cn: '2021年，“天行长臂猿保护”入选COP15全球生物多样性100+案例',
      en: '2021, "Skywalker Gibbon Conservation" selected as one of COP15\'s "100+ Global Biodiversity Good Practices""',
    },
    {
      cn: '2021年，荣获福特汽车环保奖-年度先锋奖',
      en: 'Awarded Ford Motor Conservation Award - Pioneer of the Year',
    },
    {
      cn: '2024年，“苏典傈僳族乡天行长臂猿社区保护地”入选潜力OECMs入围案例',
      en: 'Sudian Lisu Community Conservation Area for Skywalker Gibbons listed as a potential OECM (Other Effective Area-based Conservation Measure) by IUCN',
    },
  ];
  return (
    <Grid item xs={12} sm={10} md={8}>
      <h1
        className="honor-title"
        style={{
          fontSize: '24px',
          textAlign: 'center',
          marginBottom: '60px',
          paddingBottom: '12px',
          fontWeight: 'bold',
          borderBottom: '1px solid #e4eaec',
        }}
      >
        {intl.formatMessage({ id: 'us.honor.title' })}
      </h1>
      {honors.map((honor, index) => (
        <div className="honor-card" key={index}>
          <h2 style={{ fontSize: '15px' }}>{honor.cn}</h2>
          <p>{honor.en}</p>
        </div>
      ))}
    </Grid>
  );
};

export default Honor;
