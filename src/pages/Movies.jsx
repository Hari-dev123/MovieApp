import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomPagination from "../components/Pagination";
import MovieItem from "../components/MovieItem";
import Genres from "../components/Genres";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);

  const fetchMovies = async () => {
    try {
      const genreQuery = selectedGenres.map((g) => g.id).join(",");
      const API_URL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=${genreQuery}`;

      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_APP_TMDB_TOKEN}`,
          Accept: "application/json",
        },
      });

      setMovies(response.data.results);
      setPages(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching movies:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page, selectedGenres]);

  return (
    <div className="-py-10">
      <h1 className="text-2xl text-center sm:text-3xl mb-5 first-letter:text-3xl first-letter:text-red-600">
        Movies
      </h1>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        genres={genres}
        setGenres={setGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {movies &&
          movies.map((itm) => (
            <MovieItem
              key={itm.id}
              id={itm.id}
              poster={itm.poster_path}
              title={itm.title || itm.name}
              date={itm.first_air_date || itm.release_date}
              media_type="movie"
              vote={itm.vote_average}
            />
          ))}
      </div>
      <div className="mt-4 flex justify-center">
        {pages > 1 && <CustomPagination setPage={setPage} pages={pages} />}
      </div>
    </div>
  );
};

export default Movies;
