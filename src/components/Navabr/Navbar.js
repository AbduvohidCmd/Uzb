import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import CallModal from '../callModal/CallModal.js';
import MadeInNamangan from '../../Img/Navbar/MadeInNamangan.jpg';
import { IoCloseOutline, IoReloadOutline } from "react-icons/io5"; // Loading va Close iconlar

const Navbar = () => {
    const navigate = useNavigate();
    const [isCallModalOpen, setIsCallModalOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [isBoxVisible, setIsBoxVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false); // Loading state

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

    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter') {
            setIsBoxVisible(true);
            setSearchQuery(e.target.value);
            setLoading(true); // Loadingni yoqamiz

            // 2 soniyadan keyin loadingni o'chiramiz va natija ko'rsatiladi
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    };

    const handleCloseBox = () => {
        setIsBoxVisible(false);
        setSearchQuery('');
    };

    const clearSearchInput = () => {
        setSearchQuery(''); // Input maydonini tozalash
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
                            <input
                                type="text"
                                value={searchQuery}
                                placeholder="Поиск..."
                                className="input-with-icon"
                                onKeyDown={handleInputKeyDown} // Enter bosilganda funksiya chaqiriladi
                                onChange={(e) => setSearchQuery(e.target.value)} // Inputdagi qiymatni o'qish
                            />
                            {searchQuery && (
                                <IoCloseOutline className="clear-icon" onClick={clearSearchInput} /> // Close icon input ichida
                            )}
                            <CiSearch className="input-icon" />
                            <AiOutlineMenu className="bar-icon" onClick={handleMenuClick} />
                        </div>
                    </div>
                    <div className={`NavKat ${showMenu ? 'hidden' : ''}`}>
                        <div className='div'></div>
                        <div className='Pteg'>
                            <p onClick={handleUzbekistanClick}>НАМАНГАН</p>
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
                        <button className='close-btn' onClick={handleCloseMenu}><IoCloseOutline />
                        </button>
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
            {isBoxVisible && (
                <div className='PopupConteiner'>
                    <div className="popup-box">
                        <button className="close-icon" onClick={handleCloseBox}><IoCloseOutline /></button>
                        {loading ? (
                            <IoReloadOutline className="loading-icon" /> // Loading icon 2 soniya davomida
                        ) : (
                            <>
                                <h1>Results for: {searchQuery}</h1>
                                <p>Nothing found</p>
                            </>
                        )}
                    </div>
                </div>
            )}
            <CallModal isOpen={isCallModalOpen} onClose={handleCallModalClose} />
        </>
    );
};

export default Navbar;
