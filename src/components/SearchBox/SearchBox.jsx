import React, { useState } from 'react';
import './SearchBox.css';

const SearchBox = ({ onSearch }) => {
    const [searchLine, setSearchLine] = useState('');

    const searchLineChangeHandler = (e) => {
        setSearchLine(e.target.value);
    };

    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        onSearch(searchLine);
    };
    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    Film axtarın:
                    <input
                        value={searchLine}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Məsələn, Shawshank Redemption"
                        onChange={searchLineChangeHandler}
                        id='search_axan'
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!searchLine}
                    onClick={() => getMovies(document.getElementById("search_axan").value)}
                >
                    Axtar
                </button>
            </form>
        </div>
    );
};

export default SearchBox;
