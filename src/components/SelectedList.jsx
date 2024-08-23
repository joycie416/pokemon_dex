import React, { useContext } from 'react'
import PokemonCard from './PokemonCard';
import styled from 'styled-components';
import { MockContext } from '../context/MockContext';

const SelectedContainer = styled.div`
  background-color: transparent;
  
  padding: 20px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;

  overflow: scroll;
`

const SelectedList = () => {
const {selected} = useContext(MockContext);

  const selectedArray = [...selected];
  if (selectedArray.length < 6) {
    const n = selectedArray.length;
    for (let i = 0 ; i < 6-n ; i++) {
      selectedArray.push({});
    }
  }
  // console.log('selected :', selectedArray)
  return (
    <SelectedContainer>
      {selectedArray.map((card, idx) => {
        // console.log(idx,':', card);
        if (!card.id) {
          return <PokemonCard card={card} key={`empty${idx+1}`}/>
        } else {
        return <PokemonCard card={card} key={card.korean_name}/>
        }
      })}
    </SelectedContainer>
  )
}

export default SelectedList