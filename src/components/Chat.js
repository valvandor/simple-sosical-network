import { Button } from '@mui/material';
import ListItem from '@mui/material/ListItem';

function Chat(props) {
  return ( 
    <ListItem>
      <Button sx={{justifyContent: 'left', width: "100%"}}>
        {props.name}
      </Button>
    </ListItem>
  );
}

export default Chat;