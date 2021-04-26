import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import '../navbar.css'



const Navbar = ()=>{

    return(
        <div className="nav">

        <div className="logo">
            <MenuIcon/>
            <h3>SCRIBD</h3>
        </div>
        <div>
            <button className="btn__sign">Sign up</button>
        </div>
        </div>

    )
}

export default Navbar;