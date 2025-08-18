import React from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@mui/material/Grid';
import data from '../../../data/donate';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.less';
import 'swiper/modules/navigation/navigation.less';
import 'swiper/modules/pagination/pagination.less';
import 'swiper/modules/autoplay/autoplay.less';
import './index.less';

SwiperCore.use([Navigation, Pagination]);

const Donate: React.FC = (props) => {
  const intl = useIntl();

  const renderSwiper = () => {
    return (
      <div className="index-carousel-container">
        <Swiper
          effect="fade"
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {data.map((item) => {
            return (
              <SwiperSlide>
                <div>
                  <img className="slide-img" src={item.src} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  };

  return (
    <div className="full-page">
      <div className="donate-container">{renderSwiper()}</div>
    </div>
  );
};

export default Donate;
