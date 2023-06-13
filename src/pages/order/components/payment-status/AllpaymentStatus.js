import { Button, Card } from 'react-bootstrap'
import ImageWithLoading from '../../../../components/ui/ImageWithLoading'
import moment from 'moment';
import nullImage from '../../../../assets/images/imagenotfound.jpeg'
import '../styles/cardpayment.css'
import 'moment/locale/id';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adminGetAllOrder, orderSelector } from '../../../../features/orderSlice';
import ReactPaginate from 'react-paginate';
moment.locale('id')


export default function AllpaymentStatus(props) {

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(props.data?.orders?.length / itemsPerPage);

  useEffect(() => {
    setPageData(props.data?.orders?.slice(startIndex, endIndex));
  }, [props.data, startIndex, endIndex]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const formatter = new Intl.NumberFormat("id-ID", {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  });


  return (
    <>
      {pageData?.map(o => (
        <Card className='card-status-payment' key={o.id}>
          <Card.Header>
            {!o.status && !o.slip ? "BELUM BAYAR" :
              !o.status && o.slip ? "PERLU PROSES" : "SELESAI"}

          </Card.Header><Card.Body>
            <div className='row'>
              <div className='col-md-9 card-content-payment'>
                {o.Car?.image === null || o.Car?.image === undefined ?
                  (
                    <div>
                      <ImageWithLoading
                        src={nullImage}
                        alt={'null'}
                      />
                    </div>
                  ) :
                  (
                    <div>
                      <img
                        src={o.Car?.image}
                        alt={o.Car?.name}
                        style={{ width: "350px", height: "250px" }}
                      />
                    </div>
                  )
                }
                <div>
                  <h5>Nama/Type Mobil {o?.Car?.name} </h5>
                  <h5>tanggal Sewa {moment(o?.start_rent_at).format('DD MMMM YYYY')}</h5>
                  <h5>tanggal berakhir sewa {moment(o?.finish_rent_at).format('DD MMMM YYYY')}</h5>
                  <p>No pesanan: {o.id}</p>
                  <p>Pemesan: {o.User?.email}</p>
                </div>
              </div>
              <div className='col-md-3'>
                total bayar: {formatter.format(o.total_price)}
              </div>
            </div>

            <div className='payment-option-button'>
              {
                !o.status && !o.slip &&
                <>
                  <Button
                    variant="outline-danger"
                    onClick={(e) => {
                      e.preventDefault()
                      props.handleDelete(o.id)
                    }}
                  >
                    Tolak Pesanan
                  </Button>
                  <Link to={`/order/detail/${o.id}`}>
                    <Button variant="primary">Lihat Detail</Button>
                  </Link>
                </>
              }
              {
                !o.status && o.slip &&
                <>
                  <Link to={`/admin/order/detail/${o.id}`}>
                    <Button variant="primary">Lihat Detail</Button>
                  </Link>
                  <Link to={`/admin/order/detail/${o.id}`}>
                    <Button variant="primary">konfirmasi pembayaran</Button>
                  </Link>
                </>
              }
              {
                o.status && o.slip &&
                  <Link to={`/admin/order/detail/${o.id}`}>
                    <Button variant="primary">Lihat Detail</Button>
                  </Link>
              }
            </div>

          </Card.Body>
        </Card>
      ))}

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
  )
}
