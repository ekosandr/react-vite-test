import { useContext } from 'react'
import classes from './input.module.css'
import { Themecontext } from '../providers/Theme';

const Input = () => {
    const {value, setValue} = useContext (Themecontext);
    
    const handlechange = (event) => {
        setValue(event.target.value);
    };



  return (
    <form>
      <label htmlFor="input"  >Number: </label>
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
