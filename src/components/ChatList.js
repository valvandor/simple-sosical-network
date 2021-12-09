import { List, Container } from '@mui/material';
import Chat from './Chat';

function ChatList(props) {
  return ( 
    <Container>
      <List 
        disablePadding
        sx={{overflowY: "scroll", height: "calc(100vh - 64px)"}}
      >
        {props.chatList.map((chat) => 
          <Chat 
            key={chat.id}
            name={chat.name}
          />
        )}
      </List>
    </Container>
  );
}

export default ChatList;