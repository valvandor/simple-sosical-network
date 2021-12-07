import { Button } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import "./Chat.css"

function Chat(props) {
  return ( 
    <ListItem className="chat-item">
      <Button className="chat-item__button">
        {props.name}
      </Button>
    </ListItem>
  );
}

export default Chat;