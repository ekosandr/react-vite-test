// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';


export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/', 
        element: <Page1 />, 
      },
      {
        path: '/pages/page2', 
        element: <Page2 />, 
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;