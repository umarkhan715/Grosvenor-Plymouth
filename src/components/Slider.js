import zIndex from '@mui/material/styles/zIndex';
import React from 'react'
import { Carousel } from "react-bootstrap";

import img1 from "../images/image1.jpg"
import img2 from "../images/image2.jpg"
import img3 from "../images/image3.jpg"
import img4 from "../images/image4.jpg"
import img5 from "../images/image5.jpg"

export default function Slider() {
    return (
        

            <Carousel style={{
                marginTop:'100px',
                height:'80vh',
                zIndex:'-9999'
            }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-image"
                        src={img1}
                        alt="First slide"
                        style={{
                            height:'90vh'
                        }}
                    />
                    <Carousel.Caption  className="slider-caption">
                        <h3>Room Booking</h3>
                 
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-image"
                        src={img2}
                        alt="Second slide"
                        style={{
                            height:'90vh'
                        }}
                    />

                    <Carousel.Caption  className="slider-caption">
                        <h3>Bar</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-image"
                        src={img3}
                        alt="Third slide"
                        style={{
                            height:'90vh'
                        }}
                    />

                    <Carousel.Caption  className="slider-caption">
                        <h3>Bread & BreakFast</h3>
                      
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-image"
                        src={img4}
                        alt="Third slide"
                        style={{
                            height:'90vh'
                        }}
                    
                    />

                    <Carousel.Caption className="slider-caption">
                        <h3>Places</h3>
                    
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-image"
                        src={img5}
                        alt="Third slide"
                        style={{
                            height:'90vh'
                        }}
                    />
                    

                    <Carousel.Caption className="slider-caption">
                        <h3>Vaccations</h3>
                       
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
      
    )
}
