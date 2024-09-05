import React from 'react'
import "./Vistavki.css"
import Fashion from '../../Img/Fashion.jpg'
import Sport from '../../Img/sport.jpg'
import Tashabuslar from '../../Img/Tashabuslar.jpg'
import CmImg from '../../Img/CmImg.jpg'
import OrqaFon from '../../Img/Orqa fon.webp'

const Vistavki = () => {
    return (
        <>
            <div className='Vistavki'>
                <img src={OrqaFon} alt="" />
                <p>ВЫСТАВКИ</p>
            </div>
            <div className='VistavkiContenier'>
                <div className='VistavkiMalumot1'>
                    <div className='Img1'>
                        <img src={Fashion} alt="" />
                    </div>
                    <div className='VistavkiYozuv'>
                        <b>
                            Fashion Style
                            Russia 2024
                        </b>
                        <p>
                            19 - 22 февраля 2024г.
                            г.Москва, Крокус Экспо
                            коллективный стенд Республики Узбекистан
                        </p>
                    </div>
                </div>
                <div className='VistavkiMalumot2'>
                    <div className='Img1'>
                        <img src={Sport} alt="" />
                    </div>
                    <div className='VistavkiYozuv'>
                        <b>
                            БИОТ-2023
                        </b>
                        <p>
                            5-8 декабря 2023г.
                            г.Москва
                            коллективный стенд
                            Республики Узбекистан
                        </p>
                    </div>
                </div>
                <div className='VistavkiMalumot3'>
                    <div className='Img3'>
                        <img src={Tashabuslar} alt="" />
                    </div>
                    <div className='VistavkiYozuv'>
                        <b>
                            Retail Central Asia
                        </b>
                        <p>
                            21-22 ноября 2023г.
                            г.Ташкент, Республика Узбекистан
                            2-ой Международный ПЛАС-Форум
                        </p>
                    </div>
                </div>
                <div className='VistavkiMalumot4'>
                    <div className='Img3'>
                        <img src={CmImg} alt="" />
                    </div>
                    <div className='VistavkiYozuv'>
                        <b>
                            Содружество Моды
                        </b>
                        <p>
                            9 - 10 ноября 2023г.
                            г.Санкт-Петербург
                            Межпарламентская Ассамблея государств-участников СНГ
                        </p>
                    </div>
                </div>
                <div className='VistavkiMalumot5'></div>
                <div className='VistavkiMalumot6'></div>
                <div className='VistavkiMalumot7'></div>
                <div className='VistavkiMalumot8'></div>
            </div>

        </>
    )
}

export default Vistavki
