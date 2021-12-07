import List from '@mui/material/List';
import Chat from './Chat';
import "./ChatList.css"

function ChatList(props) {
  return ( 
    <List className="chat-list" disablePadding>
      {props.chatList.map((chat) => 
        <Chat 
          key={chat.id}
          name={chat.name}
        />
      )}
    </List>
  );
}

export default ChatList;