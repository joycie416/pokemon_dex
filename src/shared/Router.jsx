import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StartPage from '../pages/StartPage'
import Dex from '../pages/Dex'
import DetailPage from '../pages/DetailPage'
import PokemonList from '../components/PokemonList'
const Router = () => {
  return (
    <BrowserRouter>
      {/* <Layout> */}
      <Routes>
        {/* Route */}
        <Route path='/' element={<StartPage />} />
        <Route path='/dex' element={<Dex />}/>
        <Route path='/detail/:id' element={<DetailPage />} />
      </Routes>
      {/* </Layout> */}
    </BrowserRouter>
  )
}

export default Router