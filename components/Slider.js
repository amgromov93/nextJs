import React from "react";
import Slider from "react-slick";
import styles from "../sass/style.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slide from "./Slide";

export default function SliderContainer() {
  const titleClasses = styles.headingOne__mobile + ' ' + styles.slider__title;

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const props = [
    {
      id: 1,
      name: "Chealse Morgan",
      company: "CEO ot Subway",
      paragraph: "Vestibulum eu quam ec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.",
    },
  ]

  return (
    <div className={styles.container}>
      <h1 className={titleClasses}>What people say about Team</h1>
      <Slider {...settings}>
        <div>
          <Slide props={props} />
        </div>
        <div>
          <Slide props={props} />
        </div>
        <div>
          <Slide props={props} />
        </div>
      </Slider>
    </div>
  )
}