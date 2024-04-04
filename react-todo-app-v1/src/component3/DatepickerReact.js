import React, { useRef, useState } from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FaCalendarAlt } from "react-icons/fa";

const DatepickerReact = (props) => {

    const [selectedDate, setSelectedDate] = useState('')
    // const dateInputRef = useRef(null)

    const handleChange = (data) => {
      setSelectedDate(data)
      props.onChange(data)
    }
  return (
    <>
      <div className='d-flex'>
      {/* <input
        type="date"
        onChange={handleChange}
        // ref={dateInputRef}
      /> */}
      <DatePicker 
      name='deadline'
      selected={selectedDate}
      onChange={handleChange}
      dateFormat ='dd/MM/yyyy'
      minDate={new Date()}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      
      />     
      
       <div className="">
        
      <FaCalendarAlt />
  </div> 
    </div>

    </>
  )
}

export default DatepickerReact
