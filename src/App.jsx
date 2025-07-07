import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

// Site Pages
import HomePage from './pages/HomePage'
import ServicePage from './pages/ServicePage'
import GamePage from './pages/GamePage'
import EcommercePage from './pages/EcommercePage'
import NotFoundPage from './pages/NotFoundPage'

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