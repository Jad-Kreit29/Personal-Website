import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Homepage from './pages/Homepage'
import ServicePage from './pages/ServicePage'
import Gamepage from './pages/Gamepage'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter(

  createRoutesFromElements(

    
    <Route path='/' element={<MainLayout />}>

      <Route index element={<Homepage/>} />
      <Route path='/game' element={<Gamepage />} />
      <Route path='/service' element={<ServicePage/>} />
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