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
      <header className="chatBody-header">
        <p>Welcome to Chat !</p>
        <button className="leave-btn" onClick={leaveChat}>Leave</button>
      </header>
      <div className='message-container'>
        <div className="message-chats">
          <p className="sender-name">You</p>
          <div className='message-sender'>
            <p>Hey</p>
          </div>
        </div>
      </div>

      {/* <div className='message-chats'>
        <p>Other</p>
        <div className="message-recipient">
          <p>Good and you?</p>
        </div>
      </div>

      <div className="message-status">
        <p>Someone is typing...</p>
      </div> */}

      {messages.map((message) => {
        return (
          <div>{message.text}</div>
        )
      })}
      
    </div>
  )
}

export default ChatBody