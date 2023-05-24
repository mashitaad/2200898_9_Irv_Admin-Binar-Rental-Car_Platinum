import React from 'react'
import logo from '../../assets/icons/logo.png'

function Mainmenu() {
  return (
    <div className="bg-white sidebar p-2">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <hr className="text-dark"/>
        <div className="list-group list-group-flush">
            <a className="list-group-item py-2">
                <i className="bi bi-house fs-5 me-2"></i>
                <span className="fs-5">Dashboard</span>
            </a>
            <a className="list-group-item py-2">
                <i className="bi bi-house fs-5 me-2"></i>
                <span className="fs-5">Cars</span>
            </a>
        </div>
    </div>
  )
}

export default Mainmenu;
