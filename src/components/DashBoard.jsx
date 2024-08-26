import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SelectedList from './SelectedList';

const DashBoard = () => {
  const navigate = useNavigate();

  return (
    <StDiv>
      <DashBoardContainer>
        <header style={{ alignItems: 'center', display: 'flex', height: '40px' }}>
          <ToStartButton
            onClick={() => {
              // const result = confirm('페이지를 벗어나면 선택한 카드 정보를 모두 잃습니다.\n페이지를 벗어나시겠습니까?');
              // if (result) {
                navigate(`/`);
                return
              // } else {
              //   return;
              // }
            }}>
            to Start Page
          </ToStartButton>
          <h1 style={{ margin: 'auto', transform: 'translateX(-35%)', fontSize: '25px' }}>My Pokemons</h1>

        </header>
        <SelectedList />
      </DashBoardContainer>
    </StDiv>
  )
}

export default DashBoard

const StDiv = styled.div`
  background-color:rgb(236, 236, 236);
  max-width: 1200px;
  width: 100%;

  padding: 20px 0;

  position: fixed;
  top: 0;

  z-index: 2;
`

const DashBoardContainer = styled.div`
  background-color: skyblue;

  max-width: 1200px;
  width: 100%;
  height: fit-content;

  border-radius: 10px;
  overflow: hidden;
`

const ToStartButton = styled.button`
  float: left;
  margin-left: 20px;
  margin-top: 8px;

  height: 25px;

  border: none;
  border-radius: 5px;
  
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`