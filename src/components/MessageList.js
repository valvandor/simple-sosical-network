import Message from './Message';


function MessageList(props) {
  return ( 
    <div className="message-list">
      {props.messageList.map((message) => 
        <Message 
          author={message.author}
          text={message.text}
        />
      )}
    </div> 
   );
}

export default MessageList;