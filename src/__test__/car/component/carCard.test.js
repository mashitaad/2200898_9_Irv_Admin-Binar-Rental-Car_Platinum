import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CarCard from '../../../pages/car/components/CarCard';

describe('CarCard Component', () => {
  test('renders car information correctly', () => {
    const car = {
      id: '1',
      name: 'Car 1',
      price: 100000,
      category: 'small',
      image: 'car.jpg',
      updatedAt: '2023-07-01T10:00:00Z'
    };
    render(
      <BrowserRouter>
        <CarCard car={car} />
      </BrowserRouter>
    );

    expect(screen.getByText('Car 1')).toBeInTheDocument();
    expect(screen.getByText('Rp 100000 / hari')).toBeInTheDocument();
    expect(screen.getByText('2-4 Orang')).toBeInTheDocument();

    const image = screen.getByAltText('Car 1');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'car.jpg');
  });

  test('renders default image when car image is null', () => {
    const car = {
      id: '1',
      name: 'Car 1',
      price: 100000,
      category: 'small',
      image: null,
      updatedAt: '2023-07-01T10:00:00Z'
    };
    render(
      <BrowserRouter>
        <CarCard car={car} />
      </BrowserRouter>
    );

    const defaultImage = screen.getByAltText('null');
    expect(defaultImage).toBeInTheDocument();
    expect(defaultImage).toHaveAttribute('src', 'imagenotfound.jpeg');
  });
});
