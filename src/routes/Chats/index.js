import { useMessages } from '../../hooks/useMessages';

import { ChatList } from './components';
import { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { MOCK_CHATS } from '../../helpers/mockChats';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Messages from '../Messages';

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
      <Grid container>
        <Grid item xs={4}>
          <ChatList 
            chatList={chatList} 
            parentPath={props.parentPath}
          />
        </Grid>
        <Grid item xs={8} container direction="column" component={Container}>
          <Switch>
            <Route exact path={`${props.parentPath}:chatId`}>
              <Messages 
                chatList={chatList}
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