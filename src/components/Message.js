function Message(props) {
  return (
    <div className="message">
      <p className="message__desc">{props.text}</p>
    </div> 
  );
}

export default Message;