import React, { useEffect, useState } from 'react';
import './styles/sidebar.css'
import { Button, Form, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/icons/logo.png'
import { RxHamburgerMenu } from "react-icons/rx"
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import jwtDecode from "jwt-decode";
import Cookies from 'js-cookie';
import { FiHome } from 'react-icons/fi'
import { BsFillCarFrontFill } from 'react-icons/bs'
import { FaCashRegister } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'

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


  const [cookies] = useCookies(['token']);
  const [user, setUser] = useState('')
  const token = cookies.token

  const navigate = useNavigate()

  const splitEmail = (email) => {
    const atIndex = email.indexOf('@');

    if (atIndex !== -1) {
      const username = email.substring(0, atIndex);
      return username;
    } else {
      throw new Error('Email tidak valid');
    }
  }

  useEffect(() => {

    if (token) {
      const tokenDecode = jwtDecode(token)
      setUser(splitEmail(tokenDecode.email))
    }
  }, [])

  const handdleLogout = () => {
    Cookies.remove('token', { path: '/' })
    navigate('/')
  }
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

            <NavDropdown title={user} id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={handdleLogout}>logout <BiLogOut /></NavDropdown.Item>

            </NavDropdown>
          </div>

        </div>
      </nav>

      <div className="ant-sidenav" >
        <img src={logo} alt="brand little" className="ant-little-brand img-fluid" />
        <ul className="ant-list-clip">
          <li>
            <a href="#" onClick={handleDashboardToggleSidenav}><FiHome size={"20px"} /> Dashboard</a>
          </li>
          <li>
            <a href="#" onClick={handleToggleCarSidenav}><BsFillCarFrontFill size={"20px"} /> car</a>
          </li>
          <li>
            <a href="#" onClick={handleOrderToggleSidenav}><FaCashRegister size={"20px"} /> order</a>
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

                  <NavLink to={'/admin/order'}>
                    <li className={`side-menu-item ${activeMenu === 'Order' ? 'active' : ''}`} onClick={() => handleMenuClick('Order')}>
                      Order
                    </li>
                  </NavLink>

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

                    <p>Cars</p>
                    <NavLink to={'/admin/car/list'}>
                      <li className={`side-menu-item ${activeMenu === 'List Car' ? 'active' : ''}`} onClick={() => handleMenuClick('List Car')}>
                        List Car
                      </li>
                    </NavLink>

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

                    <p>Dashboard</p>
                    <NavLink to={'/admin/dashboard'}>
                      <li className={`side-menu-item ${activeMenu === 'Dashboard' ? 'active' : ''}`} onClick={() => handleMenuClick('Dashboard')}>
                        Dashboard
                      </li>
                    </NavLink>

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
