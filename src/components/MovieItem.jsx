import { motion } from "framer-motion";
import React from "react";
import { img_300, unavailable } from "../config/Config";
import RatingCircle from "./Ratings";

const MovieItem = ({ id, poster, title, date, media_type, vote, setHoveredMovieId, hoveredMovieId }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }} // Start blurry
      animate={{ opacity: 1, filter: "blur(0px)" }} // Fade into clear view
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-fit bg-blue-950 rounded-xl pb-3 hover:scale-105 transition-all"
    >

      <img
        src={poster ? `${img_300}/${poster}` : `${unavailable}`}
        alt={title}
        className="rounded-xl h-fit"
      />
      <div className="relative -top-5 left-3">
        <RatingCircle rating={vote} />
      </div>
      <p className="text-lg sm:text-xl font-semibold pl-2">{title}</p>
      <div className="flex flex-col sm:flex-row justify-between pl-2 pr-4">
        <p>{media_type === "tv" ? "TV series" : "Movie"}</p>
        <p>{date}</p>
      </div>
    </motion.div>
  );
};

export default MovieItem;
