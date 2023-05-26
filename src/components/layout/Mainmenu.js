import React from 'react';
import logo from '../../assets/icons/logo.png';

function Mainmenu() {
  return (
    <div className="sidebar p-2" style={{ backgroundColor: "#0D28A6", height: "100vh", position: "fixed", left: 0, width: "17vh" }}>
      <div className="logo align-items-center"  style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "15px" }}>
        <img src={logo} alt="logo" style={{ width: "34px", height: "34px" }} />
      </div>
      <hr className="text-dark" />
      <div className="">
        <a className="py-2">
          <i className="bi bi-house fs-5 me-2 d-flex align-items-center" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "12px", marginBottom: "2px", color: "#FFFFFF", textDecoration: "none" }}></i>
          <span className='text-center' 
            style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                marginRight: "3px", 
                marginBottom: "20px", 
                marginTop: "5px",
                color: "#FFFFFF",
                fontFamily: "Arial",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "12px",
                lineHeight: "18px",
                textDecoration: "none"
            }}>
                    Dashboard
            </span>
        </a>
        <a className="py-2">
          <i className="bi bi-house fs-5 me-2 d-flex align-items-center" style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            marginRight: "12px", 
            marginBottom: "2px", 
            color: "#FFFFFF", 
            textDecoration: "none" }}></i>
          <span style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            marginRight: "3px", 
            marginTop: "5px", 
            color: "#FFFFFF", 
            fontFamily: "Arial", 
            fontStyle: "normal", 
            fontWeight: 700, 
            fontSize: "12px", 
            lineHeight: "18px", 
            textDecoration: "none" }}>
                Cars
            </span>
        </a>
      </div>
    </div>
  );
}

export default Mainmenu;
