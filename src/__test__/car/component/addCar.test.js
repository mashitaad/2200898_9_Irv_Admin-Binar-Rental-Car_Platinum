import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddCar from '../../../pages/car/AddCarPage';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store';

describe('AddCar Component', () => {
  test('renders AddCar component', () => {
    const mockOnSubmit = jest.fn();
    const { getByText, getByLabelText } = render(
      <Router>
        <Provider store={store}>
          <AddCar onSubmit={mockOnSubmit} />
        </Provider>
      </Router>
    )
    
     const addCarTitle = getByText('Add New Car');
    expect(addCarTitle).toBeInTheDocument();
    

    const nameInput = getByLabelText('Nama/Tipe Mobil*');
    expect(nameInput).toBeInTheDocument();
    
    const priceInput = getByLabelText('Harga*');
    expect(priceInput).toBeInTheDocument();
    
    const fileInput = getByLabelText('Foto*');
    expect(fileInput).toBeInTheDocument();
    
    const categorySelect = getByLabelText('Kategori*');
    expect(categorySelect).toBeInTheDocument();
  });

  test('calls onSubmit function with correct form data when Save button is clicked', () => {
    const mockOnSubmit = jest.fn();
    const { getByText, getByLabelText } = render(
        <Router>
          <Provider store={store}>
            <AddCar onSubmit={mockOnSubmit} />
          </Provider>
        </Router>
      )
    const nameInput = getByLabelText('Nama/Tipe Mobil*');
    fireEvent.change(nameInput, { target: { value: 'Car 1' } });

    const priceInput = getByLabelText('Harga*');
    fireEvent.change(priceInput, { target: { value: '100000' } });
    
    const fileInput = getByLabelText('Foto*');
    const file = new File(['file content'], 'car.jpg', { type: 'image/jpeg' });
    fireEvent.change(fileInput, { target: { files: [file] } });
    
    const categorySelect = getByLabelText('Kategori*');
    fireEvent.change(categorySelect, { target: { value: 'small' } });
    
    const saveButton = getByText('Save');
    fireEvent.click(saveButton);
    
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith({
      name: 'Car 1',
      price: '100000',
      status: false,
      image: file,
      category: 'small',
    });
  });
});
