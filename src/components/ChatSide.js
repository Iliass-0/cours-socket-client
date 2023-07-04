import React from 'react'

function ChatSide({socket}) {
  return (
    <div className='chat-side'>
      <h2 className="chat-header">Users connected :</h2>
      <ul className='chat-users'>
        <li>Tom</li>
        <li>Alice</li>
        <li>Bob</li>
      </ul>
    </div>
  )
}

export default ChatSide