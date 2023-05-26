import React from "react";
import Nav from "./Nav";

function Header({Toggle}){
    return(
        <div>
            <Nav Toggle={Toggle}/>
        </div>
    )
}

export default Header;