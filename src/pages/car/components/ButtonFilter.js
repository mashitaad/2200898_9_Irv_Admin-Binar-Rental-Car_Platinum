import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
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
      <Button variant="primary" onClick={handleAllClick}>
        All
      </Button>{' '} <Button variant="primary" onClick={handleSmallClick}>
        small
      </Button>{' '}
      <Button variant="primary" onClick={handleMediumClick}>
        medium
      </Button>{' '}
      <Button variant="primary" onClick={handleLargeClick}>
        large
      </Button>{' '}
    </>
  );
}


ButtonFilter.defaultProps = {
    handleClick: () => '',
  }
  