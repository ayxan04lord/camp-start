import React, { useEffect } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../../reducer/MoviesReducer';

const Movies = () => {
    const data = useSelector(state => state.MovieList)
    const dispatch = useDispatch()

    const addToFavorites = (movie) => {
        console.log('Добавить в избранное:', movie);
    };

    useEffect(() => {
        dispatch(fetchMovie('Batman'))
    }, [])

    return (
        <ul className="movies">
            {data.data?.map((movie) => (
                <li className="movies__item" key={movie.imdbID}>
                    <MovieItem movie={movie} addToFavorites={addToFavorites} />
                </li>
            ))}
        </ul>
    );
}

export default Movies;
