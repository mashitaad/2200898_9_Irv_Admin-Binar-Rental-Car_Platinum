import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate } from '../../../../features/dropdownSlice';
import axios from 'axios';
import config from '../../../../config'

function Dropdown(props) {
  const selectedDate = useSelector(state => state.dropdown.selectedDate);
  const [date, setDate] = useState({
    from: "",
    until: ""
  })
  const dispatch = useDispatch()
  const options = [
    { label: 'Januari - 2023' },
    { label: 'Februari - 2023' },
    { label: 'Maret - 2023' },
    { label: 'April - 2023' },
    { label: 'Mei - 2023' },
    { label: 'Juni - 2023' },
    { label: 'Juli - 2023' },

  ];


  const handleDateChange = (e) => {
    const { value } = e.target;
    let from, until;

    switch (value) {
      case 'Januari - 2023':
        from = "2023-01-01";
        until = "2023-01-30";
        break;
      case 'Februari - 2023':
        from = "2023-02-01";
        until = "2023-02-28";
        break;
      case 'Maret - 2023':
        from = "2023-03-01";
        until = "2023-03-30";
        break;
      case 'April - 2023':
        from = "2023-04-01";
        until = "2023-04-30";
        break;
      case 'Mei - 2023':
        from = "2023-05-01";
        until = "2023-05-31";
        break;
      case 'Juni - 2023':
        from = "2023-06-01";
        until = "2023-06-30";
        break;
      case 'Juli - 2023':
        from = "2023-07-01";
        until = "2023-07-31";
        break;
      default:
        from = "2023-08-01";
        until = "2023-08-31";
        break;
    }
    setDate({
      ...date,
      from,
      until
    });
   
  }

  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

    const url = config.apiBaseUrl

  const getData = async ( params = {from : "2023-06-01",
  until: "2023-06-30"}) => {
    const response = await axios.get( url + "/admin/order/reports", {
      params,
      headers: {
        access_token: token
        
      }
    }
  
    )
    dispatch(setSelectedDate(response));
    // console.log(response.data)
    // setDataOrder(response.data)
    return response.data
  
  }

  useEffect(() => {
    getData()
  },[])

  const handleGoButtonClick = async (params) => {
   await getData(params = {from: date.from, until: date.until})
  }
  return (
    <div style={{ display: 'flex' }}>
      <div style={{
        width: '122px',
        height: '36px',
        border: '1px solid #D0D0D0',
        borderRadius: '2px 0px 0px 2px',
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '18px',
        color: '#151515',
      }}>
        <select
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            outline: 'none',
            padding: '9px 0px 9px 12px',
            fontFamily: 'Arial',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '18px',
            color: '#151515',
          }}
          value={selectedDate}
          onChange={handleDateChange}
        >
          {options.map(option => (
            <option key={option.label} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <button
        style={{
          width: '43px',
          height: '36px',
          background: '#0D28A6',
          border: 'none',
          outline: 'none',
          borderRadius: '0px 2px 2px 0px',
          fontFamily: 'Arial',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '20px',
          color: '#FFFFFF',
        }}
        onClick={handleGoButtonClick}
      >
        GO
      </button>
    </div>
  );
}
// Dropdown.defaultProps = {
//   onSubmit: () => {}
// }

export default Dropdown;
