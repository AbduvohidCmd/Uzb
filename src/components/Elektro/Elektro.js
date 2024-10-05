import React from 'react';
import './Elektro.css';
import Layout from '../Layout/Layout';
import Elektroo from '../../Img/Elektroo.jpg';
import YuqoriChirchiq from '../../Img/YuqoriChirchiq.jpg';
import Elxolding from '../../Img/Elxolding.jpg';
import Vitech from '../../Img/Vitech.jpg';

const Tovari = () => {
    return (
        <>

            <div className='Tovari'>
                <p>Каталог предприятий Узбекистана</p>
                <h1>Электротехническая отрасль</h1>
            </div>

            <div className="Tovari2">

            <div className='Tovari2Malumot2'>
                    <div className='Img1'>
                        <img src={Elxolding} alt="" />
                    </div>
                    <div className='Tovari2Yozuv'>
                        <b>ELXOLDING</b>
                        <div className="IkkiP">
                            <p>производство учебно-</p>
                            <p>лабораторного оборудования</p>
                        </div>
                    </div>
                </div>

                <div className='Tovari2Malumot2'>
                    <div className='Img1'>
                        <img src={YuqoriChirchiq} alt="" />
                    </div>
                    <div className='Tovari2Yozuv'>
                        <b>YUQORICHIRCHIQ METALL INVEST</b>
                        <div className="IkkiP">
                            <p>производство</p>
                            <p>электротехнических изделий</p>
                        </div>
                    </div>
                </div>

                <div className='Tovari2Malumot2'>
                    <div className='Img1'>
                        <img src={Elektroo} alt="" />
                    </div>
                    <div className='Tovari2Yozuv'>
                        <b>O'ZELEKTROAPPARAT-ELECTROSHIELD</b>
                        <div className="IkkiP">
                            <p>производство</p>
                            <p>электротехнической продукции</p>
                        </div>
                    </div>
                </div>

                <div className='Tovari2Malumot2'>
                    <div className='Img1'>
                        <img src={Vitech} alt="" />
                    </div>
                    <div className='Tovari2Yozuv'>
                        <b>VITECH</b>
                        <div className="IkkiP">
                            <p>производство бытовой техники</p>
                        </div>
                    </div>
                </div>

            </div>

            <Layout />

        </>
    )
}

export default Tovari;