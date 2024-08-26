import React, { useContext } from 'react'
import styled from 'styled-components'
import PokemonCard from './PokemonCard'
import { useSelector } from 'react-redux';
// import { MockContext } from '../context/MockContext'

const PokemonList = () => {
  // const { mock } = useContext(MockContext);
  const mock = useSelector(state => state.mock);
  // console.log('mock :', mock);


  // console.log('pokemonlist');
  // console.log(mock);
  // const {selected, setSelected, mock, setMock} = useOutletContext();

  return (
    <CardContainer>
      {mock.map(card => {
        // console.log(card.id);
        return <PokemonCard card={card} key={card.id} />
      })}
    </CardContainer>
  )
}

export default PokemonList

const CardContainer = styled.div`
  background-color: rgb(236, 236, 236);
  padding: 20px;

  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;

  margin-top: 370px;
  
  overflow: scroll;
`