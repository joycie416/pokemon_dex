import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/pokemon-logo.png'


const StartPageConatiner = styled.div`
  max-width:500px;
  width:100%;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display:'flex';
  flex-direction:'column';
  align-items:'center';

  margin: auto;
`

const LogoImg = styled.img.attrs({
  src: logo,
})`
  width: 100%;
  object-fit: cover;
`

const StartButton = styled.button`
  width: 100px;
  height: 30px;

  margin-top: 30px;

  color: white;

  background-color: red;
  border:none;
  border-radius: 8px;
  
  &:hover{
    background-color: #d30000;
  };
`

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <StartPageConatiner >
      <LogoImg />
      <StartButton onClick={() => {
        navigate('/dex');
      }}>
        START!
      </StartButton>
    </StartPageConatiner>
  )
}

export default StartPage