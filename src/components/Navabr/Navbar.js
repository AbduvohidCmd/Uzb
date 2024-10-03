import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import CallModal from '../callModal/CallModal.js';
import MadeInNamangan from '../../Img/Navbar/MadeInNamangan.jpg'

const Navbar = () => {
    const navigate = useNavigate();
    const [isCallModalOpen, setIsCallModalOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleExhibitionsClick = () => {
        navigate('/vistavki');
    };

    const handleUzbekistanClick = () => {
        navigate('/Malumotlar');
    };

    const handleNewsClick = () => {
        navigate('/novosti');
    };

    const handleOproyektClick = () => {
        navigate('/Oproyekt');
    };

    const handleKatalogClick = () => {
        navigate('/Katalog');
    };

    const handleCallModalOpen = () => {
        setIsCallModalOpen(true);
    };

    const handleCallModalClose = () => {
        setIsCallModalOpen(false);
    };

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    const handleCloseMenu = () => {
        setShowMenu(false);
    };


    return (
        <>
            <div className={`NavContenier ${showMenu ? 'menu-open' : ''}`}>
                <div className='Nav'>
                    <div className='NavInp'>
                        <div className='ImgIcon'>
                        <img src={MadeInNamangan} alt="" />
                        </div>
                        <div className='input-container'>
                            <input type="text" placeholder="Поиск..." className="input-with-icon" />
                            <CiSearch className="input-icon" />
                            <AiOutlineMenu className="bar-icon" onClick={handleMenuClick} />
                        </div>
                    </div>
                    <div className={`NavKat ${showMenu ? 'hidden' : ''}`}>
                        <div className='div'></div>
                        <div className='Pteg'>
                            <p onClick={handleUzbekistanClick}>УЗБЕКИСТАН</p>
                            <p onClick={handleOproyektClick}>О ПРОЕКТЕ</p>
                            <p className='with-hover' onClick={handleExhibitionsClick}>
                                МЕРОПРИЯТИЯ
                                <div className='hover-text'>Ближайшие выставки</div>
                            </p>
                            <p onClick={handleNewsClick}>НОВОСТИ</p>
                            <p onClick={handleKatalogClick}>КАТАЛОГ ПРЕДПРИЯТИЙ</p>
                        </div>
                    </div>
                </div>
                <div className={`NavKatalog ${showMenu ? 'hidden' : ''}`}>
                    <h1>+998 (99) 244 00 61</h1>
                    <b onClick={handleCallModalOpen}>ЗАКАЗАТЬ ЗВОНОК</b>
                </div>
                {showMenu && (
                    <div className='modal'>
                        <button className='close-btn' onClick={handleCloseMenu}>X</button>
                        <div className='modal-content'>
                            <p onClick={handleUzbekistanClick}>УЗБЕКИСТАН</p>
                            <p onClick={handleOproyektClick}>О ПРОЕКТЕ</p>
                            <p className='with-hover' onClick={handleExhibitionsClick}>
                                МЕРОПРИЯТИЯ
                                <div className='hover-text'>Ближайшие выставки</div>
                            </p>
                            <p onClick={handleNewsClick}>НОВОСТИ</p>
                            <p onClick={handleKatalogClick}>КАТАЛОГ ПРЕДПРИЯТИЙ</p>
                        </div>
                    </div>
                )}
            </div>
            <CallModal isOpen={isCallModalOpen} onClose={handleCallModalClose} />
        </>
    );
};

export default Navbar;
