import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import _mock from '../mock'
import DashBoard from '../components/DashBoard'
import PokemonList from '../components/PokemonList'

const Dex = () => {
  const [selected, setSelected] = useState([]);

  const newMock = _mock.map(card => {
    return {...card, isSelected:false};
  })
  const [mock, setMock] = useState(newMock);
  console.log('mock :', mock);

  return (
    <div style={{position:'relative', backgroundColor:'white'}}>
      <DashBoard selected={selected} setSelected={setSelected} mock={mock} setMock={setMock} />
      <PokemonList selected={selected} setSelected={setSelected} mock={mock} setMock={setMock} />
    </div>
  )
}

export default Dex