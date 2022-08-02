import React from 'react';
import './reviews.css';

export default function Reviews() {

    const handleExplore = () => {
        console.log('button Clicked!!!');
        const url = '/reviews';
        window.open(url, '_blank');
    }
    return (
        <div style={{
            position:'relative',
            zIndex:'-1'
        }}>
            <h1 className='reviews-heading head-box container'>Reviews</h1>
            <button className='explore-button' onClick={handleExplore}>Explore</button>
            <div className="container-fluid container">
                <div className="row has-text-centered is-multiline">


                    <div className="col-sm-3 testimonial-wrapper">
                        <div className="testimonial">
                            <p className="quote"> "I've been using your cinematics in my montages for ages! Awesome stuff man and thank you!"</p>
                            <p className="attribution">- QuakeV</p>
                        </div>
                    </div>
                    <div className="col-sm-3 testimonial-wrapper">
                        <div className="testimonial">
                            <p className="quote"> "I've been using your cinematics in my montages for ages! Awesome stuff man and thank you!"</p>
                            <p className="attribution">- QuakeV</p>
                        </div>
                    </div>
                    <div className="col-sm-6 reviews-bg1">
                    </div>
                    <div className="col-sm-3 testimonial-wrapper">
                        <div className="testimonial">
                            <p className="quote"> "I've been using your cinematics in my montages for ages! Awesome stuff man and thank you!"</p>
                            <p className="attribution">- QuakeV</p>
                        </div>
                    </div>
                    <div className="col-sm-3 testimonial-wrapper">
                        <div className="testimonial">
                            <p className="quote"> "I've been using your cinematics in my montages for ages! Awesome stuff man and thank you!"</p>
                            <p className="attribution">- QuakeV</p>
                        </div>
                    </div>
                    <div className="col-sm-6 reviews-bg2">
                    </div>


                </div>

            </div>

        </div>
    )
}
