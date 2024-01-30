import React from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { getNameDay } from '../helpers/getNameDay';
import { getDate } from '../helpers/getDate';

const Day = ({dateM, setDateM}) => {
  
  const addDays = (date) => {
    let addDate = new Date(dateM)
    addDate.setDate(date.getDate() + 1)
    return addDate;
  }
  
  const restDays = (date) => {
    let restDate = new Date(dateM)
    restDate.setDate(date.getDate() - 1)
    return restDate;
  }

  const handleRight = () => {
    //console.log('right');
    setDateM(addDays(dateM))
  }
  const handleLeft = () => {
    setDateM(restDays(dateM))
  }

  return (
    <section className='flex flex-row gap-2 lg:flex-row justify-center items-center lg:gap-8 lg:text-gray-600'>
  <p
    onClick={()=>handleLeft()} 
    className='cursor-pointer'>
    <FaAngleLeft size={30} className='text-white'/>
  </p>
  <div className='w-[155px] text-center lg:text-center'>
    <h4 className='text-2xl lg:text-4xl font-medium text-white'>
      {getNameDay(dateM)}</h4>
    <p className='text-gray-400 lg:text-base'>{getDate(dateM)}</p>
  </div>
  <p 
    onClick={()=>handleRight()} 
    className='cursor-pointer'>
    <FaAngleRight size={30} className='text-white'/>
  </p>
</section>

  )
}

export default Day