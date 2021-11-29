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
    if (messageList.length){
      if (messageList[messageList.length - 1].author === 'You'){
        addMessageFromBot()
      }
    }
  });
  

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