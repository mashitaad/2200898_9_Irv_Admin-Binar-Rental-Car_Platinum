import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { adminGetAllOrder, orderSelector } from "../../../features/orderSlice";
import AllpaymentStatus from "./payment-status/AllpaymentStatus";
import ReactPaginate from "react-paginate";

export default function IndexPayment() {
  const dispatch = useDispatch();
  const data = useSelector(orderSelector.selectOrder);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const totalPages = Math.ceil(data?.orders?.length / itemsPerPage);
  const [selectedStatus, setSelectedStatus] = useState("")
  
  const DEFAULT_FILTER ={
    sort: "created_at:desc",
    page: 1,
    pageSize: 100,
  };
  useEffect(() => {
    dispatch(adminGetAllOrder(DEFAULT_FILTER));
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPageData(data?.orders?.slice(startIndex, endIndex));
  }, [data?.orders, currentPage, itemsPerPage,  DEFAULT_FILTER]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };




  return (
    <>
      <Tabs 
      defaultActiveKey="payment-all" 
      id="justify-tab-example" 
      className="mb-3" 
      justify
      onSelect={(key) => setSelectedStatus(key)}>
        <Tab eventKey="payment-all" title="Semua">
          <AllpaymentStatus data={pageData} />
        </Tab>
        <Tab eventKey="payment-pending" title="Belum Bayar"></Tab>
        <Tab eventKey="payment-onprocces" title="Perlu di Proses"></Tab>
        <Tab eventKey="payment-finish" title="Selesai"></Tab>
      </Tabs>
      <div className="container-pagination container">
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
}
