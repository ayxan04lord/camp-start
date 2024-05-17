import React, { useState } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';
import { useDispatch } from 'react-redux';
import { createNewList } from '../../redux/moviesSlice';
import { useNavigate } from 'react-router-dom'; 

const MainPage = () => {
    const [listName, setListName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const handleCreateList = () => {
        if (listName.trim()) {
            dispatch(createNewList({ name: listName, movies: [] }));
            navigate(`/list/${listName}`);
        }
    };

    return (
        <div className="main-page">
            <Header />
            <main className="main-page__content">
                <section className="main-page__main-section">
                    <div className="main-page__search-box">
                        <SearchBox />
                    </div>
                    <div className="main-page__movies">
                        <Movies />
                    </div>
                </section>
                <aside className="main-page__favorites">
                    <Favorites />
                    <div className="main-page__create-list">
                        <input
                            type="text"
                            placeholder="Название списка"
                            value={listName}
                            onChange={(e) => setListName(e.target.value)}
                        />
                        <button onClick={handleCreateList}>Создать список</button>
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default MainPage;
