import React from 'react'
import "./Malumotlar.css"
import Geografiya from '../../Img/Malumotlar/Geografiya.jpg'

const Malumotlar = () => {
  return (
    <>
      <div className='MalumotlarConteiner'>
        <h1>WELCOME TO UZBEKISTAN</h1>
      </div>
          <div className='GegrafiyaMalumot'>
            <div className='BorederY'>
              <p>ОСНОВНЫЕ   МАКРОЭКОНОМИЧЕСКИЕ   ПОКАЗАТЕЛИ</p>
            </div>
          </div>
          <div className="Geografiy">

        <div className="imgg">
          <img src={Geografiya} alt="" />
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
