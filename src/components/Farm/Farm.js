import React from 'react';
import './Farm.css';
import Layout from '../Layout/Layout';
import Seem from '../../Img/seem.jpg';
import Fazo from '../../Img/Fazo.jpg';
import Nike from '../../Img/Nike.jpg';
import Dentals from '../../Img/Dentals.jpg';

const Tovari = () => {
    return (
        <>

            <div className='Tovari'>
                <p>Каталог предприятий Узбекистана</p>
                <h1>Фармацевтическая отрасль</h1>
            </div>

            <div className="Tovari2">

            <div className='Tovari2Malumot2'>
                    <div className='Img1'>
                        <img src={Nike} alt="" />
                    </div>
                    <div className='Tovari2Yozuv'>
                        <b>NIKA PHARM</b>
                        <div className="IkkiP">
                            <p>производство лекарственных</p>
                            <p>препаратов </p>
                        </div>
                    </div>
                </div>

                <div className='Tovari2Malumot2'>
                    <div className='Img1'>
                        <img src={Fazo} alt="" />
                    </div>
                    <div className='Tovari2Yozuv'>
                        <b>FAZO LUXE</b>
                        <div className="IkkiP">
                            <p>производство перевязочных</p>
                            <p>материалов и гигиенических</p>
                            <p>средств</p>
                        </div>
                    </div>
                </div>

                <div className='Tovari2Malumot2'>
                    <div className='Img1'>
                        <img src={Seem} alt="" />
                    </div>
                    <div className='Tovari2Yozuv'>
                        <b>SEEM</b>
                        <div className="IkkiP">
                            <p>производство лекарственных</p>
                            <p>препаратов</p>
                        </div>
                    </div>
                </div>

                <div className='Tovari2Malumot2'>
                    <div className='Img1'>
                        <img src={Dentals} alt="" />
                    </div>
                    <div className='Tovari2Yozuv'>
                        <b>DENTALS PHARMA</b>
                        <div className="IkkiP">
                            <p>производство стоматологических</p>
                            <p>материалов</p>
                        </div>
                    </div>
                </div>

            </div>

            <Layout />

        </>
    )
}

export default Tovari;