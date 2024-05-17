import React from 'react';
import './MovieItem.css';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../../reducer/MoviesReducer';

const MovieItem = ({ movie }) => {
    const { Title, Year, Poster, imdbID } = movie;
    const dispatch = useDispatch();

    const handleAddToFavorites = () => {
        dispatch(addToFavorites(movie));
    };

    return (
        <article className="movie-item">
            <img className="movie-item__poster" src={Poster} alt={Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                <button type="button" className="movie-item__add-button" onClick={handleAddToFavorites}>
                    Добавить в список
                </button>
            </div>
        </article>
    );
}

export default MovieItem;
