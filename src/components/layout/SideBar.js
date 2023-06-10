import React, { useState } from 'react';
import './styles/sidebar.css'
import { Button, Form, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/icons/logo.png'
import {
  FaUserAlt,
  FaRegChartBar,
} from "react-icons/fa";

import { RxHamburgerMenu } from "react-icons/rx"
import { Link, NavLink } from "react-router-dom";

const SideBar = ({ children }) => {
  const [showCarSidenav, setShowCarSidenav] = useState(false);
  const [showOrderSidenav, setShowOrderSidenav] = useState(false);
  const [showDashboardSidenav, setShowDashboardSidenav] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const handleShowSidenav = () => {
    if (showCarSidenav) {
      setShowCarSidenav(!showCarSidenav);
      setShowOrderSidenav(false);
      setShowDashboardSidenav(false)
    }
    if (showDashboardSidenav) {
      setShowDashboardSidenav(!showDashboardSidenav);
      setShowCarSidenav(false);
      setShowOrderSidenav(false)
    }
    if (showOrderSidenav) {
      setShowOrderSidenav(!showOrderSidenav);
      setShowCarSidenav(false);
      setShowDashboardSidenav(false)
    }
  }

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
            <RxHamburgerMenu
              size={"35px"}
              style={{ cursor: "pointer" }}
              onClick={handleShowSidenav}
            />
          </div>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>


          <div className='dropdown-admin'>

            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </div>

        </div>
      </nav>

      <div className="ant-sidenav" >
        <img src={logo} alt="brand little" className="ant-little-brand img-fluid" />
        <ul className="ant-list-clip">
          <li>
            <a href="#" onClick={handleDashboardToggleSidenav}><i className="fa-solid fa-user"></i> Dashboard</a>
          </li>
          <li>
            <a href="#" onClick={handleToggleCarSidenav}><i className="fa-solid fa-house"></i> car</a>
          </li>
          <li>
            <a href="#" onClick={handleOrderToggleSidenav}><i className="fa-solid fa-user"></i> order</a>
          </li>
        </ul>
      </div>

      <div className="container-fluid">
        <div className="row">
          {showOrderSidenav ?
            <>
              <div className="ant-siderside animate__animated" style={{ display: showOrderSidenav ? 'block' : 'none', width: showOrderSidenav ? '200px' : 'auto' }}>
                <ul className="ant-list-clip">
                  <p>Order</p>
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
                <div className="ant-siderside animate__animated" style={{ display: showCarSidenav ? 'block' : 'none', width: showCarSidenav ? '200px' : 'auto' }}>
                  <ul className="ant-list-clip">
                    <li>
                      <p>Cars</p>
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
                <div className="ant-siderside animate__animated" style={{ display: showDashboardSidenav ? 'block' : 'none', width: showDashboardSidenav ? '200px' : 'auto' }}>
                  <ul className="ant-list-clip">
                    <li>
                      <p>Dashboard</p>
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

export default SideBar;
