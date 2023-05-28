import React from 'react'
import ButtonFilter from './components/ButtonFilter'

export default function CarlistPage() {
  
  const filterCategory = (payload) => {
    console.log(payload)
  }
  
  return (

    <>
    <ButtonFilter handleClick = {filterCategory}/>
    </>
  )
}
