import React from 'react'
import './Carousel.css'
import D1 from '../Assets/D-01_1000x.jpg'
import D2 from '../Assets/D-02_1000x.jpg'
import D3 from '../Assets/D-03_1000x.jpg'
import Catagery from '../Catagery/Catagery';
import Collcation from '../Collcation/Collcation';
import Abhinav  from '../Abhinav/Abhinav';
import Video from '../Video/Videolink';
const Carousel = () => {
    return (

<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={D1} className="d-block w-100" alt='D1'/>
    </div>
    <div className="carousel-item">
      <img src={D2} className="d-block w-100" alt='D2'/>
    </div>
    <div className="carousel-item">
      <img src={D3} className="d-block w-100" alt='D3'/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    <Catagery/>
    <Collcation/>
    <Abhinav/>
    <Video/>
</div>
    )
}

export default Carousel