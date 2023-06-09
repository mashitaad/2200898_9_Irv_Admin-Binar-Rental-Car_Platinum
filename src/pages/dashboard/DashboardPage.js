import React from 'react'
import Chart from './components/chart/Chart'
import ListOrderTable from './components/list-order/ListOrderTable'
import SideBar from '../../components/layout/SideBar'

export default function DashboardPage() {
  return (
    <>
      <SideBar>
        <Chart />
        <ListOrderTable />
      </SideBar>
    </>
  )
}
