import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';
import { ReactComponent as LocationIcon } from '../../Img/svg/location-information-4-svgrepo-com.svg';
import { ReactComponent as TruckIcon } from '../../Img/svg/truck-weight-max-loading-svgrepo-com (1).svg';
import { ReactComponent as SearchIcon } from '../../Img/svg/search-map-svgrepo-com.svg';
import Vokzal from "../../Img/BannerImg/Vokzalimg.jpg";

const Banner = () => {
    const navigate = useNavigate();

    const handleCatalogClick = () => {
        navigate('/Katalog'); 
    };

    return (
        <div className='BannerConteiner'>
            <img src={Vokzal} alt="" />
            <div className='BannerBtn'>
                <div className='BtnYozuv'>
                    <p>РАСШИРЯЕМ ГЕОГРАФИЮ БИЗНЕСА УЗБЕКИСТАНА</p>
                </div>
                <button onClick={handleCatalogClick}>КАТАЛОГ ПРЕДПРИЯТИЙ</button>
            </div>
            <div className='BannerIcons'>
                <div className='Box'></div>
                <div className='Icons1'>
                    <div className='Svg1'>
                        <SearchIcon width="40" height="40" />
                    </div>
                    <div className='Yozuv'>
                        <p>Поиск партнеров</p>
                    </div>
                </div>
                <div className='Icons2'>
                    <div className='Svg2'>
                        <TruckIcon width="40" height="40" />
                    </div>
                    <div className='Yozuv'>
                        <p>Логистика из/в Узбекистан</p>
                    </div>
                </div>
                <div className='Icons3'>
                    <div className='Svg3'>
                        <LocationIcon width="40" height="40" />
                    </div>
                    <div className='Yozuv'>
                        <p>Выставки и мероприятия</p>
                    </div>
                </div>
                <div className='Icons4'>
                    <div className='Svg4'>
                        <LocationIcon width="40" height="40" />
                    </div>
                    <div className='Yozuv'>
                        <p>Как работать c Узбекистаном</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
