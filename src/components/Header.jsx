// import React from 'react'
// import { Link } from 'react-router-dom';

import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header style={{position: 'fixed',
      top: 0}}>
      <h1 style = {{display: 'flex', alignItems: 'center',justifyContent:'center'}}>Хедер</h1>
      <nav>
        <ul style={{display: "flex", justifyContent: 'space-between', listStyleType: 'none'} }>
            <li style={{paddingRight: '15px'}}><Link to="/">Главная</Link></li>
            <li style={{paddingRight: '15px'}}><Link to="/pages/page1">Страница 1</Link></li>
            <li style={{paddingRight: '15px'}}><Link to="/pages/page2">Страница 2</Link></li>
        </ul>
      </nav>

    </header> 
  );
};

export default Header


