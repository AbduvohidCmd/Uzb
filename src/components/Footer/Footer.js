import React from 'react';
import './Footer.css';
import { FaFacebook, FaYoutube } from "react-icons/fa";
import FooterImg from '../../Img/Navbar/MadeInNamangan.jpg';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();


    const handleMalumotlarClick = () => {
        navigate('/Malumotlar');
    };

    const handleOproyektClick = () => {
        navigate('/Oproyekt');
    };

    const handleVistavkiClick = () => {
        navigate('/vistavki');
    };

    const handleKatalogClick = () => {
        navigate('/Katalog');
    };

    return (
        <div className='FooterConteiner'>
            <div className='Footer1'>
                <div className='BoxIcon'>
                    <div className='IconYozuv'>
                        <p>МЫ В СОЦСЕТЯХ</p>
                    </div>
                    <div className='Icon'>
                        <div className='BoxFa'></div>
                        <div className='IconsFa'>
                            <FaFacebook />
                            <FaYoutube />
                        </div>
                    </div>
                </div>
                <div className='BoxYozuv'>
                    <div className='YoqBox'></div>
                    <div className='BoxMedia'>
                        <div className='Media'>
                            <img src={FooterImg} alt="" />
                        </div>
                        <div className="BoxBtn">
                            <button onClick={handleKatalogClick}>КАТАЛОГ ПРЕДПРИЯТИЙ</button> {/* Katalog tugmasini navigatsiya bilan bog'ladik */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='Footer2'>
                <div className='FooterYozuv1'>
                    <p onClick={handleMalumotlarClick}>УЗБЕКИСТАНО</p>
                    <p onClick={handleOproyektClick}>O ПРОЕКТЕ</p>
                </div>
                <div className='FooterYozuv2'>
                    <p onClick={handleVistavkiClick}>ВЫСТАВКИ</p>
                    <p>MADE IN UZBEKISTAN</p>
                </div>
                <div className='FooterYozuv3'>
                    <p>КОНТАКТЫ</p>
                    <b>+998 (99) 244 00 61</b>
                </div>
            </div>
            <div className='Footer3'>
                <div className='box'></div>
                <div className='YozuvBox'>
                    <div className='BoxYozuv1'>
                        <p>Министерство инвестиций и внешней торговли РУ</p>
                        <b>mitt.uz</b>
                    </div>
                    <div className='BoxYozuv2'>
                        <p>Агентство продвижения экспорта РУ</p>
                        <b>epauzb.uz</b>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
