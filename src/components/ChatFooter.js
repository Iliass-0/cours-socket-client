import React, { useState } from 'react'

function ChatFooter({socket}) {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    socket.emit('send_message', {
      text: message,
      name: localStorage.getItem('username')
    });
    setMessage('');
  };

  return (
    <div className='chat-footer'>
      <div className='form'>
        <input 
          type="text"
          className="message"
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Your Message..."
        />
        <button className="sendBtn" onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}

export default ChatFooter