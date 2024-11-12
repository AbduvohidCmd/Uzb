import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Mebal.css';
import Layout from '../Layout/Layout';

const Mebal = () => {
    const [mebelTexts, setMebelTexts] = useState([]);
    const navigate = useNavigate();

    // Backenddan ma'lumotlarni olish
    useEffect(() => {
        // Backend API-ni almashtirish kerak o'zingizning URLingiz bilan
        fetch('https://your-backend-api-url.com/mebels')
            .then(response => response.json())
            .then(data => setMebelTexts(data))
            .catch(error => console.error('Ma\'lumotlarni olishda xatolik:', error));
    }, []);

    return (
        <>
            <Layout />
            <div className='MebelConteiner'>
                <b>Каталог предприятий Узбекистана</b>
                <p>Мебельная отрасль</p>
            </div>
            <div className='MebelBox'>
                {mebelTexts.map((mebel) => (
                    <div key={mebel.id} className='BoxPage'>
                        <div className='Text'>
                            <p>{mebel.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Mebal;
