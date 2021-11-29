import { useMessages } from '../hooks/useMessages';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

function MessageApp() {
  const [{messageList, newMessageText}, {onChangeMessageForm, onSubmitMessageForm}] = useMessages()

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