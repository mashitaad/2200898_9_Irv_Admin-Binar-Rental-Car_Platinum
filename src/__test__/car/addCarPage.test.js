import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import AddCarPage from '../../pages/car/AddCarPage';


const initialState = {};
function reducer(state = initialState, action) {
  return state;
}
const store = createStore(reducer);


const mockHandleAddCar = jest.fn();

test('renders AddCarPage component', () => {
  const history = createMemoryHistory();
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <AddCarPage />
      </Router>
    </Provider>
  );


  const nameInput = getByLabelText('Nama/Tipe Mobil*');
  expect(nameInput).toBeInTheDocument();

  const priceInput = getByLabelText('Harga*');
  expect(priceInput).toBeInTheDocument();

  const fileInput = getByLabelText('Foto*');
  expect(fileInput).toBeInTheDocument();

  const categorySelect = getByLabelText('Kategori*');
  expect(categorySelect).toBeInTheDocument();


  const saveButton = getByText('Save');
  fireEvent.click(saveButton);


  expect(mockHandleAddCar).toHaveBeenCalledTimes(1);
});


jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockHandleAddCar,
}));
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

test('calls handleAddCar function when Save button is clicked', () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <AddCarPage />
      </Router>
    </Provider>
  );


  const saveButton = getByText('Save');
  fireEvent.click(saveButton);

  expect(mockHandleAddCar).toHaveBeenCalledTimes(1);
});
