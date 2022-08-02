import React from 'react';
import Faqs from '../components/Faqs';
import Reviews from '../components/Reviews';

// import CancellationPolicy from '../components/CancellationPolicy';

export default function About() {
  return (
    <div style={{
      position:'relative',
      zIndex:'-100'
    }}>
      <Reviews/>
      {/* <CancellationPolicy/> */}
      <Faqs/>
    </div>
  )
}
