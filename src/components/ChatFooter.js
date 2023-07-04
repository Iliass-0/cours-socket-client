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
    <div>
      <input 
        type="text"
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Your Message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default ChatFooter