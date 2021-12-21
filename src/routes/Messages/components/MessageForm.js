import { FormControl, TextField, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';


function MessageForm(props) {
  return ( 
      <FormControl
        sx={{flexDirection:"row", 
            alignItems: "center",
            marginTop:"16px"
            }}
      >
        <TextField 
          inputRef={textFieldRef => textFieldRef && textFieldRef.focus()}
          label="Your message" 
          variant="outlined" 
          onChange={props.changeMessageInput}
          value={props.newMessageText}
          sx={{mr: "8px", flexGrow:'1'}}
        />
        <Button 
          onClick={props.submitMessageForm} 
          variant="contained"
          sx={{minWidth: "30px", marginRight:"16px"}}
        >
          <SendIcon />
        </Button>
      </FormControl>
   );
}

export default MessageForm;