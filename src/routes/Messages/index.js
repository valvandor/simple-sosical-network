import React from 'react'
import { MessageList, MessageForm } from './components';

function Messages(props) {
  const {chatList, newMessageText, changeMessageInput, submitMessageForm} = props;

  return (
    <>
      <MessageList 
        chatList={chatList} 
      >
      </MessageList>
      <MessageForm 
        newMessageText={newMessageText}
        changeMessageInput={changeMessageInput}
        submitMessageForm={submitMessageForm}        
      />
    </>
  )
}

export default Messages
