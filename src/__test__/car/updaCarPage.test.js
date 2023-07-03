import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import UpdateCarPage from '../../pages/car/UpdateCarPage';
import { adminUpdateCar } from '../../features/carSlice';

const mockStore = configureStore([]);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
  useNavigate: jest.fn()
}));

describe('UpdateCarPage Component', () => {
  const mockDispatch = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    useParams.mockReturnValue({ id: '1' });
    useNavigate.mockReturnValue(mockNavigate);
    jest.spyOn(React, 'useDispatch').mockReturnValue(mockDispatch);
  });

  test('updates a car', async () => {
    const store = mockStore({
      car: {
        loading: false,
        data: {}
      }
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <UpdateCarPage />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Updated Car' } });

    fireEvent.click(screen.getByText('Update'));

    expect(mockDispatch).toHaveBeenCalledWith(
      adminUpdateCar({ id: '1', params: { name: 'Updated Car' } })
    );
    expect(mockNavigate).toHaveBeenCalledWith('/admin/car/list');
  });

  test('handles empty form submission', () => {
    const store = mockStore({
      car: {
        loading: false,
        data: {}
      }
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <UpdateCarPage />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(screen.getByText('Update'));

    expect(mockDispatch).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
