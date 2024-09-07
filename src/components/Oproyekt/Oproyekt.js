import React from 'react';
import './Oproyekt.css';
import OrqaFon from '../../Img/Orqa fon.webp';
import { MdChevronRight } from "react-icons/md";
import Imgg1 from '../../Img/imgg1.jpg';
import Imgg from '../../Img/imgg.jpg';
import { FaTractor, FaTshirt, FaShoePrints, FaCouch, FaTools, FaFlask, FaPlug, FaPills, FaGuitar, FaRoute, FaRegFlag, FaBriefcase } from 'react-icons/fa';

const Oproyekt = () => {

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
        <>
            <div className='Oproyekt'>
                <img src={OrqaFon} alt="" />
                <p>О ПРОЕКТЕ</p>
                <div className="glavniy">
                    <a href="">Главная <MdChevronRight /></a>
                    <p>О ПРОЕКТЕ</p>
                </div>
            </div>

            <div className="project-content">
                <img src={Imgg1} alt="Made in Uzbekistan" className="project-image" />
                <div className="project-text">
                    <p className='TextP'>Бизнес-миссия «Made in Uzbekistan», организатором</p>
                    <p className='TextP1'>которой выступает Министерство инвестиций и внешней</p>
                    <p className='TextP3'>торговли Республики Узбекистан, ежегодно проходит в</p>
                    <p className='TextP4'>городе Ташкент (Республика Узбекистан) и в других</p>
                    <p className='TextP5'>городах и странах.</p>
                    <br />
                    <h3 className='TextH3'>Цель проектаp</h3>
                    <p className='TextP6'>экспортоориентированной продукции узбекских</p>
                    <p className='TextP7'>предприятий, повышение экспортного потенциала</p>
                    <p className='TextP7'>страны, выстраивание устойчивого и долгосрочного</p>
                    <p className='TextP8'>сотрудничества с зарубежными партнерами.</p>
                </div>
            </div>

            <div className="project-content2">
                <div className="project-text">
                    <p className='TextP'>В 2020 году бизнес-миссия «Made in</p>
                    <p className='TextP1'>Uzbekistan» впервые будет проходить в</p>
                    <p className='TextP3'> Российской Федерации в г.Москва и других</p>
                    <p className='TextP4'>крупных индустриальных округах.</p>
                    <br />
                    <p className='TextP5'>В рамках проекта планируется проведение</p>
                    <p className='TextP6'>презентаций экспортного потенциала</p>
                    <p className='TextP7'>отраслей Республики Узбекистан, насыщенная</p>
                    <p className='TextP8'>деловая программа, организация</p>
                    <p className='TextP9'>двусторонних переговоров между</p>
                    <p className='TextP10'>экспортерами и потребителями узбекской</p>
                    <p className='TextP11'>продукции.</p>
                </div>
                <img src={Imgg} alt="Made in Uzbekistan" className="project-image" />
            </div>

            <div className="project-content3">
                <h2>ТЕМАТИЧЕСКИЕ РАЗДЕЛЫ</h2>
                <div className="section-grid">
                    {sections.map((section, index) => (
                        <div key={index} className="section-item">
                            {section.icon}
                            <span>{section.title}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="project-content4">
                <h2 className='project-content4H11'>В рамках деловой программы выставки <br /> будут проходить:</h2>
                <div className="project-text">
                    <p className='TextP'>• Презентации экспортного потенциала отраслей <br /> национальной экономики;</p>
                    <br />
                    <p className='TextP1'>• Показ мод готовой текстильной продукции;</p>
                    <br />
                    <p className='TextP3'> • Демонстрация процесса изготовления продуктов ремесленничества и национальной кухни;</p>
                    <br />
                    <p className='TextP4'>• Переговоры с иностранными компаниями;</p>
                    <br />
                    <p className='TextP5'>• Переговоры с иностранными компаниями;</p>
                    <br />
                    <p className='TextP6'>• Регистрация заключаемых контрактов.</p>
                </div>
            </div>

            <div className="project-content5">
                <div className="project1">
                    <h1 className='project-content4H1'>история</h1>
                    <br />
                    <br />
                    <h2>7 - 9 марта, 2018г.</h2>
                    <br />
                    <h2>29 - 31 марта, 2018г.</h2>
                    <br />
                    <h2>28 - 29 сентября, 2018г.</h2>
                    <br />
                    <h2>28 июня – 4 июля, 2019г</h2>
                    <br />
                    <h2>29 июля – 2 августа, 2019г.</h2>
                </div>

                <div className="project-text">
                    <p className='TextP'>• Презентации экспортного потенциала отраслей национальной экономики;</p>
                    <p className='TextP1'>• Показ мод готовой текстильной продукции;</p>
                    <p className='TextP3'>• Демонстрация процесса изготовления продуктов ремесленничества и национальной кухни;</p>
                    <p className='TextP4'>• Переговоры с иностранными компаниями;</p>
                    <p className='TextP5'>• Регистрация заключаемых контрактов.</p>
                </div>
            </div>

            <div className="project-content6">

            </div>

        </>
    )
}

export default Oproyekt;