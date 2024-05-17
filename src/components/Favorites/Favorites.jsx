import React, { useState } from 'react';
import './Favorites.css';
import { useSelector, useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { saveFavoritesList } from '../../reducer/MoviesReducer';

const Favorites = () => {
    const favorites = useSelector((state) => state.movies.favorites);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [listName, setListName] = useState('');

    const handleSaveList = () => {
        if (listName.trim()) {
            dispatch(saveFavoritesList({ name: listName, movies: favorites }));
            navigate(`/list/${listName}`);
        }
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
                        <button
                            type="button"
                            className="favorites__remove"
                            onClick={() => handleRemoveFromFavorites(movie.imdbID)}
                        >
                            &#10006;
                        </button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={listName}
                onChange={(e) => setListName(e.target.value)}
                placeholder="Название списка"
                className="favorites__list-name"
            />
            <button
                type="button"
                className="favorites__save"
                onClick={handleSaveList}
                disabled={!listName.trim()}
            >
                Сохранить список
            </button>
        </div>
    );
};

export default Favorites;
