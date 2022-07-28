import React from 'react';
import Faqs from '../components/Faqs';
import Reviews from '../components/Reviews';

// import CancellationPolicy from '../components/CancellationPolicy';

export default function About() {
  return (
    <div id='id-about'>
      <Reviews/>
      {/* <CancellationPolicy/> */}
      <Faqs/>
    </div>
  )
}
