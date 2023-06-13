import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { adminGetAllOrder, orderSelector } from "../../../features/orderSlice";
import AllpaymentStatus from "./payment-status/AllpaymentStatus";
import ReactPaginate from "react-paginate";
import PendingPaymentStatus from "./payment-status/PendingPaymentStatus";
import OnProcessPaymentStatus from "./payment-status/OnProcessPaymentStatus";
import CompletedPaymentStatus from "./payment-status/CompletedPaymentStatus";

export default function IndexPayment() {
  const dispatch = useDispatch();
  const data = useSelector(orderSelector.selectOrder);
  const filteredPendingOrder = useSelector(orderSelector.selectPendingOrder);
  const filteredOnProcessOrder = useSelector(orderSelector.selectOnProcessOrder);
  const filteredCompletedOrder = useSelector(orderSelector.selectCompleted);


  const DEFAULT_FILTER = {
    sort: "created_at:desc",
    page: 1,
    pageSize: 100,
  };
  
  useEffect(() => {
    dispatch(adminGetAllOrder(DEFAULT_FILTER));
  }, [dispatch]);


  return (
    <div className="container">
    <div>
      <Tabs
        defaultActiveKey="payment-all"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="payment-all" title="Semua">
          <AllpaymentStatus data={data} />
        </Tab>
        <Tab eventKey="payment-pending" title="Belum Bayar">
          <PendingPaymentStatus data={filteredPendingOrder} />
        </Tab>
        <Tab eventKey="payemnt-onprocces" title="Perlu Diproses">
          <OnProcessPaymentStatus data = {filteredOnProcessOrder}/>
        </Tab>
        <Tab eventKey="payment-finish" title="Selesai">
          <CompletedPaymentStatus data = {filteredCompletedOrder}/>
        </Tab>
      </Tabs>
    </div>
  </div>
  );
}
