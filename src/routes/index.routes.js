import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/dashboard/DashboardPage";
import CarlistPage from "../pages/car/CarlistPage";
import AddCarPage from "../pages/car/AddCarPage";
import UpdateCarPage from "../pages/car/UpdateCarPage";
import SignInPage from "../pages/auth/signin/SignInPage"
import OrderPage from "../pages/order/OrderPage";

function IndexRoutes() {

    return (
        <Router>

         
            <Routes>
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/" element={<DashboardPage />} />
                <Route path="/admin/order" element={<OrderPage />} />
                <Route path="/admin/car/list" element={<CarlistPage />} />
                <Route path="/admin/add/car" element={<AddCarPage />} />
                <Route path="/admin/update/car/:id" element={<UpdateCarPage />} />

            </Routes>


        </Router>
    );
}

export default IndexRoutes;
