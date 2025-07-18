import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

// Site Pages
import HomePage from './pages/Homepage'
import ServicePage from './pages/Servicepage'
import GamePage from './pages/Gamepage'
import EcommercePage from './pages/Ecommercepage'
import NotFoundPage from './pages/NotFoundpage'

const router = createBrowserRouter(

  createRoutesFromElements(

    
    <Route path='/' element={<MainLayout />}>

      <Route index element={<HomePage/>} />

      <Route path='/service' element={<ServicePage/>} />

      <Route path='/game' element={<GamePage />} />

      <Route path='/ecommerce' element={<EcommercePage />} />

      <Route path='*' element={<NotFoundPage/>} />

    </Route>

  )

)

const App = () => {
  return (

    <div className='antialiased'>

      <RouterProvider router = { router } />

    </div>

  )
}

export default App