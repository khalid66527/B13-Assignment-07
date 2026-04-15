import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom';
import router from './Routers/Routers';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <h1 className='text-red-600'>Assingment</h1>
    </RouterProvider>
  </StrictMode>,
)
