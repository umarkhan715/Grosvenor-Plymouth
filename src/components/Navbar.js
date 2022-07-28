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
import { fontSize } from "@mui/system";


export default function Navbar() {

  return (

    <div style={{
      position: 'absolute',
      zIndex: '-9999'
    }}>
      <div className="form">
        <Form />
      </div>

        <header className={Styles.nav}>
          <nav className={Styles.nav__container__actions} >
            <ul>
              <li>
                <Link activeClass={Styles.active} smooth spy to="about">
                  Facilities
                </Link>
              </li>

              <li>
                <Link activeClass={Styles.active} smooth spy to="projects">
                  Rooms
                </Link>
              </li>

              <li>
                <Link activeClass={Styles.active} smooth spy to="blog">
                  Discover
                </Link>
              </li>

              <li>
                <Link activeClass={Styles.active} smooth spy to="contact">
                  Rules
                </Link>
              </li>
            </ul>
          </nav>
        </header>


        <Home />
        <img className="parttion-image" src={banner} alt="Partition-Image" />
        <Ameneties />
        <img className="parttion-image" src={banner} alt="Partition-Image" />
        <OurRooms />
        <img className="parttion-image" src={banner} alt="Partition-Image" />
        <Offers />
        <About />
        <img className="parttion-image" src={banner} alt="Partition-Image" />
        <Discover />
        <img className="parttion-image" src={banner} alt="Partition-Image" />
        <Rules />
        <Footer />
    




    </div>




  );
}
