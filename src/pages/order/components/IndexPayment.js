import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { adminDeletOrderById, adminGetAllOrder, adminUpdateOrder, orderSelector } from "../../../features/orderSlice";
import AllpaymentStatus from "./payment-status/AllpaymentStatus";
import ReactPaginate from "react-paginate";
import PendingPaymentStatus from "./payment-status/PendingPaymentStatus";
import OnProcessPaymentStatus from "./payment-status/OnProcessPaymentStatus";
import CompletedPaymentStatus from "./payment-status/CompletedPaymentStatus";
import Swal from "sweetalert2";

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

  const handleDelete = (payload) => {
    Swal.fire({
      title: 'Apakah anda ingin membatalkan Pesanan ini?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'yes'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(adminDeletOrderById(payload))
     
        Swal.fire(
          'dikonfirmasi!',
          'Pesanan Anda Berhasil dibatalkan.',
          'success'
        ).then(() => {
          dispatch(adminGetAllOrder(DEFAULT_FILTER))
        });
      }
    });
  };


  const handleConfirm = (payload) => {
    Swal.fire({
      title: 'Apakah anda ingin mengkonfirmasi Pesanan ini?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'yes'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(adminUpdateOrder({ id: payload, params: { status: 1 } }))
     
        Swal.fire(
          'dibatalkan!',
          'Pesanan Anda Berhasil dikonfirmasi.',
          'success'
        ).then(() => {
          dispatch(adminGetAllOrder(DEFAULT_FILTER))
        });
      }
    });
  };


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
          <AllpaymentStatus data={data} handleDelete = {handleDelete} handleConfirm = {handleConfirm} />
        </Tab>
        <Tab eventKey="payment-pending" title="Belum Bayar">
          <PendingPaymentStatus data={filteredPendingOrder} handleDelete = {handleDelete}/>
        </Tab>
        <Tab eventKey="payemnt-onprocces" title="Perlu Diproses">
          <OnProcessPaymentStatus data = {filteredOnProcessOrder} handleDelete = {handleDelete} handleConfirm = {handleConfirm}/>
        </Tab>
        <Tab eventKey="payment-finish" title="Selesai">
          <CompletedPaymentStatus data = {filteredCompletedOrder}/>
        </Tab>
      </Tabs>
    </div>
  </div>
  );
}
