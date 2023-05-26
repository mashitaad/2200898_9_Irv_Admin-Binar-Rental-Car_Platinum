import React from "react";
import './styles/sidebar.css'
import logo from '../../assets/icons/logo.png'

function Sidebar(){
    return(
        <>
        <div className="bg-white sidebar p-2">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <hr className="text-dark"/>
            <div className="list-group list-group-flush">
                <a className="list-group-item py-2">
                    <span>Dashboard</span>
                </a>
                <a className="list-group-item py-2">
                    <span>Cars</span>
                </a>
            </div>
        </div>
       
        </>
    )
}

export default Sidebar