// import "./MessageForm.css"
import { FormControl, TextField, Button} from "@mui/material";


function MessageForm(props) {
  return ( 
    <FormControl
      fullWidth
    >
      <TextField 
        inputRef={textFieldRef => textFieldRef && textFieldRef.focus()}
        label="Your message" 
        variant="outlined" 
        onChange={props.changeMessageInput}
        value={props.newMessageText}
      />
      <Button 
        onClick={props.submitMessageForm} 
        variant="contained"
      >Send
      </Button>
    </FormControl>
   );
}

export default MessageForm;