import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import img1200 from './img1200.jpeg';
import img1300 from './img1300.jpg';
import img1400 from './img1400.jpg';
import img1500 from './img1500.jpg';
import img1600 from './img1600.avif';
import img1700 from './img1700.avif';
import img1800 from './img1800.avif';

import img1900 from './img1900.avif';
import img2000 from './img2000.jpg';
import img2100 from './img2100.jpg';
import img2200 from './img2200.jpeg';
import img2300 from './img2300.jpg';
import img2400 from './img2400.avif';
import img2500 from './img2500.jpg';
import img2600 from './img2600.jpeg';
import img2700 from './img2700.jpg';
import img2800 from './img2800.jpeg';
import img2900 from './img2900.avif';
import img3000 from './img3000.jpg';
import img3100 from './img3100.jpeg';
import Seprator from './Seprator';


function Apparel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
   <div>
     <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={img1200}></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img1300}></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img1400}></img>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={img1500}></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={img1600}></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={img1700}></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={img1800}></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Seprator name='motercycle'></Seprator>

    

    <div className="row">
            <div className="col-4">
                <img src={img1900}></img>
            </div>

            <div className="col-4">
                <img src={img2000}></img>
            </div>

            <div className="col-4">
                <img src={img2100}></img>
            </div>


            <div className='row'>
                <div className='col-4'>
                    <img src={img2200}></img>
                </div>

                <div className='col-4'>
                    <img src={img2300}></img>
                </div>

                <div className='col-4'>
                    <img src={img2400}></img>
                </div>

                <div className='row'>
                    <div className='col-4'>
                        <img src={img2500}></img>
                    </div>

                    <div className='col-4'>
                        <img src={img2600}></img>
                    </div>

                    <div className='col-4'>
                        <img src={img2700}></img>
                    </div>

                    <div className='row'>
                        <div className='col-3'>
                            <img src={img2800}></img>
                        </div>

                        <div className='col-3'>
                            <img src={img2900}></img>
                        </div>

                        <div className='col-3'>
                            <img src={img3000}></img>
                        </div>

                        <div className='col-3'>
                            <img src={img3100}></img>
                        </div>
                    </div>

                </div>

                
                
                
                
                
            </div>

            
        </div>
   </div>
  );
}

export default Apparel;