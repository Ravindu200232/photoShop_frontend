import React, { useState, useEffect } from "react";
import Review from "./review";
import { CircularProgress, Container } from "@mui/material";
import Slider from "react-slick";
import LeftArrow from "/left-arrow.svg";
import RightArrow from "/right-arrow.svg";

const Reviews = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://radiant-stream-13822.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3200,
    cssEase: "linear",
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="reviews bg-gray-950 py-10">
      <Container>
        <div className="reviews-title text-center mb-10">
          <h4 className="text-warning font-semibold text-white text-lg">
            Our Client's Review
          </h4>
          <h2 className="text-3xl text-gray-200">
            Here’s what our clients think about our services
          </h2>
        </div>

        {data.length === 0 ? (
          <CircularProgress sx={{ margin: "auto", display: "block" }} />
        ) : (
          <Slider {...settings}>
            {data.map((review) => (
              <Review key={review._id} review={review} />
            ))}
          </Slider>
        )}
      </Container>
    </div>
  );
};

export default Reviews;
