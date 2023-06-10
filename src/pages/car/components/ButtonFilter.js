import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function ButtonFilter(props) {
  const [category, setCategory] = useState('');

  const handleAllClick = (e) => {
    e.preventDefault();
    setCategory('');
    props.handleClick('');
  };

  const handleSmallClick = (e) => {
    e.preventDefault();
    setCategory('small');
    props.handleClick('small');
  };

  const handleMediumClick = (e) => {
    e.preventDefault();
    setCategory('medium');
    props.handleClick('medium');
  };

  const handleLargeClick = (e) => {
    e.preventDefault();
    setCategory('large');
    props.handleClick('large');
  };

  return (
    <>
      <Button
        variant="primary"
        style={{
          width: '42px',
          height: '36px',
          background: '#FFFFFF',
          border: '1px solid #AEB7E1',
          borderRadius: '2px',
          fontFamily: 'Arial',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: '20px',
          color: '#AEB7E1',
        }}
        onClick={handleAllClick}
        onMouseEnter={(e) => {
          e.target.style.background = '#CFD4ED';
          e.target.style.border = '1px solid #0D28A6';
          e.target.style.color = '#0D28A6';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = '#FFFFFF';
          e.target.style.border = '1px solid #AEB7E1';
          e.target.style.color = '#AEB7E1';
        }}
      >
        All
      </Button>{' '}
      <Button
        variant="primary"
        style={{
          width: '102px',
          height: '36px',
          background: '#FFFFFF',
          border: '1px solid #AEB7E1',
          borderRadius: '2px',
          fontFamily: 'Arial',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: '20px',
          color: '#AEB7E1',
        }}
        onClick={handleSmallClick}
        onMouseEnter={(e) => {
          e.target.style.background = '#CFD4ED';
          e.target.style.border = '1px solid #0D28A6';
          e.target.style.color = '#0D28A6';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = '#FFFFFF';
          e.target.style.border = '1px solid #AEB7E1';
          e.target.style.color = '#AEB7E1';
        }}
      >
        2 - 4 people
      </Button>{' '}
      <Button
        variant="primary"
        style={{
          width: '102px',
          height: '36px',
          background: '#FFFFFF',
          border: '1px solid #AEB7E1',
          borderRadius: '2px',
          fontFamily: 'Arial',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: '20px',
          color: '#AEB7E1',
        }}
        onClick={handleMediumClick}
        onMouseEnter={(e) => {
          e.target.style.background = '#CFD4ED';
          e.target.style.border = '1px solid #0D28A6';
          e.target.style.color = '#0D28A6';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = '#FFFFFF';
          e.target.style.border = '1px solid #AEB7E1';
          e.target.style.color = '#AEB7E1';
        }}
      >
        4 - 6 people
      </Button>{' '}
      <Button
        variant="primary"
        style={{
          width: '102px',
          height: '36px',
          background: '#FFFFFF',
          border: '1px solid #AEB7E1',
          borderRadius: '2px',
          fontFamily: 'Arial',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: '20px',
          color: '#AEB7E1',
        }}
        onClick={handleLargeClick}
        onMouseEnter={(e) => {
          e.target.style.background = '#CFD4ED';
          e.target.style.border = '1px solid #0D28A6';
          e.target.style.color = '#0D28A6';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = '#FFFFFF';
          e.target.style.border = '1px solid #AEB7E1';
          e.target.style.color = '#AEB7E1';
        }}
      >
        6 - 8 people
      </Button>{' '}
    </>
  );
}

ButtonFilter.defaultProps = {
  handleClick: () => '',
};
