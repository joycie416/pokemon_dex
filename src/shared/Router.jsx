import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StartPage from '../pages/StartPage'
import Dex from '../pages/Dex'
import DetailPage from '../pages/DetailPage'
// import MockContextProvider from '../context/MockContext'

const Router = () => {
  return (
    <BrowserRouter>
      {/* <MockContextProvider> */}
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/dex' element={<Dex />} />
        {/* <Route path='/detail/:id' element={<DetailPage />} /> */}
        <Route path='/detail' element={<DetailPage />} />
      </Routes>
      {/* </MockContextProvider> */}
    </BrowserRouter>
  )
}

export default Router