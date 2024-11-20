import { FaMapLocationDot } from "react-icons/fa6";
import { BsTools } from "react-icons/bs";
import { MdTouchApp } from "react-icons/md";



function Seprator2(){
    return(
        <div id="seprator2_container">
            <div className="row text-center" id="seprator2_icons">
            <div className="col-4">
                <MdTouchApp />
            </div>
            <div className="col-4">
                <FaMapLocationDot />
            </div>
            <div className="col-4">
            <BsTools />
            </div>
            
        </div>

        <div className="row text-center" id="seprator2_text">
            <div className="col-4">
                Book a Test Ride &gt;
            </div>
            <div className="col-4">
                Find a Store &gt;
            </div>
            <div className="col-4">
            Book a Service &gr;
            </div>
            
        </div>
        </div>
    )
}

export default Seprator2;