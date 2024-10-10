import React from 'react';
import "./Malumotlar.css";
import Geografiya from '../../Img/Malumotlar/Geografiya.jpg';
import OrqaFon from '../../Img/Orqa fon.webp';
import { MdChevronRight } from "react-icons/md";

const Malumotlar = () => {
  return (
    <>
      <div className='MalumotlarConteiner'>
        <img src={OrqaFon} alt="" />
        <p>WELCOME TO NAMANGAN</p>
        <div className="glavniy">
          <a href="/">Главная <MdChevronRight /></a>
          <p>NAMANGAN</p>
        </div>
      </div>

      <div className='GegrafiyaMalumot'>
        <div className='BorederY'>
          <p>ОСНОВНЫЕ   МАКРОЭКОНОМИЧЕСКИЕ   ПОКАЗАТЕЛИ</p>
        </div>
      </div>

      <div className="Geografiy">
        <b>ГЕОГРАФИЯ</b>
        <div className="imgg">
          <img src={Geografiya} alt="" />
        </div>

        <div className="details">
          <div className="detail-block">
            <h2>Центральная Азия</h2>
            <p>Регион</p>
          </div>
          <div className="detail-block">
            <h2>34,04 млн человек</h2>
            <p>Население</p>
          </div>
          <div className="detail-block">
            <h2>448 900 км²</h2>
            <p>Площадь</p>
          </div>
          <div className="detail-block">
            <h2>GMT +5</h2>
            <p>Часовой пояс</p>
          </div>
          <div className="detail-block">
            <h2>+998</h2>
            <p>Телефонный код</p>
          </div>
          <div className="detail-block">
            <h2>Узбекский сум</h2>
            <p>Валюта</p>
          </div>
          <div className="detail-block">
            <h2>.uz</h2>
            <p>Домен верхнего уровня</p>
          </div>
          <div className="detail-block">
            <h2>Правостороннее</h2>
            <p>Движение</p>
          </div>
        </div>
      </div>

      <div className='KlimatContenier'>
        <h2>Климат</h2>
        <p>Континентальный, с жарким летом и прохладной зимой</p>
        <div className='KlimatDetails'>
          <div className='Temperature'>
            <span role='img' aria-label='summer'>☀️</span> 41°C – 45°C и выше (106°F – 113°F) Летом
          </div>
          <div className='Temperature'>
            <span role='img' aria-label='winter'>❄️</span> -8°C – -40°C (18°F – -40°F) Зимой
          </div>
          <div className='Humidity'>
            <span role='img' aria-label='humidity'>💧</span> Влажность воздуха: Невысокая, большая часть страны довольно засушливая
          </div>
        </div>
      </div>

    </>
  )
}

export default Malumotlar
