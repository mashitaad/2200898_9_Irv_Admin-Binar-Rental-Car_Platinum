import React from 'react'
import Chart from './components/chart/Chart'
import ListOrderTable from './components/list-order/ListOrderTable'
import Overlayers from '../../components/layout/Overlayers'

export default function DashboardPage() {
  return (
    <>
    <Overlayers>
    <Chart />
    <ListOrderTable />

    </Overlayers>
    </>
  )
}
