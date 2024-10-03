import React from 'react';
import './Tovari.css';
import Layout from '../Layout/Layout';
import magna from '../../Img/magna.jpg';
import race from '../../Img/race.jpg';

const Tovari = () => {
  return (
    <>

      <div className='Tovari'>
        <p>Каталог предприятий Узбекистана</p>
        <h1>Товары народного потребления</h1>
      </div>

      <div className="Tovari2">

        <div className='Tovari2Malumot2'>
          <div className='Img1'>
            <img src={race} alt="" />
          </div>
          <div className='Tovari2Yozuv'>
            <b>VISAGE ELECTRIC</b>
            <div className="IkkiP">
              <p>производство спортивных</p>
              <p>товаров и инвентаря</p>
            </div>
          </div>
        </div>

        <div className='Tovari2Malumot2'>
          <div className='Img1'>
            <img src={magna} alt="" />
          </div>
          <div className='Tovari2Yozuv'>
            <b>MAGNA SPORT</b>
            <div className="IkkiP">
              <p>производство спортивных</p>
              <p>товаров и инвентаря</p>
            </div>
          </div>
        </div>

      </div>

    <Layout/>

    </>
  )
}

export default Tovari;
