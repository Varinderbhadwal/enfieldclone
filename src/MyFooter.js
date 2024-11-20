// src/Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Table from 'react-bootstrap/Table';

import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


const MyFooter = () => {
  return (
   
<div id='footer_container'>
  <div className='row' id='prefooter'>
    <div className='col-4 offset-8'>
    <span>Join the conversation</span>
    <span><FaFacebook></FaFacebook></span>
    <span><FaXTwitter></FaXTwitter> </span>
    <span><FaYoutube></FaYoutube></span>
    <span><FaInstagram></FaInstagram></span>
    <span>
  <FaLinkedinIn></FaLinkedinIn>
    </span>
    </div>
  </div>
  <hr></hr>
<div className='row'>
      <div className='col-12'>
        {/* Table code start */}

        <Table>
     
      <tbody>
        <tr>
          <td><h3>Motorcycles</h3></td>
          <td><h3>Rides & Events</h3></td>
          <td><h3>Support</h3></td>
          <td><h3>About</h3></td>
          <td><h3>News & Media</h3></td>
          <td><h3>Careers</h3></td>
          <td><h3>New World</h3></td>
        </tr>
        <tr>
          <td>Classic 350</td>
          <td>Rides</td>
          <td>Service Centers</td>
          <td>Since 1901</td>
          <td>News</td>
          <td>Life at Royal Enfield</td>
          <td>Royal Enfield TV</td>
        </tr>
        <tr>
          <td>Guerrilla 450</td>
          <td>Rental</td>
          <td>Stores</td>
          <td>About Eicher motors</td>
          <td>Press releases</td>
          <td>Careers at dealership</td>
          <td>Royal enfield app</td>
        </tr>

        <tr>
          <td>Shotgun 650</td>
          <td>Tours</td>
          <td>Owner's manual</td>
          <td></td>
          <td>Media kit</td>
          <td></td>
          <td>Royal Enfield Tripper</td>
        </tr>

        <tr>
          <td>New himalya</td>
          <td></td>
          <td>Contact us</td>
          <td></td>
          <td></td>
          <td></td>
          <td>Royal Enfield Wingman</td>
        </tr>

        <tr>
          <td>Bullet 350</td>
          <td></td>
          <td>Book a Test Rider</td>
          <td></td>
          <td></td>
          <td></td>
          <td>Rotal Enfield Tripper</td>
        </tr>

        <tr>
          <td>Super Meteor 650</td>
          <td></td>
          <td>Make It Yours</td>
          <td></td>
          <td></td>
          <td></td>
          <td>Reown</td>
        </tr>

        <tr>
          <td>Hunter 350</td>
          <td></td>
          <td>Make It Yours</td>
          <td></td>
          <td></td>
          <td></td>
          <td>Goa Garage Cafe</td>
        </tr>

        <tr>
          <td>Scram 411</td>
          <td></td>
          <td>Become a Dealer</td>
          <td></td>
          <td></td>
          <td></td>
          <td>Custom World</td>
        </tr>

        <tr>
          <td>Meteor 350</td>
          <td></td>
          <td>Become a Genuine Parts</td>
          <td></td>
          <td></td>
          <td></td>
          <td>News and Media</td>
        </tr>

        <tr>
          <td>Interceptor 650</td>
          <td></td>
          <td>Distributer</td>
          <td></td>
          <td></td>
          <td></td>
          <td>Since 1901</td>
        </tr>

        <tr>
          <td>Continental GT</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Wallpaper</td>
        </tr>
      </tbody>
    </Table>
      </div>
    </div>
</div>
  );
};

export default MyFooter;
