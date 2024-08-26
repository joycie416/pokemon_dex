import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DashBoard from '../components/DashBoard'
import PokemonList from '../components/PokemonList'

const Dex = () => {

  return (
    <div style={{position:'relative', backgroundColor:'white'}}>
      <DashBoard />
      <PokemonList  />
    </div>
  )
}

export default Dex