import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SingleCard from "./singleCard";

const FeatureCards = () => {
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);

  const cards = [
    {
      img: "/f1.jpg",
      name: "Simple, Customisable Packages, High-Res Images in Two Working Days",
      dis: "Get high-quality photos of your property – fast. Choose from two streamlined packages that you can customise to suit your real estate or commercial needs.",
    },
    {
      img: "/f2.jpg",
      name: "Our Photographer Captures Flawless, On-Trend Images Every Time",
      dis: "Present your property in its best light. From wide-angle interior shots to striking exteriors, we deliver professional photos that impress buyers and clients. View our gallery for inspiration.",
    },
    {
      img: "/f3.jpg",
      name: "Affordable Combo Packages With Flexible Payment Options",
      dis: "Professional photography that fits your marketing budget. Select a package that works for you and pay with flexible options.",
    },
  ];

  return (
    <div className="Features-section py-16 bg-black">
      <Container>
        <div className="Feature-title text-center mb-10" data-aos="fade-right">
          <h3 className="google-font text-warning">What We Offer</h3>
          <h2 className="text-[2.6rem] text-[#e8e4e4bf] pb-4">
          Explore & Choose What’s Best for Your Property!
          </h2>
        </div>
       <div >
       <Grid container spacing={3}>
          {cards.map((card, idx) => (
            <SingleCard key={idx} card={card} />
          ))}
        </Grid>
       </div>
      </Container>
    </div>
  );
};

export default FeatureCards;
