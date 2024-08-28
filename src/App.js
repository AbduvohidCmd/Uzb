import React from 'react'
import "./App.css"
import Navbar from './components/Navabr/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home"
import Vistavki from './components/ВЫСТАВКИ/Vistavki';

// import TeliminoraImg from './Img/TeliminoraImg/teliminoraImg.jpg'

const App = () => {
  return (
    <div>
      <Navbar />
      < Routes>
        <Route exect path='/' element={<Home/>} />
        <Route exect path='/vistavki' element={<Vistavki/>} />

      </Routes>
      {/* <img src={TeliminoraImg} alt="" />
      <div className='ImgGrey'></div> */}

    </div>
  )
}

export default App
