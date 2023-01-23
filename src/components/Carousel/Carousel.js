import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Carousel.module.scss";
import clsx from "clsx";
import { IconButton } from "@mui/material";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Carousel = (
  { children, className, prevBtnClasses, nextBtnClasses },
  props
) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    ...props,
    responsive: [
      // when window width is <= 480px
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // when window width is <= 640px
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      // when window width is <= 768px
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null);

  function onClickNext() {
    sliderRef.current.slickNext();
  }

  function onClickPrev() {
    sliderRef.current.slickPrev();
  }

  return (
    <div className={styles.sliderWrapper}>
      <Slider
        {...settings}
        className={clsx(styles.carousel, className)}
        ref={sliderRef}
      >
        {children}
      </Slider>
      <IconButton
        onClick={onClickPrev}
        className={clsx(styles.prevBtn, prevBtnClasses)}
      >
        <BsArrowLeft />
      </IconButton>
      <IconButton
        onClick={onClickNext}
        className={clsx(styles.nextBtn, nextBtnClasses)}
      >
        <BsArrowRight />
      </IconButton>
    </div>
  );
};

export default Carousel;
