import React from "react";
// import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
// import Services from "../components/Services";
import Slider from "../components/Slider";
// import { Description } from "@mui/icons-material";
// import Description from '../components/Description'
import banner from '../images/partition.png'



export default function Home() {
  return (
    <>
    
      <Slider/>
      <div>
      <img className="parttion-image" src={banner} alt="Partition-Image"/>
      </div>
    <React.Fragment>
      <Hero>
        <Banner
          title="grosvenor-plymouth"
          subtitle="Simplicity with Elegance at the heart of Britain's Ocean City"
        >
        </Banner>
      </Hero>

      {/* <Services /> */}
      {/* <Description/> */}
    </React.Fragment>
    </>
  );
}

// export default Home;
