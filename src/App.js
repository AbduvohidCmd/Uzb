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
import Katalog from './components/Katalog/Katalog';
import Agrarniy from './components/Agrarniy/Agrarniy';
import Tovari from './components/Tovari/Tovari';
import Naradno from './components/Narodno/Narodno';
import Elektro from './components/Elektro/Elektro';
import Farm from './components/Farm/Farm';
import Mebal from './components/MebelPage/Mebal';
import Stol from './components/page/Stol/Stol';
import Sarkor from './components/page/Sarkor/Sarkor'
import StolToplam from './components/page/StolToplam/StolToplam';
import MebelStol from './components/page/MebelStol/MebelStol';



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
        <Route exect path='/Katalog' element={<Katalog />} />
        <Route exect path='/Agrarniy' element={<Agrarniy />} />
        <Route exect path='/Tovari' element={<Tovari />} />
        <Route exect path='/Naradno' element={<Naradno />} />
        <Route exect path='/Elektro' element={<Elektro />} />
        <Route exect path='/Farm' element={<Farm />} />
        <Route exect path='/Mebal' element={<Mebal />} />
        <Route path="/stol" element={<Stol/>} />
        <Route path="/sarkor" element={<Sarkor/>} />
        <Route path="/stolToplam" element={<StolToplam/>} />
        <Route path="/mebelStol" element={<MebelStol/>} />

      </Routes>
      <Footer />



    </div>
  )
}

export default App