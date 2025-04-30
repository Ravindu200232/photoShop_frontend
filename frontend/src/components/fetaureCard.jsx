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
      img: "https://i.ibb.co/7t70r25/photo-1634061330609-efe8060bc966-ixlib-rb-1-2.jpg",
      name: "Simple, Customisable Packages, High Res Images in Two Working Days",
      dis: "Your wedding. Your way. Pick from one of our two simple customisable photography packages.",
    },
    {
      img: "https://i.ibb.co/gMNfQJm/photo-1460364157752-926555421a7e-ixlib-rb-1-2.jpg",
      name: "Our Photographer Captures Flawless, On-Trend Images Every Time",
      dis: "Capture the emotion of your day with beautiful candid images. View our gallery for inspiration.",
    },
    {
      img: "https://i.ibb.co/Nyfx58s/photo-1628702840326-8d2e62bf7822-ixlib-rb-1-2.jpg",
      name: "Affordable, Combo packages With Flexible Payment Options",
      dis: "Photography packages that work with your wedding budget. Pay at a pace that works for you.",
    },
  ];

  return (
    <div className="Features-section py-16 bg-black">
      <Container>
        <div className="Feature-title text-center mb-10" data-aos="fade-right">
          <h3 className="google-font text-warning">What We Offer</h3>
          <h2 className="text-[2.6rem] text-[#e8e4e4bf] pb-4">
            Explore & choose what's best for you!
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
