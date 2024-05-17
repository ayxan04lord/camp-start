import React, { useEffect } from 'react';
import './Favorites.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites, saveFavoritesList } from '../../reducer/MoviesReducer';

const Favorites = () => {
    const favorites = useSelector(state => state.MovieList.favorites);
    const dispatch = useDispatch();

    const handleSaveList = () => {
        dispatch(saveFavoritesList(favorites));
    };

    const handleRemoveFromFavorites = (imdbID) => {
        dispatch(removeFromFavorites(imdbID));
    };
    return (
        <div className="favorites">
            <h2>Избранное</h2>
            <ul>
                {favorites.map((movie) => (
                    <li key={movie.imdbID}>
                        {movie.Title} ({movie.Year})
                        <button type="button" className="favorites__remove" onClick={() => handleRemoveFromFavorites(movie.imdbID)}>
                            &#10006;
                        </button>
                    </li>
                ))}
            </ul>
            <button type="button" className="favorites__save" onClick={handleSaveList}>
                Сохранить список
            </button>
        </div>
    );
}

export default Favorites;
