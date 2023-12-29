"use client"
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style.css'; 

function Caledario() {
  const [value, setValue] = useState(new Date());

  const onChange = (nextValue) => {
    setValue(nextValue);
  };

  const tileClassName = ({ date }) => {
    const isTuesday = date.getDay() === 2; 
    const isThursday = date.getDay() === 4;

    
    return isTuesday || isThursday ? 'marked-day' : '';
  };

  return (
    <div>
      <h1>Meu Calendário</h1>
      <Calendar onChange={onChange} value={value} tileClassName={tileClassName}className={"custom-calendar"}/>
    </div>
  );
}

export default Caledario;
