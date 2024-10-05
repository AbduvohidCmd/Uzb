import React from 'react';
import './Narodno.css';
import Layout from '../Layout/Layout';
import UstaDavron from '../../Img/UstaDavron.jpg';
import Gulnor from '../../Img/Gulnor.jpg';

const Tovari = () => {
    return (
        <>

            <div className='Tovari'>
                <p>Каталог предприятий Узбекистана</p>
                <h1>Народно-прикладное искусство</h1>
            </div>

            <div className="Tovari2">

                <div className='Tovari2Malumot2'>
                    <div className='Img1'>
                        <img src={Gulnor} alt="" />
                    </div>
                    <div className='Tovari2Yozuv'>
                        <b>GULNOR ART</b>
                        <div className="IkkiP">
                            <p>производство изделий в стиле</p>
                            <p>вышивки Шахрисабз "Ирокии"</p>
                        </div>
                    </div>
                </div>

                <div className='Tovari2Malumot2'>
                    <div className='Img1'>
                        <img src={UstaDavron} alt="" />
                    </div>
                    <div className='Tovari2Yozuv'>
                        <b>USTA DAVRON</b>
                        <div className="IkkiP">
                            <p>производство восточных</p>
                            <p>миниатюр и шелковой бумаги</p>
                        </div>
                    </div>
                </div>

            </div>

            <Layout />

        </>
    )
}

export default Tovari;