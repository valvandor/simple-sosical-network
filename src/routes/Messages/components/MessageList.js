import { List } from '@mui/material';
import { Message } from './';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';


function MessageList(props) {
  const { chatId } = useParams();
  const [messageList, SetMessageList] = useState([]);

  useEffect(() => {
    SetMessageList(props.chatList.find(chat => chat.id === chatId).messages); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatId]);

  return ( 
    <List 
      sx={{overflowY:"scroll", height: "calc(100vh - 64px - 56px - 16px - 16px - 16px)"}}
      component="div"
    >
      {messageList.map((message) => 
        <Message 
          key={message.id}
          author={message.author}
          text={message.text}
        />
      )}
    </List> 
  );
}

export default MessageList;