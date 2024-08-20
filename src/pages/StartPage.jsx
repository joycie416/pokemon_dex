import React from 'react'
import { useNavigate } from 'react-router-dom'

const StartPage = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <div>StartPage</div>
      <button onClick={() => {
        navigate('/dex');
      }}>
        START!
      </button>
    </div>
  )
}

export default StartPage