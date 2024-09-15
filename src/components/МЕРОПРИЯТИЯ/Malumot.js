import React, { useState } from 'react';
import "./Malumot.css";
import Fashion from '../../Img/Fashion.jpg';
import Sport from '../../Img/sport.jpg';
import Tashabuslar from '../../Img/Tashabuslar.jpg';
import CmImg from '../../Img/CmImg.jpg';

const initialData = [
    {
        img: Fashion,
        title: "Fashion Style Russia 2024",
        description: "19 - 22 февраля 2024г. г.Москва, Крокус Экспо коллективный стенд Республики Узбекистан",
    },
    {
        img: Sport,
        title: "БИОТ-2023",
        description: "5-8 декабря 2023г. г.Москва коллективный стенд Республики Узбекистан",
    },
    {
        img: Tashabuslar,
        title: "Retail Central Asia",
        description: "21-22 ноября 2023г. г.Ташкент, Республика Узбекистан 2-ой Международный ПЛАС-Форум",
    },
    {
        img: CmImg,
        title: "Содружество Моды",
        description: "9 - 10 ноября 2023г. г.Санкт-Петербург Межпарламентская Ассамблея государств-участников СНГ",
    }
];

const Malumot = () => {
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);

    const handleLoadMore = () => {
        setIsLoading(true);

        setTimeout(() => {
            setData(prevData => [
                ...prevData,
                ...initialData // Yangi "box"larni qo'shish
            ]);
            setIsLoading(false);
        }, 1000); // 1 soniya loading effekti
    };



    return (
        <>
            <div className='MalumotContenier'>
                {data.map((item, index) => (
                    <div className={`MalumotItem`} key={index}>
                        <div className='MalumotImg1'>
                            <img src={item.img} alt="" />
                        </div>
                        <div className='MalumotYozuv'>
                            <b>{item.title}</b>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}

                {/* Buttonni "MalumotContenier" ichiga qo'shish */}
                <div className='buttonContainer'>

                    <button onClick={handleLoadMore}>Показатъ еще</button>

                </div>
            </div>
        </>
    );
};

export default Malumot;
