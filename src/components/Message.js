import './Message.css'

function Message(props) {
  return (
    <div className="message-card">
        <p className="message-card__author">{ props.author }</p>
        <p className="message-card__text">{ props.text }</p>
      </div>
  );
}

export default Message;