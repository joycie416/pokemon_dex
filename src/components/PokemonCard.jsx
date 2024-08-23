import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { MockContext } from '../context/MockContext'

const Card = styled.div`
  background-color: white;

  width: 100%;
  height: 250px;

  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9px;

  border-radius: 8px;

  position: static;
  z-index: 1;

  

  ${props =>
    !props.$empty &&
    css`
      cursor: pointer;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 10px gray;
      }
    `}
`

const Button = styled.button`
  height: 40px;
  width: 70px;

  background-color: ${props => !props.$isselected ? 'red' : 'blue'};
  color: white;
  border: none;
  border-radius: 10px;

  font-size: 15px;
  
  position: static;
  z-index: 4;
  /* pointer-events: none; */
  cursor: pointer;

  &:hover{
    background-color: ${props => !props.$isselected ? '#d30000' : '#0000c6'};
  }
`

const EmptySlot = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  color: gray;
  font-size: 20px;
  line-height: 150%;
`




const PokemonCard = ({ card }) => {
  let { img_url, korean_name, id, isSelected } = card;
  const { handleSelected } = useContext(MockContext);

  const navigate = useNavigate();



  const onClick = () => {
    const result = confirm('페이지를 벗어나면 선택한 카드 정보를 모두 잃습니다.\n페이지를 벗어나시겠습니까?');
    if (result) {
      navigate(`/detail/${id}`);
      return;
    } else {
      return;
    }

  }


  if (!id) {
    return <Card $empty={true}><EmptySlot>Empty<br />Slot</EmptySlot></Card>
  } else {
    return (
      <Card onClick={onClick} $empty={false}>
        <img src={img_url} style={{
          height: "130px",
          objectFit: 'contain',
        }} />
        <p>{korean_name}</p>
        <p style={{ fontSize: '12px' }}>No. {`00${id}`.slice(-3)}</p>
        {!isSelected ?
          (<Button
            onClick={(e) => {
              e.stopPropagation();
              //  console.log('card tobe selected', card)
              handleSelected(card)
            }} $isselected={isSelected}>선택</Button>)
          : (<Button
            onClick={(e) => {
              e.stopPropagation();
              //  console.log('card tobe unselected', card)
              handleSelected(card);
            }} $isselected={isSelected}>해제</Button>)}

      </Card>
    )
  }
}

export default PokemonCard