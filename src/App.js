import React from 'react'
import "./App.css"
import Navbar from './components/Navabr/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home"
import Vistavki from './components/ВЫСТАВКИ/Vistavki';
import Malumotlar from './components/Malumotlar/Malumotlar';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import Page3 from './components/Page3/Page3';
import Novosti from './components/НОВОСТИ/Novosti';

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
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />

      </Routes>
      {/* <img src={TeliminoraImg} alt="" />
      <div className='ImgGrey'></div> */}

    </div>
  )
}

export default App
