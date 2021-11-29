import { useMessages } from '../hooks/useMessages';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import { useEffect } from 'react';

function MessageApp() {
  const [
    {messageList, newMessageText}, 
    {onChangeMessageForm, onSubmitMessageForm, addMessageFromBot}
  ] = useMessages()

  useEffect(() => {
    if (!messageList.length){
      return
    }
    if (messageList[messageList.length - 1].author === 'You'){
      const timerId = setTimeout(() => {
        addMessageFromBot()
      }, 1500)
      return () => {
        clearTimeout(timerId)
      }
    }
  }, [messageList, addMessageFromBot]);
  

  return ( 
    <>
      <MessageList messageList={messageList}/> 
      <MessageForm 
        newMessageText={newMessageText}
        onChangeMessageForm={onChangeMessageForm}
        onSubmitMessageForm={onSubmitMessageForm}        
      />
    </>
   );
}


export default MessageApp;