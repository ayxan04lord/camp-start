import React, { useEffect } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../../reducer/MoviesReducer';



const Movies = () => {
    const data = useSelector((state) => state.movies.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovie('Batman'));
    }, [dispatch]);

    const handleAddToFavorites = (movie) => {
        dispatch(addToFavorites(movie));
    };

    return (
        <ul className="movies">
            {data?.map((movie) => (
                <li className="movies__item" key={movie.imdbID}>
                    <MovieItem movie={movie} addToFavorites={handleAddToFavorites} />
                </li>
            ))}
        </ul>
    );
};

export default Movies;
