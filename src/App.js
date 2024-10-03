import React from 'react';
import "./App.css";
import Navbar from './components/Navabr/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import Vistavki from './components/ВЫСТАВКИ/Vistavki';
import Malumotlar from './components/Malumotlar/Malumotlar';
import Footer from './components/Footer/Footer';
import Novosti from './components/НОВОСТИ/Novosti';
import Katalog from './components/Katalog/Katalog';
import Mebal from './components/MebelPage/Mebal';
import Agrarniy from './components/Agrarniy/Agrarniy';
import Tovari from './components/Tovari/Tovari';
import Oproyekt from './components/Oproyekt/Oproyekt';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vistavki" element={<Vistavki />} />
        <Route path="/malumotlar" element={<Malumotlar />} />
        <Route path="/novosti" element={<Novosti />} />
        <Route path="/Oproyekt" element={<Oproyekt/>} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/Agrarniy" element={<Agrarniy/>} />
        <Route path="/Tovari" element={<Tovari/>} />

        {/* Mebel sahifasi */}
        <Route path="/mebel" element={<Mebal />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
