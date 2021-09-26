import React from "react";
import './textComponent.css';


function MainLogo() {
    return (
      <h1 className="place_1">RESERVE</h1>
    );
}

function MainLogoShadow(){
    return(
        <>
            <MainLogo/>
            <h1 className = "place_2">RESERVE</h1>
        </>
    );
}

export default MainLogoShadow;
