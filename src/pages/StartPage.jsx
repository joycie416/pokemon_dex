import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/pokemon-logo.png'

import axios from "axios";

const StartPage = () => {
  const navigate = useNavigate();



  axios.defaults.withCredentials = true;
  
  // const Local = "http://localhost"
  const BASE_URL = "http://kopis.or.kr/openApi/restful/pblprfr";
  // const API_KEY = import.meta.env.VITE_KOPIS_KEY;
  
  const url =
    BASE_URL +
    `?service=7e6379e8f4ad4bc5a8d668d4dfea6e78&stdate=20240911&eddate=20240911&rows=10&cpage=1`;
    // 7e6379e8f4ad4bc5a8d668d4dfea6e78
  
  const getPlayDay = async () => {
    // const {data} = await axios({
    //   methos:'get'
    //   url:`?service=${API_KEY}&stdate=20240911&eddate=20240911&rows=10&cpage=1`,
    //   withCredentials: true
    // })
  
    // console.log(  BASE_URL +
    //   `?service=${API_KEY}&stdate=20240911&eddate=20240911&rows=10&cpage=1`);
    
    const {data} = await fetch(url)
  
    console.log(data);
    return (data)
  }

  getPlayDay();



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