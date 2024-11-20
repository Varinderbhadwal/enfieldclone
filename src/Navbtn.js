import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function Navbtn(props){
    return(
        <Link to={props.link}><Button variant='outline-light' className='m-2'>{props.name}</Button></Link>
    )
}

export default Navbtn;