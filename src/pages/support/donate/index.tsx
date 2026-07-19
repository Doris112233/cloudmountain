import React from "react";
import data from "../../../data/donate";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.less";

const Donate: React.FC = () => {
  const renderSwiper = () => {
    return (
      <div className="index-carousel-container">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={item.src}>
                <div>
                  <img
                    className="slide-img"
                    src={item.src}
                    alt={`云山保护月捐介绍 ${index + 1}`}
                  />
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
