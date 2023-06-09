import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/dashboard/DashboardPage";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../components/layout/Sidebar";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "../components/layout/Header";
import Mainmenu from "../components/layout/Mainmenu";
import CarlistPage from "../pages/car/CarlistPage";
import AddCarPage from "../pages/car/AddCarPage";
import UpdateCarPage from "../pages/car/UpdateCarPage";
import SignInPage from "../pages/auth/signin/SignInPage";

function IndexRoutes() {

    const [toggle, setToggle] = useState(true);

    const Toggle = () => {
        setToggle(!toggle);
    }


    return (
        <Router>

            <Routes>
                <Route path="/signin" element={<SignInPage />} />
            </Routes>

            {window.location.pathname !== '/signin' && (
                <div className="container-fluid">
                    <div className="row">
                        <div className={`col-2 ${toggle ? "position-fixed" : ""} p-0`}>
                            <Mainmenu />
                        </div>
                        <div className={`col ${toggle ? "offset-1" : ""}`}>
                            <div className="d-flex">
                                {toggle && <Sidebar />}
                                <div className={`flex-grow-1 ${toggle ? "ps-3" : ""}`}>
                                    <Header Toggle={Toggle} />

                                    <div className="admin-main-content">
                                        <Routes>
                                            <Route path="/" element={<DashboardPage />} />
                                            <Route path="/admin/car/list" element={<CarlistPage />} />
                                            <Route path="/admin/add/car" element={<AddCarPage />} />
                                            <Route path="/admin/update/car/:id" element={<UpdateCarPage />} />
                                        </Routes>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
 


        </Router>
    );
}

export default IndexRoutes;
