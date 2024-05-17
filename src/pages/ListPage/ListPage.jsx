import React from 'react';
import './ListPage.css';
import { useSelector } from 'react-redux';

const ListPage = () => {
    const movies = useSelector((state) => state.movies.lists);

    const saalm = useSelector(state => state.movies)

    console.log(saalm)

    console.log(movies,"fuerhfi")
    return (
        <div className="list-page">
            <h1 className="list-page__title">Мой список</h1>
            <ul>
                {movies.map((list) => (
                    <li key={list.name}>
                        <h3>{list.name}</h3>
                        <ul>
                            {list.movies.map((movie) => (
                                <li key={movie.imdbID}>
                                    <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noreferrer">{movie.Title} ({movie.Year})</a>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListPage;
