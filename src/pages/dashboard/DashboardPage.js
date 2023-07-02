import React from 'react';
import Chart from './components/chart/Chart';
import ListOrderTable from './components/list-order/ListOrderTable';
import SideBar from '../../components/layout/SideBar';
import Dropdown from './components/chart/dropdown';

export default function DashboardPage() {
  return (
    <>
      <SideBar>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '15px'
        }}>
          <div style={{
            width: '4px',
            height: '24px',
            background: '#0D28A6',
            marginRight: '8px' // Menambahkan jarak antara rectangle dan tulisan
          }}></div>
          <h1 style={{
            fontFamily: 'Arial',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '20px',
            color: '#000000'
          }}>Rented Car Data Visualization</h1>
        </div>
        <p>Month</p>
        <Dropdown/>
        <div style={{ marginTop: '-20px' }}> {/* Menambahkan margin top sebesar 53px */}
          <Chart />
        </div>
        <ListOrderTable />
      </SideBar>
    </>
  );
}
