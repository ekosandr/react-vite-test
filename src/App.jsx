// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
// import Input from './components/Input/Input';
import About from './components/About';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Form from './pages/Form';



export const router = createBrowserRouter([
  {
    element: <MainLayout/>,
    children: [
      {path: '/', element: <About />},
      {path: '/pages/page2', element: <Page2 />},
      {path: '/pages/page1', element: <Page1 />},
      {path: '/pages/page3', element: <Page3 />},
      {path: '/pages/page4', element: <Page4 />},
      {path: '/pages/form', element: <Form />},
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;