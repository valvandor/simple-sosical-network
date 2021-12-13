import { useMessages } from '../hooks/useMessages';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import ChatList from './ChatList';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { MOCK_CHATS } from '../helpers/mockChats';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Chats(props) {
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

  const [chatList, setChatList] = useState(MOCK_CHATS)
  

  return ( 
    <BrowserRouter>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <ChatList 
            chatList={chatList} 
            parentPath={props.parentPath}
          />
        </Grid>
        <Grid item xs={8} container direction="column">
          <Switch>
            <Route exact path={`${props.parentPath}:chatId`}>
              <MessageList 
                chatList={chatList} 
              >
              </MessageList>
              <MessageForm 
                newMessageText={newMessageText}
                changeMessageInput={changeMessageInput}
                submitMessageForm={submitMessageForm}        
              />
            </Route>
            <Route path={`${props.parentPath}`}>
              <h6>Choose a chat</h6>
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </BrowserRouter>

   );
}


export default Chats;