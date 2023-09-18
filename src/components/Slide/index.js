import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './index.css'



export default class Carrossel extends React.Component {
  render() {
    return (
      <div>
        <Swiper className="swiper-container w-50">
          <SwiperSlide className="slide-item">
            <img src={require("./ippm.png")} alt="fotoigreja" />
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <img src={require("./ippm.png")} alt="fotoigreja" />
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <img src={require("./ippm.png")} alt="fotoigreja" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}

