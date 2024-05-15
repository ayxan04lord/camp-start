import React, { useState } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    async function getMovies(searchTerm) {
        const response = await fetch(`https://www.omdbapi.com/?apikey=801cbc54&s=${searchTerm}`, { "method": "GET" });
        const json = await response.json();
        if (json.Search) {
            setMovies(json.Search);
        }
    }

    const saveMovie = async (imdbID) => {
        const data = {
            title: "Example", 
            movies: [imdbID]
        };
        // console.log("Data to be sent:", data);
        const response = await fetch(`https://acb-api.algoritmika.org/api/movies/list`, {
            "method": "POST",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log("Response from server:", result);
        console.log("Type of id:", typeof result.id);
        console.log("ID value:", result.id);
        console.log("Is result.id empty?", result.id === '');
        console.log("Length of id:", result.id.length);
        if (result.id) {
            console.error("Data not saved!");
        }
        
    };

    return (
        <div className="movies">
            <input type="text" id="search_ayxan" />
            <button onClick={() => getMovies(document.getElementById("search_ayxan").value)} type="button">Axtar</button>

            {movies.length === 0 ? (
                <p>Axtarış edin</p>
            ) : (
                <ul className="movies__list">
                    {movies.map(movie => (
                        <li key={movie.imdbID} className="movies__item">
                            <MovieItem {...movie} onSave={saveMovie} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Movies;
