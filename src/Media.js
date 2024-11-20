import img20 from './img20.avif';
import img10 from './img10.jpg';
import img30 from './img30.avif';
import img40 from './img40.avif';

function Media(){
    return(
        <div className="row">
            <div className='col-3' id='img10'>
                <img src={img10}></img>
            </div>
            <div className='col-3' id='img30'>
                <img src={img30}></img>
            </div>
            <div className='col-3' id='img40'>
                <img src={img40}></img>
            </div>
            <div className='col-3' id='img20'>
                <img src={img20}></img>
            </div>
        </div>
    )
}

export default Media;