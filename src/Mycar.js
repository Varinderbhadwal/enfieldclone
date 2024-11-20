import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Image from 'react-bootstrap/Image';
import frontend3 from './Frontend3.avif';
import frontend4 from './Frontend4.webp';
import frontend5 from './Frontend5.avif';
import frontpage from './Frontpage.avif';
import frontend2 from './Frontend2.jpg';

function Mycar() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <Image src={frontend3} fluid></Image>
        <Carousel.Caption>
          <h3>When life gets complicated. I ride.</h3>
          <p>Ride big, Ride long, Ride Free.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={frontend4}  fluid></Image>
       
        <Carousel.Caption>
          <h3>Life is like riding a bicycle. To keep your balance, you must keep moving.</h3>
          <p>No plans. No maps. ....</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={frontend5}  fluid></Image>

        <Carousel.Caption>
          <h3>You don't stop riding when you get old; you get old when you stop riding.</h3>
          <p>
          Riding a motorcycle is like flying..
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <Image src={frontpage}  fluid></Image>

        <Carousel.Caption>
          <h3>You don't stop riding when you get old; you get old when you stop riding.</h3>
          <p>
          Riding a motorcycle is like flying..
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <Image src={frontend2}  fluid></Image>

        <Carousel.Caption>
          <h3>You don't stop riding when you get old; you get old when you stop riding.</h3>
          <p>
          Riding a motorcycle is like flying..
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Mycar;