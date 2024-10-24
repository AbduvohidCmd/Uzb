import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mebal.css';
import Layout from '../Layout/Layout';
import Stol from '../../Img/MebelImg/Stol.jpg';
import Sarkor from '../../Img/MebelImg/Sarkor.jpg';
import StolToplam from '../../Img/MebelImg/StolToplam.webp';
import Mebel from '../../Img/MebelImg/MebelStol.jpg';

const Mebal = () => {
    const navigate = useNavigate();

    return (
        <>
            <Layout />
            <div className='MebelConteiner'>
                <b>Каталог предприятий Узбекистана</b>
                <p>Мебельная отрасль</p>
            </div>
            <div className='MebelBox'>
                <div className='BoxPage' onClick={() => navigate('/stol')}>
                    <div className='Img'>
                        <img src={Stol} alt="" />
                    </div>
                </div>
                <div className='BoxPage' onClick={() => navigate('/sarkor')}>
                    <div className='Img'>
                        <img src={Sarkor} alt="" />
                    </div>
                </div>
                <div className='BoxPage' onClick={() => navigate('/stolToplam')}>
                    <div className='Img'>
                        <img src={StolToplam} alt="" />
                    </div>
                </div>
                <div className='BoxPage' onClick={() => navigate('/mebelStol')}>
                    <div className='Img'>
                        <img src={Mebel} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mebal;
