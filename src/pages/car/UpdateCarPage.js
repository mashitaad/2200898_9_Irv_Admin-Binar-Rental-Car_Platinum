import React from 'react'
import SideBar from '../../components/layout/SideBar'
import UpdateCar from './components/UpdateCar'
import { useDispatch, useSelector } from 'react-redux'
import { adminUpdateCar, carSelectors } from '../../features/carSlice'
import { useNavigate, useParams } from 'react-router-dom'

export default function UpdateCarPage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const data = useSelector(carSelectors.selectCars)
  const loading = useSelector(carSelectors.loading)
  const navigate = useNavigate()


  const updateCar = async (payload) => {
    await dispatch(adminUpdateCar({ id: id, params: payload })).unwrap()
    navigate('/admin/car/list')
  }

  const handleUpdateCar = (payload) => {
    console.log(payload)
    const updateData = {}
    if (payload) {
      for (const key in payload) {
        const value = payload[key];
        if (key !== '' && value !== null && value !== "" && value !== undefined) {
          updateData[key] = value;
        }
        if (payload.image === '') {
          updateData.image = data?.image
        }
      }
      updateCar(updateData);



    }
  }
  return (
    <>
      <SideBar>
        <UpdateCar onSubmit={handleUpdateCar} />
      </SideBar>
    </>
  )
}
