
// import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ openModal, showPage3 }) => {
  
  return (
    <header style={{ position: 'fixed', top: 0 }}>
      <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Хедер</h1>
      <button onClick={openModal}>Получить</button>
      <nav>
        <ul style={{ display: "flex", justifyContent: 'space-between', listStyleType: 'none' }}>
          <li style={{ paddingRight: '15px' }}><Link to="/">Главная</Link></li>
          <li style={{ paddingRight: '15px' }}><Link to="/pages/page1">Страница 1</Link></li>
          <li style={{ paddingRight: '15px' }}><Link to="/pages/page2">Страница 2</Link></li>
          <li style={{ paddingRight: '15px' }}><Link to="/pages/page4">Опросник</Link></li>
          <li style={{ paddingRight: '15px' }}><Link to="/pages/form">Форма</Link></li>
          {showPage3 && (
            <li style={{ paddingRight: '15px' }}><Link to="/pages/page3">Страница 3</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
