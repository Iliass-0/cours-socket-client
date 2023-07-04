import React from 'react';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';

function ChatBody({messages}) {
  const navigate = useNavigate();

  const leaveChat = () => {
    localStorage.removeItem('username');
    navigate('/');
  }

  return (
    <div>
      <header>
        <p>Welcome to Chat !</p>
        <button onClick={leaveChat}>Leave</button>
      </header>

        {messages.map((message) => {
          return (
            <div>{message.text}</div>
          )
        })}
    </div>
  )
}

export default ChatBody