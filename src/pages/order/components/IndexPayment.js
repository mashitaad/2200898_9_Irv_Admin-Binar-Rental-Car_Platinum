import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { adminGetAllOrder, orderSelector } from "../../../features/orderSlice";
import { admingetAllCars, carSelectors } from "../../../features/carSlice";
import AllpaymentStatus from "./payment-status/AllpaymentStatus";

export default function IndexPayment() {
    const dispacth = useDispatch()
    const data = useSelector(orderSelector.selectOrder)
    const [filter, setFilter] = useState({
        sort: 'created_at:desc',
        page: 1,
        pageSize: 100,
    })


    useEffect(() => {
        dispacth(adminGetAllOrder(filter))
    }, [])

  return (
    <>
          <Tabs
            defaultActiveKey="payment-all"
            id="justify-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="payment-all" title="Semua">
              <AllpaymentStatus data = {data}  />
              </Tab>
            <Tab eventKey="payment-pending" title="Belum Bayar">

            </Tab>
            <Tab eventKey="payemnt-onprocces" title="Perlu di Proses">
      
            </Tab>
            <Tab eventKey="payment-finish" title="Selesai">
      
            </Tab>
          </Tabs>
        
    
    </>
  );
}
