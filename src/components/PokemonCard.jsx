import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

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




const PokemonCard = ({ card, selected, setSelected, mock, setMock }) => {
  let { img_url, korean_name, id, isSelected } = card;

  const navigate = useNavigate();

  const handleSelect = () => {

    console.log(korean_name);
    if (isSelected) {
      setSelected(prev => prev.filter(ele => ele.id !== id));
      const newCard = { ...card };
      newCard.isSelected = false;

      const newMock = [...mock];
      newMock[id - 1] = newCard;
      setMock(newMock);
      return;
    } else {
      if (selected.length === 6) {
        alert('최대 6장까지 선택할 수 있습니다.');
        return;
      }

      if (selected.filter(ele => ele.id === id).length > 0) {
        alert('이미 선택된 포켓몬입니다.');
        return;
      } else {
        console.log('new selection')
        const newSelected = [...selected];
        const newCard = { ...card };
        newCard.isSelected = true;
        newSelected.push(newCard);
        setSelected(newSelected)

        const newMock = [...mock];
        newMock[id - 1] = newCard;
        setMock(newMock);
        return;
      }
    }
  }

  const onClick = () => {
    const result = confirm('페이지를 벗어나면 선택한 카드 정보를 모두 잃습니다.\n페이지를 벗어나시겠습니까?');
    if (result) {
      navigate(`/detail/${id}`);
      return
    } else {
      return;
    }
    
  }


  if (!id) {
    return <Card><EmptySlot>Empty<br/>Slot</EmptySlot></Card>
  } else {
    return (
      <Card onClick={onClick}>
        <img src={img_url} style={{
          height: "130px",
          objectFit: 'contain',
        }} />
        <p>{korean_name}</p>
        <p style={{fontSize:'12px'}}>No. {`00${id}`.slice(-3)}</p>
        {!isSelected ? (<Button onClick={(e) => {e.stopPropagation(); handleSelect() }} $isselected={isSelected}>선택</Button>) : (<Button onClick={(e) => {e.stopPropagation(); handleSelect() }} $isselected={isSelected}>해제</Button>)}

      </Card>
    )
  }
}

export default PokemonCard