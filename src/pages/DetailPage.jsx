import React from 'react'
import { useParams } from 'react-router-dom'
import mock from '../mock';
import styled from 'styled-components';


const Detail = styled.div`
  width: 500px;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const DetailPage = () => {
  const params = useParams();

  const targetCard = mock.find(card => card.id === +params.id);
  const {img_url, korean_name, description, types} = targetCard;

  return (
    <Detail>
      <img src={img_url} style={{width:'300px', height:'300px', objectFit:'contain'}}/>
      <p>{korean_name}</p>
      <p>{types}</p>
      <p>{description}</p>
    </Detail>
  )
}

export default DetailPage