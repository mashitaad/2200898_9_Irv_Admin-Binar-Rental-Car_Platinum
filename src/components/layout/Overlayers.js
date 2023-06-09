import React, { useState } from 'react';
import './styles/overlayers.css'
import { Button } from 'react-bootstrap';
import logo from '../../assets/icons/logo.png'
import {
    FaUserAlt,
    FaRegChartBar,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Overlayers = ({ children }) => {
    const [showSidenav, setShowSidenav] = useState(false);
    const [showCarSidenav, setShowCarSidenav] = useState(false);
    const [showOrderSidenav, setShowOrderSidenav] = useState(false);
    const [showDashboardSidenav, setShowDashboardSidenav] = useState(false);
    const [activeMenu, setActiveMenu] = useState('');

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    const handleToggleCarSidenav = () => {
        setShowCarSidenav(!showCarSidenav);
        setShowOrderSidenav(false);
        setShowDashboardSidenav(false)
    };

    const handleOrderToggleSidenav = () => {
        setShowOrderSidenav(!showOrderSidenav);
        setShowCarSidenav(false);
        setShowDashboardSidenav(false)
    };
    const handleDashboardToggleSidenav = () => {
        setShowDashboardSidenav(!showDashboardSidenav);
        setShowCarSidenav(false);
        setShowOrderSidenav(false)
    };
    return (
        <div className="overlayers">
            <nav className="navbar nav-ant">
                <div className="container-fluid ant-container">
                    <div className="ant-brand">
                        <img src={logo} alt="brand" className="brand-cat img-fluid" />
                    </div>
                    <div className="d-flex ant-main-head align-items-center justify-content-between">
                        <Button className="btn ant-collapse" type="button" onClick={''}>
                            <i className="fa-solid fa-bars"></i>
                        </Button>
                    </div>
                </div>
            </nav>

            <div className="ant-sidenav" >
                <img src={logo} alt="brand little" className="ant-little-brand img-fluid" />
                <ul className="ant-list-clip">
                    <li>
                        <a href="#" onClick={handleToggleCarSidenav}><i className="fa-solid fa-house"></i> car</a>
                    </li>
                    <li>
                        <a href="#" onClick={handleOrderToggleSidenav}><i className="fa-solid fa-user"></i> order</a>
                    </li>
                    <li>
                        <a href="#" onClick={handleDashboardToggleSidenav}><i className="fa-solid fa-user"></i> Dashboard</a>
                    </li>
                </ul>
            </div>

            <div className="container-fluid">
                <div className="row">
                    {showOrderSidenav ?
                        <>
                            <div className="ant-siderside animate__animated" style={{ display: showOrderSidenav ? 'block' : 'none' }}>
                                <ul className="ant-list-clip">

                                    <li>
                                        <NavLink to={'/admin/order'}>
                                            <li className={`side-menu-item ${activeMenu === 'Order' ? 'active' : ''}`} onClick={() => handleMenuClick('Order')}>
                                                Order
                                            </li>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className={` ${showOrderSidenav ? 'col ant-content' : 'ant-content-hide'}`}>
                                {children}
                            </div>
                        </>

                        : showCarSidenav ?

                            <>
                                <div className="ant-siderside animate__animated" style={{ display: showCarSidenav ? 'block' : 'none' }}>
                                    <ul className="ant-list-clip">
                                        <li>
                                            <NavLink to={'/admin/car/list'}>
                                                <li className={`side-menu-item ${activeMenu === 'List Car' ? 'active' : ''}`} onClick={() => handleMenuClick('List Car')}>
                                                    List Car
                                                </li>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className={` ${showCarSidenav ? 'col ant-content' : 'ant-content-hide'}`}>
                                    {children}
                                </div>
                            </>
                            :
                            <>
                                <div className="ant-siderside animate__animated" style={{ display: showDashboardSidenav ? 'block' : 'none' }}>
                                    <ul className="ant-list-clip">
                                        <li>
                                            <NavLink to={'/'}>
                                                <li className={`side-menu-item ${activeMenu === 'Dashboard' ? 'active' : ''}`} onClick={() => handleMenuClick('Dashboard')}>
                                                    Dashboard
                                                </li>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className={` ${showDashboardSidenav ? 'col ant-content' : 'ant-content-hide'}`}>
                                    {children}
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Overlayers;

