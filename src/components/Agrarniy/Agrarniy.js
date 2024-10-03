import React from 'react';
import './Agrarniy.css';
import Layout from '../Layout/Layout';
import Fashion from '../../Img/Fashion.jpg';

const Agrarniy = () => {
    return (
        <>
            <div className='Agrarniy'>
                <p>Каталог предприятий Узбекистана</p>
                <h1>Аграрный сектор и <br /> пищевая промышленность</h1>
            </div>

            <div className="Agrarniy2">
                <div className='AgrarniyMalumot2'>
                    <div className='Img1'>
                        <img src={Fashion} alt="" />
                    </div>
                    <div className='AgrarniyYozuv'>
                        {/* <b>FISHVILLE</b>
                        <p>выращивание и переработка <br /> холодолюбивых видов рыб</p> */}
                    </div>
                </div>

                <div className='AgrarniyMalumot2'>
                    <div className='Img1'>
                        <img src={Fashion} alt="" />
                    </div>
                    <div className='AgrarniyYozuv'>
                        {/* <b>FISHVILLE</b>
                        <p>выращивание и переработка <br /> холодолюбивых видов рыб</p> */}
                    </div>
                </div>

                <div className='AgrarniyMalumot2'>
                    <div className='Img1'>
                        <img src={Fashion} alt="" />
                    </div>
                    <div className='AgrarniyYozuv'>
                        {/* <b>FISHVILLE</b>
                        <p>выращивание и переработка <br /> холодолюбивых видов рыб</p> */}
                    </div>
                </div>

                <div className='AgrarniyMalumot2'>
                    <div className='Img1'>
                        <img src={Fashion} alt="" />
                    </div>
                    <div className='AgrarniyYozuv'>
                        {/* <b>FISHVILLE</b>
                        <p>выращивание и переработка <br /> холодолюбивых видов рыб</p> */}
                    </div>
                </div>

            </div>

            <Layout />

        </>
    )
}

export default Agrarniy
