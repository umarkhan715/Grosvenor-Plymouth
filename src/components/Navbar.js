import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

// import logo from "../images/logo.png"
// import { FaAlignRight } from "react-icons/fa";
import Form from "./Form"


import Home from "../sections/Home";
import OurRooms from "../sections/OurRooms";
import About from "../sections/About";
import Ameneties from "../sections/Ameneties";
import Offers from "../sections/Offers";
import Discover from "../sections/Discover";
import Rules from "../sections/Rules";

import banner from '../images/partition.png';
import Footer from "../sections/Footer";
import Styles from "./navbar.module.css";
import './navbarcontrol.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fontSize } from "@mui/system";


export default function Navbar() {
  const [show, setShow] = useState(false);

  const controlNavbar = () => {
        setShow(!show); 
      }

  return (

    <>
      <div className="form">
        <Form />
      </div>
      
      <div  className={`activeNavbar ${show && 'disableNavbar '}`}>
        
      <header className={Styles.nav}>
      
        <nav className={Styles.nav__container__actions} >
          <ul>
         <div style={{
          marginTop:'-18px',
          position:'fixed'
         }}>
          
          </div>
            <li>
              <Link activeClass={Styles.active} smooth spy to="facilities">
                Facilities
              </Link>
            </li>

            <li>
              <Link activeClass={Styles.active} smooth spy to="rooms">
                Rooms
              </Link>
            </li>

            <li>
              <Link activeClass={Styles.active} smooth spy to="discover">
                Discover
              </Link>
            </li>

            <li>
              <Link activeClass={Styles.active} smooth spy to="rules">
                Rules
              </Link>
            </li>
          </ul>
        </nav>
        
      </header>
      
      </div>
      <button className="Navbutton" onClick={controlNavbar}><i className={`fa fa-bars ${show && 'fa fa-times'}`}></i></button>

      <div style={{
        position: 'relative',
        zIndex: '-1'
      }}>
        <Home />
      </div>

      <div style={{
        position: 'relative',
        zIndex: '-1'
      }} id='facilities'>

        <img className="parttion-image" src={banner} alt="Partition-Image" />
        <Ameneties />
      </div>

      <div style={{
        position: 'relative',
        zIndex: '-1'
      }} id='rooms'>
        <img className="parttion-image" src={banner} alt="Partition-Image" />
        <OurRooms />
        <img className="parttion-image" src={banner} alt="Partition-Image" />
        <Offers />
        <About />
      </div>

      <div style={{
        position: 'relative',
        zIndex: '-1'
      }} id='discover'>
        <img className="parttion-image" src={banner} alt="Partition-Image" />
        <Discover />
      </div>

      <div id='rules'>
        <img className="parttion-image" src={banner} alt="Partition-Image" />
        <Rules />
      </div>

      <Footer />



    </>






  );
}
