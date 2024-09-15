import React from 'react'
import './Katalog.css'
import Layout from '../Layout/Layout'
// import boots from '../../Img/KatalogImg/boots.png'

const Katalog = () => {
	return (
		<div className='KatalogConteiner'>
			<div className='Katalog'>
				<p>КАТАЛОГ ПРЕДПРИЯТИЙ УЗБЕКИСТАНА</p>
				<b>Экспортеры и экспортно ориентированные компании региона</b>
			</div>
			<div className='KatalogIcons'>
				<div className='IconsBox'>
					<div className='icons1'>
						<div className='box1'>
							<p>Аграрный сектор и пищевая промышленность</p>
						</div>
						<div className='box2'></div>
						<div className='box3'></div>
						<div className='box4'></div>
					</div>
					<div className='icons2'></div>
					<div className='icons3'></div>
					<div className='icons4'></div>
				</div>
			</div>
			<Layout />
		</div>
	)
}

export default Katalog


