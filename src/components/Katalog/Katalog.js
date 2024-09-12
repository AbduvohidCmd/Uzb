import React from 'react'
import './Katalog.css'
// import Layout from '../Layout/Layout'
import VokzalImg from "../../Img/KatalogImg/Vokzalimg.jpg"

const Katalog = () => {
	return (
		<div className='KatalogConteiner'>
			<img src={VokzalImg} alt="" />
			<div className='Katalog1'>
				<div className='ReklamaBox'>
					<p>реклама/новости</p>
				</div>
				<div className='ReklamaBox'>
					<p>реклама/новости</p>
				</div>
				<div className='ReklamaBox'>
					<p>реклама/новости</p>
				</div>
			</div>
			<div className='Katalog2'></div>
			<div className='Katalog3'></div>
			{/* <Layout /> */}
		</div>
	)
}

export default Katalog