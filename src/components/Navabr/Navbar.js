import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import CallModal from '../callModal/CallModal.js';

const Navbar = () => {
    const navigate = useNavigate();
    const [isCallModalOpen, setIsCallModalOpen] = useState(false);

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

    return (
        <>
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
                            <p onClick={handleOproyektClick}>О ПРОЕКТЕ</p> { }
                            <p className='with-hover' onClick={handleExhibitionsClick}>
                                МЕРОПРИЯТИЯ
                                <div className='hover-text'>Ближайшие выставки</div>
                            </p>
                            <p onClick={handleNewsClick}>НОВОСТИ</p>
                            <p onClick={handleKatalogClick}>КАТАЛОГ ПРЕДПРИЯТИЙ</p> {/* Bu yerda o'zgartirdik */}
                        </div>
                    </div>
                </div>
                <div className='NavKatalog'>
                    <h1>+998 (99) 244 00 61</h1>
                    <b onClick={handleCallModalOpen}>ЗАКАЗАТЬ ЗВОНОК</b>
                </div>
            </div>
            <CallModal isOpen={isCallModalOpen} onClose={handleCallModalClose} />
        </>
    );
};

export default Navbar;
