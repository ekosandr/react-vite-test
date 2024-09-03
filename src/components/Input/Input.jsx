import { useState } from 'react'
import classes from './input.module.css'

const Input = () => {
    const [value, setValue] = useState ('');
    const handlechange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('inputValue', value); 
    };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input"  >Number</label>
      <input
      className={classes.input} 
      id='input'
      type='number' 
      value={value}
      onChange={handlechange}
      placeholder='Введите число'
      />
      <p>Вы ввели: {value}</p>
    </form>
  )
}

export default Input
