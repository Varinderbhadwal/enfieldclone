import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Navbtn from './Navbtn';
import logo from './logo.svg';

function Mynav() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <img src={logo} id='logo'></img>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Navbtn link='/' name='Home'></Navbtn>
            <Navbtn link='/about_project' name='About Project'></Navbtn>
            {/* <Navbtn link='/about' name='About'></Navbtn> */}
            {/* <Navbtn link='/contact' name='Contact'></Navbtn> */}
            <Navbtn link='/ourworld' name='Our World'></Navbtn>
            <Navbtn link='/login' name='Service'></Navbtn>
            <Navbtn link='/product' name='Motorcycles'></Navbtn>
            <Navbtn link='/apparel' name='Apparel'></Navbtn>
            <Navbtn link='/support' name='Support'></Navbtn>
            <Navbtn link='/locateus' name='Locate us'></Navbtn>
            <Navbtn link='/Ride2' name='Ride2'></Navbtn>
            
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Mynav;