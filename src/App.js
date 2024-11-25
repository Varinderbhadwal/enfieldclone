import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mycar from './Mycar';
import Button from 'react-bootstrap/Button';
import Mynav from './Mynav';
import About from './About';
import Location from './Location';
import MyFooter from './MyFooter'; 
// import Contact from './Contact'; 
import Register from './Register';
import Login from './Login';
import Product from './Product';
import Ourworld from './Ourworld';
import Support from './Support';
import Locateus from './Locateus';
import Ride2 from './Ride2';

// Diffrent pages
import AboutPage from './AboutPage';
import VideoHead from './VideoHead';
import Seprator from './Seprator';
import Media from './Media';  
import Guerrilla from './guerrilla';
import Stay from './Stay';
import Adventure from './Adventure';
import Adventure400 from './Adventure400';
import Adventure500 from './Adventure500';
import Apparel from './Apparel';
import Aboutweb from './Aboutweb';

import Seprator2 from './Seprator2';



function Home(){
  return(
    <div>
     <VideoHead></VideoHead>
    <Mycar></Mycar> 
    <Seprator name="News and Media"></Seprator>
    <Media></Media>
    <Seprator name="Motorcycles"></Seprator>
    <Guerrilla></Guerrilla>
    <Seprator name="BIKES"></Seprator>
    <Stay></Stay>
    <Seprator name="rides"></Seprator>
    <Adventure></Adventure>
    <Seprator name="accesories"></Seprator>
    <Adventure400></Adventure400>
    <Seprator name="helmet"></Seprator>
    <Adventure500></Adventure500>
    {/* <About></About> */}
    {/* <Location></Location> */}
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Router>
     <Mynav></Mynav>
     {/* <MyFooter></MyFooter> */}
     
     

      {/* <nav>
      <Link to="/"><Button variant='outline-danger' className='m-2'>Home</Button></Link>
      <Link to="/about"><Button variant='outline-info' className='m-2'>About</Button></Link>
      <Link to="/contact"><Button variant='outline-warning' className='m-2'>Contact</Button></Link>

    </nav> */}

   
     


      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/ourworld" element={<Ourworld />} />
        <Route path="/about_project" element={<Aboutweb />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/support" element={<Support />} />
        <Route path="/apparel" element={<Apparel  />} />
        <Route path="/Ride2" element={<Ride2/>} />
       
        

        
        <Route path="/support" element={<Support />} />
        
        <Route path="/locateus" element={<Locateus />} />
        
      </Routes>

        <Seprator2></Seprator2>
    <MyFooter></MyFooter>

    <footer>Copyright 2024 &copy; Varinder</footer>
    

      
    </Router>
    </div>
  );
}

export default App;
