import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AdminGetAllOrder, orderSelector } from "../../../features/orderSlice";

export default function IndexPayment() {
    const dispacth = useDispatch()
    const data = useSelector(orderSelector.selectOrder)
    const [filter, setFilter] = useState({
        sort: 'created_at:desc',
        page: 1,
        pageSize: 10,
    })


    useEffect(() => {
        dispacth(AdminGetAllOrder(filter))
    }, [])

    console.log(data)

  return (
    <>
          <Tabs
            defaultActiveKey="payment-all"
            id="justify-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="payment-all" title="Semua">
      
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
