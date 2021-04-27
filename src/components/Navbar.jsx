import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import '../navbar.css'
import scribd from '../assets/x.svg'



const Navbar = ()=>{

    return(
        <div className="nav">

        <div className="logo">
        
            <img src={scribd}/>
        </div>
        <div>
            <button className="btn__sign">Sign up</button>
        </div>
        </div>

    )
}

export default Navbar;