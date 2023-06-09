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
import SignIn from "../pages/auth/signin/SignIn";
import Overlayers from "../components/layout/Overlayers";

function IndexRoutes() {

    const [toggle, setToggle] = useState(true);

    const Toggle = () => {
        setToggle(!toggle);
    }


    return (
        <Router>

         
            <Routes>
                <Route path="/test" element={<Overlayers />} />
                <Route path="/" element={<DashboardPage />} />
                <Route path="/admin/car/list" element={<CarlistPage />} />
                <Route path="/admin/add/car" element={<AddCarPage />} />
                <Route path="/admin/update/car/:id" element={<UpdateCarPage />} />

            </Routes>


        </Router>
    );
}

export default IndexRoutes;
