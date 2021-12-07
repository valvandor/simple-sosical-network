import { FormControl, TextField, Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import "./MessageForm.css"


function MessageForm(props) {
  return ( 
    <FormControl
      fullWidth
      className="message-form"
    >
      <TextField 
        inputRef={textFieldRef => textFieldRef && textFieldRef.focus()}
        label="Your message" 
        variant="outlined" 
        onChange={props.changeMessageInput}
        value={props.newMessageText}
        className="message-form__input"
      />
      <Button 
        onClick={props.submitMessageForm} 
        variant="contained"
      >
        <SendIcon />
      </Button>
    </FormControl>
   );
}

export default MessageForm;