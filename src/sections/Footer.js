import React from 'react'
import { useNavigate } from "react-router-dom";
import './Footer.css'

export default function Footer() {
    let navigate = useNavigate();


    function handleHome(event) {
        navigate("/", { replace: true });
    }
    function handleFacilities(event) {
        navigate("/amenetiesandservices", { replace: true });
    }
    function handleRooms(event) {
        navigate("/rooms", { replace: true });
    }
    function handleDiscover(event) {
        navigate("/discoverplymouth", { replace: true });
      }
      function handleReviews(event) {
        navigate("../success", { replace: true });
      }
    return (
        <div>


            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3>Company<span>logo</span></h3>

                    <p className="footer-links">
                        <button className="m-2" onClick={handleHome}>Home</button>

                        <button className="m-2" onClick={handleFacilities}>Facilities</button>

                        <button className="m-2" onClick={handleRooms}>Rooms</button>

                        <button className="m-2" onClick={handleDiscover}>Discover</button>

                        <button className="m-2" onClick={handleReviews}>Reviews</button>


                    </p>

                    <p className="footer-company-name">Grosvenor © 2022</p>
                </div>

                <div className="footer-center">

                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>7-11 Elliot St,</span> Plymouth PL1 2PP, United Kingdom</p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p> +44 1752 260411</p>
                    </div>

                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:support@company.com"> info@grosvenor-plymouth.com</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About the company</span>
                        the Grosvenor Plymouth is the perfect residence for a wide variety of visitors. Whether for work, study, a holiday, visiting family or simply a well earned break, the personal touch and comforts of the hotel will certainly ensure an enjoyable stay.
                    </p>

                    <div className="footer-icons">

                        <a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
                        <a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a>
                        <a href="https://www.linkedin.com"><i className="fa fa-linkedin"></i></a>
                        <a href="https://www.github.com"><i className="fa fa-github"></i></a>

                    </div>

                </div>

            </footer>
        </div>
    )
}
