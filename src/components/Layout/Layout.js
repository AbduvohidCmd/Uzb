// import React, { useState } from 'react';
// import './Layout.css';
// import { HiBars3 } from "react-icons/hi2";
// import { LiaTimesSolid } from "react-icons/lia";
// import { Link } from 'react-router-dom'; // React Router'dan Link import qilyapmiz

// const Layout = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleBox = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className='LayoutContainer'>
//             <div className='Icons' onClick={toggleBox}>
//                 {isOpen ? <LiaTimesSolid /> : <HiBars3 />}
//             </div>
//             {isOpen && <div className='Overlay' onClick={toggleBox} />}
//             <div className={`Sidebar ${isOpen ? 'open' : ''}`}>
//                 <h1>В начало</h1>
//                 <p>Аграрный сектор и пищевая промышленность</p>
//                 {/* <p>Текстильная</p>
//                 <p>Кожевенно-обувная</p> */}
//                 <Link to="/mebel" onClick={toggleBox}>Мебельная</Link> {/* Link orqali sahifaga o'tamiz */}
//                 <p>Строительные материалы</p>
//                 <p>Электротехническая</p>
//                 <p>Фармацевтическая</p>
//                 <p>Народно-прикладное искусство</p>
//                 <p>Туризм</p>
//                 <p>Шелковая отрасль</p>
//                 <p>Госсектор, финансы, консалтинг</p>
//                 <p>Химическая</p>
//                 <p>Виноградарство</p>
//                 <p>Автомобиле- и машиностроительная отрасли</p>
//                 <p>Товары народного потребления</p>
//             </div>
//         </div>
//     );
// };

// export default Layout;


// ---------------------------------------------------------------------------------


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Layout.css';
import { HiBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleBox = () => {
        setIsOpen(!isOpen);
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className='LayoutContainer'>
            <div className='Icons' onClick={toggleBox}>
                {isOpen ? <LiaTimesSolid /> : <HiBars3 />}
            </div>
            {isOpen && <div className='Overlay' onClick={toggleBox} />}
            <div className={`Sidebar ${isOpen ? 'open' : ''}`}>
                <h1>В начало</h1>
                <p onClick={() => handleNavigation('/Agrarniy')}>Аграрный сектор и пищевая промышленность</p>
                <p onClick={() => handleNavigation('/mebel')}>Мебельная</p>
                <p onClick={() => handleNavigation('/stroitelniye-materiali')}>Строительные материалы</p>
                <p onClick={() => handleNavigation('/elektrotehnicheskaya')}>Электротехническая</p>
                <p onClick={() => handleNavigation('/farmatsevticheskaya')}>Фармацевтическая</p>
                <p onClick={() => handleNavigation('/narodno-prikladnoe-iskusstvo')}>Народно-прикладное искусство</p>
                <p onClick={() => handleNavigation('/turizm')}>Туризм</p>
                <p onClick={() => handleNavigation('/shelkovaya-otrasl')}>Шелковая отрасль</p>
                <p onClick={() => handleNavigation('/gossektor')}>Госсектор, финансы, консалтинг</p>
                <p onClick={() => handleNavigation('/khimicheskaya')}>Химическая</p>
                <p onClick={() => handleNavigation('/vinogradarstvo')}>Виноградарство</p>
                <p onClick={() => handleNavigation('/avtomobile-i-mashinostroitelniye')}>Автомобиле- и машиностроительная отрасли</p>
                <p onClick={() => handleNavigation('/Tovari')}>Товары народного потребления</p>
            </div>
        </div>
    );
};

export default Layout;

