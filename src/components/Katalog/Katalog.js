import React from 'react'
import './Katalog.css'
import Layout from '../Layout/Layout'
import { FaTractor, FaTshirt, FaShoePrints, FaCouch, FaTools, FaFlask, FaPlug, FaPills, FaGuitar, FaRoute, FaRegFlag, FaBriefcase } from 'react-icons/fa';
import Fashion from '../../Img/Fashion.jpg'
import OrqaFon from '../../Img/Orqa fon.webp';
import { MdChevronRight } from "react-icons/md";
// import boots from '../../Img/KatalogImg/boots.png'

const Katalog = () => {

  const sections = [
    { icon: <FaTractor />, title: 'Аграрный сектор и пищевая промышленность' },
    { icon: <FaTshirt />, title: 'Текстильная отрасль' },
    { icon: <FaShoePrints />, title: 'Кожевенно-обувная отрасль' },
    { icon: <FaCouch />, title: 'Мебельная отрасль' },
    { icon: <FaTools />, title: 'Строительные материалы' },
    { icon: <FaFlask />, title: 'Химическая отрасль' },
    { icon: <FaPlug />, title: 'Электротехническая отрасль' },
    { icon: <FaPills />, title: 'Фармацевтическая отрасль' },
    { icon: <FaGuitar />, title: 'Народно-прикладное искусство' },
    { icon: <FaRoute />, title: 'Туризм' },
    { icon: <FaRegFlag />, title: 'Шелковая отрасль' },
    { icon: <FaBriefcase />, title: 'Госсектор, финансы, консалтинг' },
  ];

  return (
    <div className='KatalogConteiner'>

      <div className='Katalog'>
        <img src={OrqaFon} alt="" />
        <p>КАТАЛОГ ПРЕДПРИЯТИЙ УЗБЕКИСТАНА</p>
        <b>Экспортеры и экспортно ориентированные компании региона</b>
        <div className="glavniy1">
          <a href="/">Главная <MdChevronRight /></a>
          <p>KАТАЛОГ</p>
        </div>
      </div>

      <div className="Katalog2">
        <div className="section-grid">
          {sections.map((section, index) => (
            <div key={index} className="section-item">
              {section.icon}
              <span>{section.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="Katalog3">
        <h1>ВСЕ ПРЕДПРИЯТИЯ КАТАЛОГА</h1>
      </div>

      <div className="Katalog4">

        <div className='Katalog4Malumot2'>
          <div className='Img1'>
            <img src={Fashion} alt="" />
          </div>
          <div className='Katalog4Yozuv'>

          </div>
        </div>

        <div className='Katalog4Malumot2'>
          <div className='Img1'>
            <img src={Fashion} alt="" />
          </div>
          <div className='Katalog4Yozuv'>

          </div>
        </div>

        <div className='Katalog4Malumot2'>
          <div className='Img1'>
            <img src={Fashion} alt="" />
          </div>
          <div className='Katalog4Yozuv'>

          </div>
        </div>

        <div className='Katalog4Malumot2'>
          <div className='Img1'>
            <img src={Fashion} alt="" />
          </div>
          <div className='Katalog4Yozuv'>

          </div>
        </div>

      </div>

      <div className="Katalog5">
        <button>Покозать еще</button>
      </div>

      <Layout />

    </div>
  )
}

export default Katalog
