import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import guerrilla from './guerrilla.jpg';
import himalya from './Himalya.jpg';
import royal from './Royal350.jpg';
import continental from './Continental.jpg';
import standard from './Standard.jpg';
import shotgun from './shotgun.jpg';
import Seprator from './Seprator';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img600 from './img600.webp';
import img700 from './img700.avif';
import img800 from './img800.avif';
import img900 from './img900.avif';
import img1000 from './img1000.avif';
import Medialinks from './Medialinks';




function Product() {
  return (
    
   


    
    <div>
      <div>
    <Seprator name="Motorcycles"></Seprator>
  </div>
        <h1 className='text-center my-5'>Our Range of Products</h1>
        <div className='row m-5'>
    <div className='col-4' id='Harley'>
    <Card>
  <Card.Img variant="top" src={guerrilla} />
  <Card.Body>
    <Card.Title>Guerrilla (450)..</Card.Title>
    <Card.Text>
    "In a world of trends, be a classic with Royal Enfield." "My bike is my passport to freedom – a Royal Enfield, that is." "The Enfield thump – it's more than just a sound; it's a heartbeat.".
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
    <div className='col-4' id='himalya'>
    <Card>
  <Card.Img variant="top" src={himalya} />
  <Card.Body>
    <Card.Title>Royal enfield (Himalya.450)..</Card.Title>
    <Card.Text>
    The Royal Enfield Himalayan is an adventure motorcycle that boasts a robust and utilitarian design, well-suited for off-road adventures and challenging terrains. Its tagline “Built for all roads. Built for no roads,”.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
    <div className='col-4' id='enfield'>
    <Card>
  <Card.Img variant="top" src={royal} />
  <Card.Body>
    <Card.Title>Meteor 350..</Card.Title>
    <Card.Text>
    "Ride with pride, ride a Royal Enfield." "Enfield: The bike that turns every road into a story." "Adventure is calling, and my Enfield is ready to answer." "Life is better when you're cruising on a Royal Enfield."
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
</div>

{/* row 2 */}
<div className='row m-5'>
    <div className='col-4' id='Harley'>
    <Card>
  <Card.Img variant="top" src={img900} />
  <Card.Body>
    <Card.Title>Continental-gt- (450)..</Card.Title>
    <Card.Text>
    "In a world of trends, be a classic with Royal Enfield." "My bike is my passport to freedom – a Royal Enfield, that is." "The Enfield thump – it's more than just a sound; it's a heartbeat.".
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
    <div className='col-4' id='himalya'>
    <Card>
  <Card.Img variant="top" src={img1000} />
  <Card.Body>
    <Card.Title>Interceptor-650 (Himalya.450)..</Card.Title>
    <Card.Text>
    The Royal Enfield Himalayan is an adventure motorcycle that boasts a robust and utilitarian design, well-suited for off-road adventures and challenging terrains. Its tagline “Built for all roads. Built for no roads,”.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
    <div className='col-4' id='enfield'>
    <Card>
  <Card.Img variant="top" src={shotgun} />
  <Card.Body>
    <Card.Title>Shotgun 650..</Card.Title>
    <Card.Text>
    "Ride with pride, ride a Royal Enfield." "Enfield: The bike that turns every road into a story." "Adventure is calling, and my Enfield is ready to answer." "Life is better when you're cruising on a Royal Enfield."
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
</div>

<div className='row'>
  <div className='col-4'>
  <Card>
  <Card.Img variant="top" src={img800} />
  <Card.Body>
    <Card.Title>Super Meteor 650..</Card.Title>
    <Card.Text>
    "Ride with pride, ride a Royal Enfield." "Enfield: The bike that turns every road into a story." "Adventure is calling, and my Enfield is ready to answer." "Life is better when you're cruising on a Royal Enfield."
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

  </div>

  <div className='col-4'>
  <Card>
  <Card.Img variant="top" src={img700} />
  <Card.Body>
    <Card.Title>Royal Enfield 350..</Card.Title>
    <Card.Text>
    "Ride with pride, ride a Royal Enfield." "Enfield: The bike that turns every road into a story." "Adventure is calling, and my Enfield is ready to answer." "Life is better when you're cruising on a Royal Enfield."
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

  </div>

  <div className='col-4'>
  <Card>
  <Card.Img variant="top" src={img600} />
  <Card.Body>
    <Card.Title>Classic 350..</Card.Title>
    <Card.Text>
    "Ride with pride, ride a Royal Enfield." "Enfield: The bike that turns every road into a story." "Adventure is calling, and my Enfield is ready to answer." "Life is better when you're cruising on a Royal Enfield."
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

  </div> 
  <div>
    <Seprator name="Book a test ride, Find a store ,Service"></Seprator>
  </div>
  <div>
    <Medialinks></Medialinks>
  </div>


  
</div>
    </div>

    



  );
}


export default Product;