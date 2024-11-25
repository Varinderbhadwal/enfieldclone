import img1900 from './img1900avif';
import img2000 from './img2000jpg';
import img2100 from './img2100jpg';
import img2200 from './img2200jpg';
import img2300 from './img2300jpg';
import img2400 from './img2400avif';
import img2500 from './img2500jpg';
import img2600 from './img2600jpeg';
import img2700 from './img2700jpg';
import img2800 from './img2800jpeg';
import img2900 from './img2900avif';
import img3000 from './img3000jpg';
import img3100 from './img3100jpeg';


function Apparelswear(){
    return(
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
    )

}

export default Apparelswear;