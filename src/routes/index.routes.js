import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/dashboard/DashboardPage";
import CarlistPage from "../pages/car/CarlistPage";
import AddCarPage from "../pages/car/AddCarPage";
import UpdateCarPage from "../pages/car/UpdateCarPage";
import SignInPage from "../pages/auth/signin/SignInPage";
import OrderPage from "../pages/order/OrderPage";
import PrivateRoutesAdmin from "../utils/PrivateRoutesAdmin";
import OrderDetailPage from "../pages/order/OrderDetailPage";

function IndexRoutes() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignInPage />} />
                <Route element={<PrivateRoutesAdmin />}>

                    <Route path="/admin/dashboard" element={<DashboardPage />} />
                    <Route path="/admin/order" element={<OrderPage />} />
                    <Route path="/admin/car/list" element={<CarlistPage />} />
                    <Route path="/admin/add/car" element={<AddCarPage />} />
                    <Route path="/admin/update/car/:id" element={<UpdateCarPage />} />
                    <Route path="/admin/order/detail/:id" element={<OrderDetailPage />} />
                </Route>
            </Routes>


        </Router>
    );
}

export default IndexRoutes;
