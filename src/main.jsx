import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom';
import router from './Routers/Routers';
import FriendProvider from './Context/FriendProvider';
import { ToastContainer } from 'react-toastify';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div className="flex justify-center items-center min-h-[50vh]">
          <span className="loading loading-bars loading-xl text-4xl text-green-900"></span>
        </div>} >
      <FriendProvider>
        <RouterProvider router={router}></RouterProvider>
      </FriendProvider>
    </Suspense>
    <ToastContainer />
  </StrictMode>,
)
