import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ card }) => {
  const { img, name, dis } = card;

  return (
    <Grid item xs={12} md={4} data-aos="fade-up" className="w-full md:w-[350px] mx-auto">
      <div className="Feature-card text-white rounded-l-2xl  overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ">
        <img src={img} alt={name} className="w-4xl h-57 object-cover  rounded-br-2xl" />
        <div className="Feature-card-text p-5">
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <p className="text-white mb-4">{dis}</p>
          <Link to="/allPackages">
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </Grid>
  );
};

export default SingleCard;
