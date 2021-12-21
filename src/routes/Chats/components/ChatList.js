import { List } from '@mui/material';
import { Chat } from './';

function ChatList(props) {
  return ( 
    <List 
      disablePadding
      sx={{overflowY: "scroll", height: "calc(100vh - 64px)"}}
    >
      {props.chatList.map((chat) => 
        <Chat 
          key={chat.id}
          chatId={chat.id}
          parentPath={props.parentPath}
          name={chat.name}
        />
      )}
    </List>
  );
}

export default ChatList;