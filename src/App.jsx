import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

// Site Pages
import Homepage from './pages/Homepage'
import Servicepage from './pages/Servicepage'
import Gamepage from './pages/Gamepage'
// import Ecommercepage from './pages/EcommercePage'
import Notfoundpage from './pages/Notfoundpage'

const router = createBrowserRouter(

  createRoutesFromElements(

    
    <Route path='/' element={<MainLayout />}>

      <Route index element={<Homepage/>} />

      <Route path='/service' element={<Servicepage/>} />

      <Route path='/game' element={<Gamepage />} />

      {/* <Route path='/ecommerce' element={<Ecommercepage />} /> */}

      <Route path='*' element={<Notfoundpage/>} />

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