import React from 'react';
import "../tend.css"

const LinkBox = (props)=>{
    return(
        <div className="links">
          <p>{props.name}</p>
          <a href=""><p>{props.link}</p></a>
        </div>
    )
}
export default LinkBox;