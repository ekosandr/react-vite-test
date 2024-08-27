// import React from 'react'
// import { Link } from 'react-router-dom';

import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header>
      <h1>Хедер</h1>
      <nav>
        <ul style={{display: "flex", justifyContent: 'space-between', listStyleType: 'none'}}>
            <li ><Link to="/">Главная</Link></li>
            <li><Link to="/pages/page1">Страница 1</Link></li>
            <li><Link to="/pages/page2">Страница 2</Link></li>
        </ul>
      </nav>

    </header>
  );
};

export default Header

