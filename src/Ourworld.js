import img3200 from './img3200.jpg';
import img3300 from './img3300.jpeg';
import img3400 from './img3400.jpg';
import img3500 from './img3500.jpg';
import img3600 from './img3600.jpg';
import img3700 from './img3700.jpg';
import img3800 from './img3800.jpg';
import img3900 from './img3900.jpeg';
import img4000 from './img4000.avif';
import img4100 from './img4100.jpg';
import img4200 from './img4200.jpg';



function Ourworld(){
    return(
        <div>
            {/* row 1 */}
            <div className="row">
            <div className="col-4">
                <img src={img3200}></img>
            </div>

            <div className="col-4">
                <img src={img3300}></img>
            </div>

            <div className="col-4">
                <img src={img3400}></img>
            </div>

        </div>

        {/* row 2 */}
            <div className="row">
                <div className='col-4'>
                    <img src={img3500}></img>
                </div>
                <div className='col-4'>
                    <img src={img3600}></img>
                </div>


                <div className='col-4'>
                    <img src={img3700}></img>
                </div>


            </div>

           {/* row 3 */}
                <div className='row'>
                    <div className='col-4'>
                        <img src={img3800}></img>
                    </div>

                    <div className='col-4'>
                    <img src={img3900}></img>
                </div>

                <div className='col-4'>
                    <img src={img4000}></img>
                </div>

            
                </div>

                <div className='row'>
                    <div className='col-4'>
                        <img src={img4100}></img>
                    </div>

                    <div className='col-4'>
                        <img src={img4200}></img>
                    </div>
                </div>
        </div>

    )
}

export default Ourworld;