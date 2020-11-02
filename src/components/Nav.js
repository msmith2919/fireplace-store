import React from 'react'
import {Link} from "react-router-dom";

function Nav(){
    return(
        <nav>
            <button><Link to={"/store"}>Store</Link></button>
            <button><Link to={"/cart"}>Cart</Link></button>
            <button><Link to={"/admin"}>Admin</Link></button>
        </nav>
    )
}

export default Nav;