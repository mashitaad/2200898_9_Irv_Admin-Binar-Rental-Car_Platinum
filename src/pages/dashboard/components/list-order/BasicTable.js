
import React, { useCallback, useEffect, useState } from "react"
import { Col, Form, Pagination, Row, Table } from "react-bootstrap"
import { usePagination, useSortBy, useTable } from "react-table"
import { FaCaretUp, FaCaretDown } from "react-icons/fa"
import '../../styles/basictable.css'
const BasicTable = ({
  columns,
  data,
  fetchData,
  loading,
  totalPage,
  totalData,
}) => {
  const [pageNumbers, setPageNumbers] = useState([])

  const perPages = [10, 25, 50, 100]

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, sortBy },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      manualPagination: true,
      manualSortBy: true,
      pageCount: totalPage,
    },
    useSortBy,
    usePagination
  )
  const initPageNumbers = useCallback((current, totalPage) => {
    const pageNumbers = []
    const shownPageNumbers = 9
    let fromNumber = current

    let minPageNumber = totalPage - (shownPageNumbers - 1)
    if (shownPageNumbers > totalPage) minPageNumber = 1

    if (current > minPageNumber) {
      fromNumber = Math.min(current, minPageNumber)
    }

    for (let i = fromNumber; i <= totalPage; i++) {
      if (pageNumbers.length < shownPageNumbers) {
        pageNumbers.push(i)
      } else {
        pageNumbers.push({
          ellipsis: true,
          page: totalPage - shownPageNumbers,
        })
        pageNumbers.push(totalPage)
        break
      }
    }

    if (
      totalPage > shownPageNumbers &&
      !pageNumbers.includes(shownPageNumbers)
    ) {
      pageNumbers.unshift({
        ellipsis: true,
        page: pageNumbers.length,
      })
      pageNumbers.unshift(1)
    }

    setPageNumbers(pageNumbers)
  }, [])

  useEffect(() => {
    fetchData({ pageIndex, pageSize, sortBy })
  }, [fetchData, pageIndex, pageSize, sortBy])

  useEffect(() => {
    initPageNumbers(pageIndex + 1, pageCount)
  }, [initPageNumbers, pageIndex, pageCount])

  const onChangePage = (page) => {
    gotoPage(page - 1)
  }

  const PagePrev = (props) => {
    return (
      <li
        className={props.disabled === true ? "page-item disabled" : "page-item"}
        onClick={props.onClick}
      >
        <a className="page-link" role="button" href="#">
          <i className="fas fa-angle-left"></i>
          <span className="sr-only">Prev</span>
        </a>
      </li>
    )
  }

  const PageNext = (props) => {
    return (
      <li
        className={props.disabled === true ? "page-item disabled" : "page-item"}
        onClick={props.onClick}
      >
        <a className="page-link" role="button" href="#">
          <i className="fas fa-angle-right"></i>
          <span className="sr-only">Next</span>
        </a>
      </li>
    )
  }

  const PaginationComponent = () => {
    const currentPage = pageIndex + 1
    return (
      <Pagination className="mb-0 float-end">
        <PagePrev disabled={!canPreviousPage} onClick={() => previousPage()} />
        {pageNumbers.map((val, idx) => {
          if (typeof val === "number") {
            return (
              <Pagination.Item
                key={idx}
                active={currentPage === val}
                onClick={() => onChangePage(val)}
              >
                {val}
              </Pagination.Item>
            )
          } else {
            return (
              <Pagination.Ellipsis
                key={idx}
                onClick={() => onChangePage(val.page)}
              />
            )
          }
        })}
        <PageNext disabled={!canNextPage} onClick={() => nextPage()} />
      </Pagination>
    )
  }

  const Footer = (props) => {
    const currentPage = pageIndex + 1
    const perPage = pageSize
    let from = 1
    let to = perPage

    if (currentPage > 1) {
      from = perPage * (currentPage - 1) + 1
      to = perPage * currentPage
    }
    if (to > totalData) to = totalData

    return (
      <div {...props} style={{ fontWeight: "400" }}>
        Showing <span style={{ fontWeight: "500" }}>{from}</span> -{" "}
        <span style={{ fontWeight: "500" }}>{to}</span> of{" "}
        <span style={{ fontWeight: "500" }}>~{totalData} Data</span>
      </div>
    )
  }

  const TableInformation = (props) => {
    return (
      <div {...props}>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
      </div>
    )
  }
  return (
    <>
      <Table striped bordered responsive {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {/* <th {...column.getHeaderProps()}> */}
                  {column.render("Header")}
                  <span style={{ marginLeft: "10px", position: "relative" }}>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <span style={{ position: "relative" }}>
                          {" "}
                          <FaCaretUp />
                        </span>
                      ) : (
                        <span style={{ position: "relative" }}>
                          {" "}
                          <FaCaretDown />
                        </span>
                      )
                    ) : (
                      <></>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr key={i} {...row.getRowProps()}>
                {row.cells.map((cell, cellIdx) => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                })}
              </tr>
            )
          })}
          {loading ? (
            <tr>
              <td colSpan={columns?.length}>Loading...</td>
            </tr>
          ) : (
            <tr>

              <td colSpan={columns?.length}>
                {totalData > 0 ? <Footer /> : <div className="d-flex justify-content-center fw-bold fst-italic">List Empty</div>}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <Row>
        <Col md={3}>
          <span className="me-2">Show</span>
          <Form.Control
            as="select"
            className="d-inline-block"
            style={{
              width: "auto",
              marginRight: "1rem",
              position: "relative",
            }}
            size="sm"
            value={pageSize}
            onChange={(e) => {
              let value = e.target.value
              if (!isNaN(value)) {
                setPageSize(Number(e.target.value))
              }
            }}
          >
            {perPages.map((pageSize, i) => (
              <option key={i} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </Form.Control>
          <span className="me-2">per page</span>
        </Col>
        <Col md={3} className="d-flex justify-content-center">
          <TableInformation />
        </Col>
        <Col md={6}>{pageCount > 1 && <PaginationComponent />}</Col>
      </Row>
    </>
  )
}

export default BasicTable
