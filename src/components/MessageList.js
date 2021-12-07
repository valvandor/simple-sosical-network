import List from '@mui/material/List';
import Message from './Message';
import './MessageList.css'

function MessageList(props) {
  return ( 
    <List className="message-list">
      {props.messageList.map((message) => 
        <Message 
          author={message.author}
          text={message.text}
        />
      )}
    </List> 
   );
}

export default MessageList;