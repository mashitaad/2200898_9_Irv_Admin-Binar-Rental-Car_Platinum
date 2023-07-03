import React from 'react';
import AddCard from './components/AddCar';
import SideBar from '../../components/layout/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { adminAddCar, carSelectors } from '../../features/carSlice';
import { useNavigate } from 'react-router-dom';

export default function AddCarPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(carSelectors.loading);
  const handleAddCar = async (payload) => {
    try {
      await dispatch(adminAddCar(payload)).unwrap();
      if (loading) {
        navigate('/admin/car/list');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SideBar>
      <AddCard onSubmit={handleAddCar} />
    </SideBar>
  );
}
