// import React from 'react'

import { useContext } from "react";
import { Themecontext } from "../components/providers/Theme";

const Page2 = () => {
  const {value} = useContext(Themecontext) ;

  return (
    <div>
      <h1>Страница 2</h1>
      <h2>Значение:{value}</h2>
    </div>

  )
}

export default Page2
