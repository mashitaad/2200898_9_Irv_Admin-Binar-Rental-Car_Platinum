import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonFilter from '../../../pages/car/components/ButtonFilter';

test('renders ButtonFilter component', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<ButtonFilter handleClick={handleClick} />);


  const allButton = getByText('All');
  expect(allButton).toBeInTheDocument();

  const smallButton = getByText('2 - 4 people');
  expect(smallButton).toBeInTheDocument();

  const mediumButton = getByText('4 - 6 people');
  expect(mediumButton).toBeInTheDocument();

  const largeButton = getByText('6 - 8 people');
  expect(largeButton).toBeInTheDocument();


  fireEvent.click(allButton);
  fireEvent.click(smallButton);
  fireEvent.click(mediumButton);
  fireEvent.click(largeButton);

  expect(handleClick).toHaveBeenCalledTimes(4);
});
