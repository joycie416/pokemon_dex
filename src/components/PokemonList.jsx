import React from 'react'
import styled from 'styled-components'
import PokemonCard from './PokemonCard'

const CardContainer = styled.div`
  background-color: gray;
  padding: 20px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;

  margin-top: 370px;
`

const PokemonList = ({selected, setSelected, mock, setMock}) => {
  console.log('pokemonlist');
  // console.log(mock);
  // const {selected, setSelected, mock, setMock} = useOutletContext();

  return (
    <CardContainer>
      {mock.map(card => {
        // console.log(card.id);
        return <PokemonCard card={card} selected={selected} setSelected={setSelected} mock={mock} setMock={setMock} key={card.id}/>
      })}
    </CardContainer>
  )
}

export default PokemonList