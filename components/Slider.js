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
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  const userReview = [
    {
      id: 1,
      name: "Chealse Morgan",
      company: "CEO ot Subway",
      paragraph: "Vestibulum eu quam ec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.",
    },
    {
      id: 2,
      name: "Ronald Richards",
      company: "Barone LLC.",
      paragraph: "Vestibulum eu quam ec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.",
    },
    {
      id: 3,
      name: "Chealse Ronald",
      company: "CEO ot Subway, Barone LLC.",
      paragraph: "Vestibulum eu quam ec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.",
    }
  ];

  const renderReviewsList = userReview.map((item) => {
    return (
      <div key={item.id}>
          <Slide props={item} />
      </div>
    )
  })

  return (
    <div>
      <h1 className={titleClasses}>What people say about Team</h1>
      <Slider {...settings}>
        {renderReviewsList}
      </Slider>
    </div>
  )
}