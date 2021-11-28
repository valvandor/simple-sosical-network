import { useState } from 'react';
import './App.css';
import Message from './components/Message';


function App() {

  const [messageList, setMessageList] = useState([]);
  const [newMessageText, setNewMessageText] = useState('');

  const onSubmitMessageForm = (event) => {
    event.preventDefault();
    if (newMessageText){
      const copyMessageList = [...messageList];
      copyMessageList.push({
        author: 'You',
        text: `${newMessageText}`
      });
      setMessageList(copyMessageList);
      setNewMessageText('')
    }
  }

  const onChangeMessageForm = (event) => {
    setNewMessageText(event.target.value);
  }

  return (
    <div className="App">
      <div className="message-list">
        {messageList.map((message) => 
          <Message 
            author={message.author}
            text={message.text}
          />
        )}
      </div> 

      <form onSubmit={onSubmitMessageForm} name="messageForm">
        <input type="text" onChange={onChangeMessageForm} value={newMessageText}/>
        <input type="submit" value="Send"/>
      </form>
    </div>
  );
};

export default App;
