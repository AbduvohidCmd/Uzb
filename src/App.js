import React from 'react'
import "./App.css"
import Navbar from './components/Navabr/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home"
import Vistavki from './components/ВЫСТАВКИ/Vistavki';
import Malumotlar from './components/Malumotlar/Malumotlar';
import Footer from './components/Footer/Footer'
import Novosti from './components/НОВОСТИ/Novosti';
import Oproyekt from './components/Oproyekt/Oproyekt';


// import TeliminoraImg from './Img/TeliminoraImg/teliminoraImg.jpg'

const App = () => {
  return (
    <div>
      <Navbar />
      < Routes>
        <Route exect path='/' element={<Home />} />
        <Route exect path='/vistavki' element={<Vistavki />} />
        <Route exect path='/Malumotlar' element={<Malumotlar />} />
        <Route exect path='/Novosti' element={<Novosti />} />
        <Route exect path='/Oproyekt' element={<Oproyekt />} />

      </Routes>
      <Footer />

      {/* <img src={TeliminoraImg} alt="" />
      <div className='ImgGrey'></div> */}

    </div>
  )
}

export default App
