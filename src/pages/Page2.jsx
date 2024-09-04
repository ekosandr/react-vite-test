// import React from 'react'

import { useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Themecontext } from "../components/providers/Theme";

const Page2 = () => {
  const [cardNumber, setCardNumber] = useState ('');
  const {value} = useContext(Themecontext);
  const navigate =useNavigate();

  useEffect(() => {
    const storedCardNumber = localStorage.getItem('cardNumber');
    if (storedCardNumber) {
      setCardNumber(storedCardNumber);

      
      if (storedCardNumber.length < 10) {
        navigate('/pages/form');
      }
    }
  }, [navigate]);

  return (
    <div>
      <h1>Страница 2</h1>
      <h2>Значение:{value}</h2>
      <h2>Значение из формы:{cardNumber}</h2>
    </div>

  )
}

export default Page2
