

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
// import { Link } from "react-scroll";
// import Styles from "./navbar.module.css";
import "./styles.css";
// import './pages/loader';
import Navbar from "./components/Navbar";

// import Home from "./sections/Home";
// import OurRooms from "./sections/OurRooms";
// import About from "./sections/About";
// import Ameneties from "./sections/Ameneties";
// import Offers from "./sections/Offers";
// import Discover from "./sections/Discover";
// import Rules from "./sections/Rules";

import 'bootstrap/dist/css/bootstrap.min.css';
import AmenetiesDetail from "./pages/AmenetiesDetail";
import DiscoverPlymouthDetail from './pages/DiscoverPlymouthDetail';
import RoomsDetail from './pages/RoomsDetail';
// import banner from './images/partition.png';
// import Footer from "./sections/Footer";
// const RenderHome = () => {
//   return (
//     <div>
//         <Navbar />
//     </div>
//   )
// }

function App() {



  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/amenetiesandservices" element={<AmenetiesDetail />} />
          <Route path="/discoverplymouth" element={<DiscoverPlymouthDetail />} />
          <Route path="/rooms" element={<RoomsDetail />} />


        </Routes>
      </BrowserRouter>





    </>
  );
}
export default App;