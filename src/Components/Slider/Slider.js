import React from 'react';
import {Carousel} from 'react-bootstrap';
import './Slider.css';
/* import slider1 from 'https://i.ibb.co/nDzymn2/slide1.png'
import slider2 from 'https://i.ibb.co/0ZMfrzj/slide2.png'
import slider3 from 'https://i.ibb.co/Q9jV0H0/slide3.png'
import slider4 from 'https://i.ibb.co/Nycc57b/slide4.png' */

//react-bootstrap carousel
const Slider=() => {
    return (
        <div className='container mb-5 mt-0'>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='https://i.ibb.co/RTHb5c7/slide1.png'
      alt="First slide"
    />
    <Carousel.Caption className='carousel1-text'>
    {/*   <h2 className='carousel1-title'>Go Byond <span id='lab'> Your Limit</span></h2> */}
      {/* <p className='carousel1-p'>Our equipments are very high quality and latest so you will get the best result.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='https://i.ibb.co/Q9jV0H0/slide3.png'
      alt="Second slide"
    />

    <Carousel.Caption className='carousel2-text'>
      {/* <h3 className='carousel2-title'>Unblieveable <span id='discount'>Discount</span>  For Members </h3> */}
      {/* <p className='carousel2-p'>Be our social member and you will get 20-40% discount on every test </p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='https://i.ibb.co/6vYDYRm/slide4.png'
      alt="Third slide"
    />
    <Carousel.Caption className='carousel3-text'>
      {/* <h3 className='carousel3-title'>Your test will be operated by our expert<span id='exam'> doctors </span></h3> */}
      {/* <p className='carousel3-p'>Our doctors directly involve with lab test so that we can assure you best output</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </div>
    );
};

export default Slider;