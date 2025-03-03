import { Chip } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({ selectedGenres, setSelectedGenres, genres, setGenres, setPage }) => {
    const fetchGenres = async () => {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/genre/movie/list?language=en-US`,
                {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_APP_TMDB_TOKEN}`,
                        Accept: "application/json",
                    },
                }
            );
            setGenres(data.genres);
        } catch (error) {
            console.error("Error fetching genres:", error.response?.data || error.message);
        }
    };

    useEffect(() => {
        fetchGenres();
        return () => setGenres([]); // Fix: Reset genres properly
    }, []);

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    };

    const handleRemove = (genre) => {
        setSelectedGenres(selectedGenres.filter((selected) => selected.id !== genre.id));
        setGenres([...genres, genre]);
        setPage(1);
    };

    return (
        <div className="pb-2 -mt-4 sm:pb-5 sm:-mt-0">
            {selectedGenres.map((genre) => (
                <Chip
                    style={{ margin: 2 ,paddingLeft:2}}
                    label={genre.name}
                    key={genre.id}
                    color="primary"
                    clickable
                    size="small"
                    onDelete={() => handleRemove(genre)}
                />
            ))}
            {genres.map((genre) => (
                <Chip
                    style={{ margin: 2 ,color:'white' }}
                    label={genre.name}
                    key={genre.id}
                    clickable
                    size="small"
                    onClick={() => handleAdd(genre)
                    
                    }
                />
            ))}
        </div>
    );
};

export default Genres;
