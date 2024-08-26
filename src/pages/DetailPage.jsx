import React from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import mock from '../mock';
import styled from 'styled-components';


const DetailPage = () => {
  const navigate = useNavigate();
  // const params = useParams();
  const [searchParams, _] = useSearchParams();

  // const targetCard = mock.find(card => card.id === +params.id);
  const targetCard = mock.find(card => card.id === +searchParams.get('id'));
  const { img_url, korean_name, description, types } = targetCard;

  return (
    <>
      <BackButton onClick={() => {
        navigate(`/dex`);
        return;
      }}>뒤로가기</BackButton>
      <Detail>
        <img src={img_url} style={{ width: '300px', height: '300px', objectFit: 'contain' }} />
        <p style={{ fontSize: '24px', fontWeight: '600' }}>{korean_name}</p>
        <hr style={{ width: '50%', height: '1px' }} />
        <p>타입 : {types.join(', ')}</p>
        <p>{description}</p>
      </Detail>
    </>
  )
}

export default DetailPage

const Detail = styled.div`
  background-color: white;

  width: 500px;
  height: 500px;

  padding: 0 0 30px 0;

  border:none;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const BackButton = styled.button`
  background-color: white;

  float: left;
  margin-left: 20px;
  margin-top: 20px;
  padding: 3px 10px 5px 10px;

  /* height: 25px; */

  border: none;
  border-radius: 5px;
  
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`