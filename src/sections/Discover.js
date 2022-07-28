import React from 'react'
import './discover.css'

export default function Discover() {


  const handleExplore = () => {
    const url = '/discoverplymouth'
    window.open(url, '_blank');
  }
  return (
    // <div>
      <div className='container-fluid' id="blog">
        <div className='row discover-main'>
            <div className='col-12 discoverd-bg'>
              <div className='col-6 discover-content ml-5 pl-4'>
                <h1>Discover Plymouth
                </h1>
                <button className='discover-button' onClick={handleExplore}>Explore</button>
              </div>
            </div>
        </div>
      </div>
    // </div>
  )
}
