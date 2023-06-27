import React, { forwardRef, useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react'
import config from '../../../../config'
import BasicTable from './BasicTable'
import { format } from 'date-fns/esm'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ListOrderTable = forwardRef((props, ref) => {
  const apiUrl = config.apiBaseUrl + "/admin/v2/order"

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  
  const columns = useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id',
      },
      {
        Header: 'User Email',
        accessor: 'User.email',
      },
      {
        Header: 'Car',
        accessor: 'Car.name',
      },
      {
        Header: 'Start Rent',
        accessor: 'start_rent_at',
        Cell: ({ value }) => {
          return format(new Date(value), 'dd/MM/yyyy')
        },
      },
      {
        Header: 'Finish Rent',
        accessor: 'finish_rent_at',
        Cell: ({ value }) => {
          return format(new Date(value), 'dd/MM/yyyy')
        },
      },
      {
        Header: 'Price',
        accessor: 'total_price',
      },
      {
        Header: 'Category',
        accessor: 'Car.category',
      },
      {
        Header: 'Order Date',
        accessor: 'createdAt',
        Cell: ({ value }) => {
          return format(new Date(value), 'dd/MM/yyyy')
        },
      },
      {
        Header: 'Action',
        accessor: 'birthDate',
        Cell: ({ row }) => (
          <>
          <Link to={`/admin/order/detail/${row.original.id}`}>
            <Button
              variant="info"
              size="sm"
              className="me-2"
            >
              Detail
            </Button>
          
          
          </Link>
          </>
        ),
      },
    ],
    [props]
  )
  const [totalPage, setTotalPage] = useState(0)
  const [totalData, setTotalData] = useState(0)

  const filters = useRef({})

  const currentPageIndex = useRef({})
  const currentPageSize = useRef(10)
  const currentSortBy = useRef({})

  useImperativeHandle(ref, () => ({
    efreshData() {
      const defaultValues = {
        pageSize: currentPageSize.current,
        pageIndex: 0,
        sortBy: [],
      }

      fetchData({ ...defaultValues })
    },

    reloadData() {
      const values = {
        pageIndex: currentPageIndex.current,
        pageSize: currentPageSize.current,
        sortBy: currentSortBy.current,
      }
      fetchData({ ...values })
    },

    doFilter(data) {
      filters.current = data
      this.refreshData()
    },
  }))

  const fetchData = useCallback(
    async ({ pageSize, pageIndex, sortBy }) => {
      setLoading(false)
      try {
        const params = {
          page: pageIndex + 1,
          ...filters.current
        }

        if (sortBy && sortBy.length) {
          const orderByMapping = {
            'Car.name': 'car_name:asc',
            'User.email': 'user_email:asc',
            'Car.category': 'category',
            'start_rent_at' : 'start_rent_at:desc',
            'finish_rent_at' :'finish_rent_atdesc:',
            'total_price' : 'total_price:asc',
            'createdAt' : 'createdAt:asc'
          };
          const { id } = sortBy[0];
          params.sort = orderByMapping[id] || id;
        } else {
          params.sort = 'created_at:desc'
        }

        if (pageSize) params.pageSize = pageSize
        const token = document.cookie
          .split('; ')
          .find((row) => row.startsWith('token='))
          ?.split('=')[1];

        const response = await axios.get(apiUrl, {
          params,
          headers: {
            access_token: token
          }
        });

        const { data } = response

        const list = data?.orders


        setData(list)
        setTotalPage(data?.pageCount)
        setTotalData(data?.count)



        currentPageIndex.current = pageIndex
        currentPageIndex.pageSize = pageSize
        currentPageIndex.sortBy = sortBy

        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    },
    [apiUrl]
  )
return (
  <BasicTable
  columns={columns}
  data={data}
  fetchData={fetchData}
  loading={loading}
  totalPage={totalPage}
  totalData={totalData}
/>
)

})

export default ListOrderTable


ListOrderTable.defaultProps = {
  onDetail: (data) => { },
  onEdit: (data) => { },
  onDelete: (data) => { },
}