import React from 'react'
import './Footer.css'
import orqaFon from '../../Img/Orqa fon.webp'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

// import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaApple, FaAndroid } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='FooterConteiner'>
            <img src={orqaFon} alt="" />
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
                            <h1>NAMANGAN</h1>
                        </div>
                        <div className="BoxBtn">
                            <button>КАТАЛОГ ПРЕДПРИЯТИЙ</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Footer2'>
                <div className='FooterYozuv1'>
                    <p>УЗБЕКИСТАНО</p>
                    <p>O ПРОЕКТЕ</p>
                </div>
                <div className='FooterYozuv2'>
                    <p>ВЫСТАВКИ</p>
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
                        <p
                        >Министерство инвестиций и внешней
                            торговли РУ
                        </p>
                        <b>mitt.uz</b>
                    </div>
                    <div className='BoxYozuv2'>
                        <p>Агентство продвижения
                            экспорта РУ</p>
                        <b>epauzb.uz</b>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
