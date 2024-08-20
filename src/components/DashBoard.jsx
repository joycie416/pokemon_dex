import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SelectedList from './SelectedList';

const DashBoardContainer = styled.div`
  background-color: skyblue;

  max-width: 1200px;
  width: 100%;
  height: fit-content;

  border-radius: 10px;
  overflow: hidden;
`

const DashBoard = ({ selected, setSelected, mock, setMock }) => {
  const navigate = useNavigate();


  return (
    <div style={{
      backgroundColor:'white',
      maxWidth:'1200px',
      width:'100%',

      padding:'20px 0',

      position: 'fixed',
      top:'0',

      zIndex:'2'
    }}>
      <DashBoardContainer>
        <header style={{ alignItems: 'center', display: 'flex', height: '40px' }}>
          <button
            style={{ float: 'left', marginLeft:'20px' }}
            onClick={() => {
              const result = confirm('페이지를 벗어나면 선택한 카드 정보를 모두 잃습니다.\n페이지를 벗어나시겠습니까?');
              if (result) {
                navigate(`/`);
                return
              } else {
                return;
              }
            }}>
            to Start Page
          </button>
          <h1 style={{ margin: 'auto', transform: 'translateX(-35%)', fontSize: '25px' }}>My Pokemons</h1>

        </header>
        <SelectedList selected={selected} setSelected={setSelected} mock={mock} setMock={setMock} />
      </DashBoardContainer>
    </div>
  )
}

export default DashBoard