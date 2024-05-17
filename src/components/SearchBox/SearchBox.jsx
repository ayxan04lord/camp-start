import React, { useState } from 'react';
import './SearchBox.css';
import { useDispatch } from 'react-redux';
import { fetchMovie } from '../../reducer/MoviesReducer';


const SearchBox = () => {
    const dispatch = useDispatch();
    const [searchLine, setSearchLine] = useState('');

    const searchLineChangeHandler = (e) => {
        setSearchLine(e.target.value);
    };

    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        if (searchLine.trim()) {
            dispatch(fetchMovie(searchLine)); 
        }
    };

    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    Искать фильм по названию:
                    <input
                        value={searchLine}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Например, Shawshank Redemption"
                        onChange={searchLineChangeHandler}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!searchLine.trim()}
                >
                    Искать
                </button>
            </form>
        </div>
    );
};

export default SearchBox;
