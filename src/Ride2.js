import img1 from './img2000.jpg';
import Image from 'react-bootstrap/Image';

import himalya from './Himalya.jpg';
import royal from './Royal350.jpg';
import continental from './Continental.jpg';
import standard from './Standard.jpg';
import shotgun from './shotgun.jpg';
import Seprator from './Seprator';
import img600 from './img600.webp';
import img700 from './img700.avif';
import img800 from './img800.avif';
import img900 from './img900.avif';
import img1000 from './img1000.avif';
import Medialinks from './Medialinks';
import guerrilla from './guerrilla.jpg';


function Ride2(){
    return(
    <div id='ride_container'>
         <div className="row">
{/* // main row */}
  <div className="col-3">
    {/* //put side column in this */}
    <ul>
        <li>Book a Test Ride</li>
        <li>Configure NowFinance</li>
        <li>Find a Dealer</li>
        <li>Find a Service Centre</li>
        <li>Owner's Manual</li>
        <li>Quick Start Guide</li>
    </ul>
  </div>
  
  <div className="col-9">
    {/* // put cards rows in this */}
    {/* //row 1 */}
    <div className="row">
      <div className="col-4 imgcol">
        <Image src={guerrilla} fluid></Image>
        <p className='imginfo'>Art of Motorcycling <br></br><button>Know More &gt;</button></p>
      </div>
      <div className="col-4 imgcol">
      <Image src={himalya} fluid></Image>
      <p className='imginfo'>Reown <br></br><button>Know More &gt;</button></p>

      </div>
      <div className="col-4">
      <Image src={royal} fluid></Image>
      </div>
    </div>
    
    {/* //row 2 */}
    <div className="row">
      <div className="col-4">
        <Image src={img800} fluid></Image>
      </div>
      <div className="col-4">
      <Image src={img1000} fluid></Image>
      </div>
      <div className="col-4">
      <Image src={img900} fluid></Image>
      </div>
    </div>
    
    {/* //row 3 */}
    <div className="row">
      <div className="col-4">
        <Image src={shotgun} fluid></Image>
      </div>
      <div className="col-4">
      <Image src={img700} fluid></Image>
      </div>
      <div className="col-4">
      <Image src={img600} fluid></Image>
      </div>
    </div>
    
    {/* //row 4 */}
    <div className="row">
      <div className="col-4">
        {/* <Image src={img1} fluid></Image> */}
      </div>
      <div className="col-4">
      {/* <Image src={img1} fluid></Image> */}
      </div>
      <div className="col-4">
      {/* <Image src={img1} fluid></Image> */}
      </div>
    </div>
  </div>
</div>
    </div>
    )
}

export default Ride2;