import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Homepage from './pages/Homepage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter(

  createRoutesFromElements(

    
    <Route path='/' element={<MainLayout />}>

      <Route index element={<Homepage/>} />
      <Route path='/about' element={<AboutPage/>} />
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