import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useDispatch } from "react-redux";

export default function IndexPayment() {
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
