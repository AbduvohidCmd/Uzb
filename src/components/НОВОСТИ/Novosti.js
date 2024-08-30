import React from 'react'
import "./Novosti.css"
import Tarvuz from '../../Img/Tarvuz.jpg'
import Mevalar from '../../Img/Mevalar.jpg'
import ElektronImg from '../../Img/EloktirImg.jpg'
import Samalot from '../../Img/Samalot.jpg'
import Naqsh from '../../Img/Naqsh.jpg'


const Novosti = () => {
    return (
        <>
            <div className='Novosti'>
                <h1>НОВОСТИ</h1>
            </div>
            <div className='NovostiContenier'>
                <div className='NovostiMalumot1'>
                    <div className='Img1'>
                        <img src={Tarvuz} alt="" />
                    </div>
                    <div className='NovostiYozuv'>
                        <e>22.11.2020</e>
                        <b>Южный Урал выбирает узбекские арбузы и дыни</b>
                        <p>Узбекистан заменил китайские поставки фруктов в регион</p>
                    </div>
                </div>
                <div className='NovostiMalumot2'>
                    <div className='Img2'>
                        <img src={Mevalar} alt="" />
                    </div>
                    <div className='NovostiYozuv'>
                        <e>15.09.2020</e>
                        <b>Фруктовый путь "с климат-контролем"</b>
                        <p>Из Узбекистана в Россию планируется организовать доставку овощей и фруктов в рефконтейнерах.</p>
                    </div>
                </div>
                <div className='NovostiMalumot3'>
                    <div className='Img3'>
                        <img src={ElektronImg} alt="" />
                    </div>
                    <div className='NovostiYozuv'>
                        <e>28.08.2020</e>
                        <b>"Электродрайвер" экономики</b>
                        <p>Электротехническая отрасль может войти в число ведущих отраслей промышленности республики</p>
                    </div>
                </div>
                <div className='NovostiMalumot4'>
                    <div className='Img4'>
                        <img src={Samalot} alt="" />
                        <div className='NovostiYozuv'>
                            <e>27.08.2020</e>
                            <b>От слов к делу</b>
                            <p>Предстоящий государственный визит Президента Республики Узбекистан в Россию обещает быть весьма насыщенным и плодотворным</p>
                        </div>
                    </div>
                </div>
                <div className='NovostiMalumot5'>
                    <div className='Img5'>
                        <img src={Naqsh} alt="" />
                        <div className='NovostiYozuv'>
                            <e>22.08.2020</e>
                            <b>Золотой экспорт</b>
                            <p>Ювелирная отрасль Узбекистана набирает обороты</p>
                        </div>
                    </div>
                </div>
                <div className='NovostiMalumot6'>
                    <div className='Img6'>
                        <img src="" alt="" />
                    </div>
                    <div className='NovostiYozuv'>
                        <e>28.08.2020</e>
                        <b>"Электродрайвер" экономики</b>
                        <p>Электротехническая отрасль может войти в число ведущих отраслей промышленности республики</p>
                    </div>
                </div>
                <div className='NovostiMalumot7'>
                    <div className='Img7'>
                        <img src="" alt="" />
                    </div>
                    <div className='NovostiYozuv'>
                        <e>28.08.2020</e>
                        <b>"Электродрайвер" экономики</b>
                        <p>Электротехническая отрасль может войти в число ведущих отраслей промышленности республики</p>
                    </div>
                </div>
                <div className='NovostiMalumot8'>
                    <div className='Img8'>
                        <img src="" alt="" />
                    </div>
                    <div className='NovostiYozuv'>
                        <e>28.08.2020</e>
                        <b>"Электродрайвер" экономики</b>
                        <p>Электротехническая отрасль может войти в число ведущих отраслей промышленности республики</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Novosti
