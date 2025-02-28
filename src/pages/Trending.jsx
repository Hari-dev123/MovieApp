import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieItem from "../components/MovieItem";

const Trending = () => {
  const API_URL =  import.meta.env.VITE_API_URL
  const API_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN
  
  const [movies, setMovies] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          Accept: "application/json",
        },
      });
      setMovies(response.data.results);
      console.log(response.data); 
    } catch (error) {
      console.error("Error fetching data:", error.response || error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []); // Fetch data when component mounts

  return (
    <div className="">
      <h1 className="text-2xl text-center sm:text-3xl mb-5 first-letter:text-3xl first-letter:text-red-600">Trending Movies & <span className="first-letter:text-red-600">Shows</span></h1>
      
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
         {movies && movies.map(itm=>{
           return  <MovieItem key={itm.id} id = {itm.id} poster={itm.poster_path} title={itm.title || itm.name} date = {itm.first_air_date || itm.release_date} media_type={itm.media_type} vote={itm.vote_average} />
         })}
       </div>
      
    </div>
  );
};

export default Trending;
