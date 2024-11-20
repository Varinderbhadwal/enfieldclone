import img4300 from './img4300.jpg';
import img4400 from './img4400.jpg';
import img4500 from './img4500.jpg';
import img4600 from './img4600.jpg';
import img4700 from './img4700.jpg';
import img4800 from './img4800.jpg';
import img4900 from './img4900.jpg';



function Support(){
    return(
        <div className="row">
            <div className="col-3">
                <img src={img4300}></img>
            </div>

            <div className="col-3">
                <img src={img4400}></img>
            </div>

            <div className="col-3">
                <img src={img4500}></img>
            </div>

            <div className="col-3">
                <img src={img4600}></img>
            </div>


            <div className='row'>
                <div className='col-4'>
                    <img src={img4700}></img>
                </div>

                <div className='col-4'>
                    <img src={img4800}></img>
                </div>

                <div className='col-4'>
                    <img src={img4900}></img>
                </div>
            </div>
        </div>
    )
}

export default Support;