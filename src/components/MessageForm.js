function MessageForm(props) {

  return ( 
    <form onSubmit={props.onSubmitMessageForm} name="messageForm">
      <input type="text" onChange={props.onChangeMessageForm} value={props.newMessageText}/>
      <input type="submit" value="Send"/>
    </form>
   );
}

export default MessageForm;