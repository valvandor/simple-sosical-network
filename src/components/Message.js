import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import './Message.css'

function Message(props) {
  return (
    <List
      className="message-card">
      <ListSubheader className="message-card__author">
        { props.author }
      </ListSubheader>
      <ListItem className="message-card__text">
        { props.text }
      </ListItem>
    </List>
  );
}

export default Message;