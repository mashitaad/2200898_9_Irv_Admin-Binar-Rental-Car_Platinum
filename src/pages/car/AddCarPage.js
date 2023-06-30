import React from 'react'
import AddCard from './components/AddCar'
import SideBar from '../../components/layout/SideBar'
import { useDispatch } from 'react-redux'
import { adminAddCar } from '../../features/carSlice'
import { useNavigate } from 'react-router-dom'

export default function AddCarPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
const handleAddCar = async (payload) => {
console.log(payload)
  // try {
  //   const response = await dispatch(adminAddCar(payload)).unwrap()
  //   navigate('/admin/car/list')
    
  // } catch (error) {
  //   console.log(error)
  // }
}

  return (


    <SideBar>
      <AddCard onSubmit = {handleAddCar}/>
    </SideBar>
  )
}
