import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UpdateCar from '../../../pages/car/components/UpdateCar';

describe('UpdateCar Component', () => {
  test('renders the form with initial values', () => {
    const mockData = {
      name: 'Car Name',
      price: '1000',
      category: 'small',
      image: 'image.png',
      createdAt: '2023-07-01T10:00:00Z',
      updatedAt: '2023-07-02T10:00:00Z',
    };

    render(<UpdateCar data={mockData} onSubmit={() => {}} />);

    const nameInput = screen.getByPlaceholderText('Car Name');
    expect(nameInput.value).toBe(mockData.name);

    const priceInput = screen.getByPlaceholderText('1000');
    expect(priceInput.value).toBe(mockData.price);

    const categorySelect = screen.getByLabelText('Default select example');
    expect(categorySelect.value).toBe(mockData.category);

    const createdAtText = screen.getByText('02 July 2023');
    expect(createdAtText).toBeInTheDocument();

    const updatedAtText = screen.getByText('03 July 2023');
    expect(updatedAtText).toBeInTheDocument();
  });

  test('calls the onSubmit function with the form data when Save button is clicked', () => {
    const mockOnSubmit = jest.fn();
    const mockData = {
      name: 'Car Name',
      price: '1000',
      category: 'small',
      image: 'image.png',
      createdAt: '2023-07-01T10:00:00Z',
      updatedAt: '2023-07-02T10:00:00Z',
    };

    render(<UpdateCar data={mockData} onSubmit={mockOnSubmit} />);

    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith({
      name: 'Car Name',
      price: '1000',
      category: 'small',
      image: 'image.png',
    });
  });
});
