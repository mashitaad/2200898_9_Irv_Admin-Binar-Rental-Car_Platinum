import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import CarlistPage from '../../pages/car/CarlistPage';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);

describe('CarlistPage Component', () => {
  test('renders the car list', () => {
    const store = mockStore({
      loading: false,
      carList: [
        { id: 1, name: 'Car 1', category: 'Category 1' },
        { id: 2, name: 'Car 2', category: 'Category 2' },
        { id: 3, name: 'Car 3', category: 'Category 1' }
      ]
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <CarlistPage />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('List Car')).toBeInTheDocument();
  });

  test('filters cars by category', () => {
    const store = mockStore({
      loading: false,
      carList: [
        { id: 1, name: 'Car 1', category: 'Category 1' },
        { id: 2, name: 'Car 2', category: 'Category 2' },
        { id: 3, name: 'Car 3', category: 'Category 1' }
      ]
    });

    const handleFilterCategory = jest.fn();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <CarlistPage />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(screen.getByText('Filter Category 1'));

    expect(handleFilterCategory).toHaveBeenCalledTimes(1);
    expect(handleFilterCategory).toHaveBeenCalledWith('category1');
  });

  test('deletes a car', () => {
    const store = mockStore({
      loading: false,
      carList: [
        { id: 1, name: 'Car 1', category: 'Category 1' },
        { id: 2, name: 'Car 2', category: 'Category 2' },
        { id: 3, name: 'Car 3', category: 'Category 1' }
      ]
    });

    const handleDeleteCar = jest.fn();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <CarlistPage onDelete={handleDeleteCar} />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(screen.getByTestId('delete-button'));

    expect(handleDeleteCar).toHaveBeenCalledTimes(1);
  });
});
