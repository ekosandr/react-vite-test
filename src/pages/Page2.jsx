// import React from 'react'

const Page2 = () => {
  const value = localStorage.getItem('inputValue');
  return (
    <div>
      <h1>Страница 2</h1>
      <h2>Значение:{value}</h2>
    </div>

  )
}

export default Page2
