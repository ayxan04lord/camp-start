import React from 'react';
import './MovieItem.css';

const MovieItem = ({ Title, Year, Poster, imdbID, onSave }) => {
    return (
        <article className="movie-item">
            <img className="movie-item__poster" src={Poster} alt={Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                <button onClick={() => onSave(imdbID)} type="button" className="movie-item__add-button">Siyahıya əlavə et</button>
            </div>
        </article>
    );
};

export default MovieItem;
