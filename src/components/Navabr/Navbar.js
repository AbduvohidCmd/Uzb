import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    const navigate = useNavigate();

    const handleExhibitionsClick = () => {
        navigate('/vistavki');
    };

    const handleUzbekistanClick = () => {
        navigate('/Malumotlar'); 
    };

    const handleNewsClick = () => {
        navigate('/novosti'); 
    };

    return (
        <div className='NavContenier'>
            <div className='Nav'>
                <div className='NavInp'>
                    <div className='ImgIcon'></div>
                    <div className='input-container'>
                        <input type="text" placeholder="Поиск..." className="input-with-icon" />
                        <CiSearch className="input-icon" />
                    </div>
                </div>
                <div className='NavKat'>
                    <div className='div'></div>
                    <div className='Pteg'>
                        <p onClick={handleUzbekistanClick}>УЗБЕКИСТАН</p>
                        <p>О ПРОЕКТЕ</p>
                        <p className='with-hover' onClick={handleExhibitionsClick}>
                            МЕРОПРИЯТИЯ
                            <div className='hover-text'>Ближайшие выставки</div>
                        </p>
                        <p onClick={handleNewsClick}>НОВОСТИ</p>
                        <p>КАТАЛОГ ПРЕДПРИЯТИЙ</p>
                    </div>
                </div>
            </div>
            <div className='NavKatalog'>
                <h1>+998 (99) 244 00 61</h1>
                <b>ЗАКАЗАТЬ ЗВОНОК</b>
            </div>
        </div>
    );
};

export default Navbar;
