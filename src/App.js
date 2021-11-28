import { useState } from 'react';
import './App.css';
import Message from './components/Message';


function App() {

  const [messageList, setMessageList] = useState([]);

  const addMessage = () => {
    const copyMessageList = [...messageList];
    copyMessageList.push({
      author: 'somebody',
      text: 'some text'
    });
    setMessageList(copyMessageList);
  };

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

      <div>
        <button onClick={addMessage}>Send</button>
      </div>
    </div>
  );
};

export default App;
