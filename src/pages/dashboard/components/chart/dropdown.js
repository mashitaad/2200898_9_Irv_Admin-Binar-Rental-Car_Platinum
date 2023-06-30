import React from 'react';

function Dropdown() {
  const options = [
    { value: {stardate : "2023-06-01", finishDate : "2023-06-30"}, label: 'June - 2022' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
  ];

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
        <select style={{
          width: '100%',
          height: '100%',
          border: 'none',
          outline: 'none',
          padding: '9px 0px 9px 12px', // Mengatur jarak atas 9px, bawah 9px, kiri 12px
          fontFamily: 'Arial',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '18px',
          color: '#151515',
        }}>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <button style={{
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
      }}>GO</button>
    </div>
  );
}

export default Dropdown;
