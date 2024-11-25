import Image from 'react-bootstrap/Image';
import royalenfield from './royal-enfield.jpg';
import continental from './Continental.jpg';


function AboutPage(){
    return(
            <div className='container-fluid'>
                <div className="row my-5 aboutpage">
            <div className="col-4">
                <p>The Royal Enfield Classic 350 is a motorcycle with a retro design that features a number of notable features, including:
                
                </p>
                <ul>
                    <li>Engine: The Classic 350 has a 349.34 cc air-cooled engine that produces 20.21 PS of power. </li>
                    <li>Brakes: The Classic 350 has large diameter disc brakes and an anti-locking braking system. </li>
                    <li>Fuel tank: The Classic 350 has a teardrop-shaped fuel tank with a capacity of 13 liters. </li>
                    <li>Seat: The Classic 350 has a wide seat that's designed for long rides. </li>
                    <li>Headlights: The Classic 350 has powerful multi-reflector headlights. </li>
                </ul>
        </div>

        <div className="col-8">
               <Image src={royalenfield} fluid></Image>
        </div>
        </div>

        <div className="row my-5 aboutpage">
            <div className="col-4">
            
            <Image src={continental} fluid  id='bike'></Image>
               
        </div>

        <div className="col-8">
        <p>Café Racer
                The updated Royal Enfield Continental GT 650 takes its inspiration from the 1970s era of British motorcycling, with its cast alloy wheels and blacked-out aesthetic. Alongside its classically-styled, ‘50s and ‘60s-inspired predecessors, it recaptures the spirit of the cafe racer culture of the time and that of our own Continental GT 250. With its sculpted tank, eager attitude and tucked-in riding position, it carries all the hallmarks of a traditional café racer, making it perfect for carving up the back roads or having a ton of fun in the city.
                
                </p>
                <ul>
                    <li>648cc of Fun
The GT 650 showcases Royal Enfield's legendary parallel twin-cylinder engine, backed with an air/oil-cooled parallel twin configuration. The 648cc engine offers 47 horsepower at 7150 RPM and a maximum of 52 Nm of torque at 5250 RPM. A smooth throttle response throughout the rev range ensures sufficient power to make light work of the city traffic or carve up the corners.

. </li>
                    <li>All Black
The new, all-black Royal Enfield Continental GT 650 streamlines the retro café racer with its subtle yet stylish aesthetic. The blacked-out engine and exhaust fuse seamlessly with the machine’s chassis, keeping the spotlight on its tank for a look that is guaranteed to make hearts race and heads turn.. </li>

                  
                </ul>
        </div>
        </div>
            </div>
    )
}

export default AboutPage;