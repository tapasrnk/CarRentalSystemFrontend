import React from 'react'
import './Slider.css'
export default function Slider() {

  return (
    <>
 <div id="carouselExampleCaptions" className="carousel slide container">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
       
      <img src="https://cdn.wallpapersafari.com/14/84/tsbEgZ.jpg" className="d-block w-100" alt="..." style={{height:"500px"}}/>
     
      <div className="carousel-caption d-none d-md-block">
        <h5>Book your car now!</h5>
        <p>Rent car at cheapest price possible</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://drscdn.500px.org/photo/142386777/m%3D900/v2?sig=4a2db2746cb864cbe2c17e95a2749a81218295c892f7bc719805a4088c30e71c" className="d-block w-100" alt="..." style={{height:"500px"}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Enjoy differnt journeys</h5>
        <p>Spent some time with nature</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://img.sm360.ca/images//page/owen-sound-volkswagen/109815/file/howtotoguan_highlights_family1647867940938.png" className="d-block w-100" alt="..." style={{height:"500px"}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Hava a Happy family journey</h5>
        <p>We want our customers to be happy</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    
    </>
  )
}
