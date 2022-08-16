import React from 'react'
import './Gallery.css'

export default function Gallery() {


    return (
        <>


            <div className="row">
                <div className="main-image">
                    <img src="https://www.designcurial.com/Uploads/NewsArticle/4398574/main.jpg" style={{ width: "60%", borderRadius:'0px 30px 30px 0px' }} onClick={openClick} className="hover-shadow cursor" />
                </div>
            </div>

            <div id="myModal" className="modal">
                <span className="close cursor" onClick={closeModal}>&times;</span>
                <div className="modal-content">

                    <div className="mySlides">
                        <div className="numbertext">1 / 4</div>
                        <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" style={{ width: "100%" }} />
                    </div>

                    <div className="mySlides">
                        <div className="numbertext">2 / 4</div>
                        <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" style={{ width: "100%" }} />
                    </div>

                    <div className="mySlides">
                        <div className="numbertext">3 / 4</div>
                        <img src="https://www.w3schools.com/howto/img_mountains_wide.jpg" style={{ width: "100%" }} />
                    </div>

                    <div className="mySlides">
                        <div className="numbertext">4 / 4</div>
                        <img src="https://www.w3schools.com/howto/img_lights_wide.jpg" style={{ width: "100%" }} />
                    </div>

                    <a className="prev" onClick={()=>plusSlides(-1)}>&#10094;</a>
                    <a className="next" onClick={()=>plusSlides(1)}>&#10095;</a>

                    <div className="caption-container">
                        <p id="caption"></p>
                    </div>

                    
                    <div className='container-fluid'>
                        <div className='row'>
                        <div className="column ">
                        <img className="demo cursor" src="https://www.w3schools.com/howto/img_nature_wide.jpg" style={{ width: "100%" }} onClick={currentSlide(1)} alt="Nature and sunrise" />
                    </div>
                    <div className="column ">
                        <img className="demo cursor" src="https://www.w3schools.com/howto/img_snow_wide.jpg" style={{ width: "100%" }} onClick={currentSlide(2)} alt="Snow" />
                    </div>
                    <div className="column ">
                        <img className="demo cursor" src="https://www.w3schools.com/howto/img_mountains_wide.jpg" style={{ width: "100%" }} onClick={currentSlide(3)} alt="Mountains and fjords" />
                    </div>
                    <div className="column ">
                        <img className="demo cursor" src="https://www.w3schools.com/howto/img_lights_wide.jpg" style={{ width: "100%" }} onClick={currentSlide(4)} alt="Northern Lights" />
                    </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
    function openClick()
    {
        openModal();
        currentSlide(1);

    }
    function openModal() {
        if (document.getElementById("myModal")) {
            document.getElementById("myModal").style.display = "block";
            currentSlide(1);
        }
    }

    function closeModal() {
        if (document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
    }
    }

    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
        console.log("slide moved by", slideIndex);
        
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
        console.log('current Slide', slideIndex)
    }

    function showSlides(n) {
        if (
            document.getElementsByClassName("mySlides") &&
            document.getElementsByClassName("demo") && document.getElementById("caption")
          ){
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        captionText.innerHTML = dots[slideIndex + 1].alt;
    }
    }
}
