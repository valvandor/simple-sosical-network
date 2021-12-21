import { Button } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';

function Chat(props) {

  return ( 
    <ListItem>
      <Button 
        sx={{justifyContent: 'left', width: "100%"}}
        component={Link}
        to={`${props.parentPath}${props.chatId}`}
      >
        {props.name}
      </Button>
    </ListItem>
  );
}

export default Chat;