import { useMessages } from '../hooks/useMessages';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import { useEffect } from 'react';

function MessageApp() {
  const [
    {messageList, newMessageText}, 
    {onChangeMessageInput, onSubmitMessageForm, sendMessage}
  ] = useMessages()

  useEffect(() => {
    if (!messageList.length){
      return
    }
    if (messageList[messageList.length - 1].author === 'You'){
      const timerId = setTimeout(() => {
        sendMessage('R2D2', "I don't get you");
      }, 1500)
      return () => {
        clearTimeout(timerId)
      }
    }
  }, [messageList, sendMessage]);
  

  return ( 
    <>
      <MessageList messageList={messageList}/> 
      <MessageForm 
        newMessageText={newMessageText}
        onChangeMessageInput={onChangeMessageInput}
        onSubmitMessageForm={onSubmitMessageForm}        
      />
    </>
   );
}


export default MessageApp;