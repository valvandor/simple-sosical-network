import { useMessages } from '../hooks/useMessages';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import ChatList from './ChatList';
import { useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import "./MessageApp"

function MessageApp() {
  // for testing ChatList component 
  const chatList = [{id: "1", name: "Peter"}, {id: "2", name: "Max"}];

  const [
    {messageList, newMessageText}, 
    {changeMessageInput, submitMessageForm, sendMessage}
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
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Container className="chat-block">
            <ChatList chatList={chatList}/>
          </Container>
        </Grid>
        <Grid item xs={8}>
          <Container className="message-block">
            <MessageList messageList={messageList}/> 
            <MessageForm 
              newMessageText={newMessageText}
              changeMessageInput={changeMessageInput}
              submitMessageForm={submitMessageForm}        
              />
          </Container>
        </Grid>
        
      </Grid>
    </>
   );
}


export default MessageApp;