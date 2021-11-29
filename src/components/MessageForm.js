import "./MessageForm.css"

function MessageForm(props) {

  return ( 
    <form className="message-form" onSubmit={props.onSubmitMessageForm} name="messageForm">
      <input className="message-form__input" type="text" onChange={props.onChangeMessageForm} value={props.newMessageText}/>
      <input className="message-form__button" type="submit" value="Send"/>
    </form>
   );
}

export default MessageForm;