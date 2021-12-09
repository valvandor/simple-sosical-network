import { List } from '@mui/material';
import Message from './Message';

function MessageList(props) {
  return ( 
    <List 
      sx={{overflowY:"scroll", height: "calc(100vh - 64px - 56px - 16px - 16px - 16px)"}}
      component="div"
    >
      {props.messageList.map((message) => 
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