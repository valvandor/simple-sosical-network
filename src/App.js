import './App.css';
import Message from './components/Message';

const msgContent = "Hello world"

function App() {
  return (
    <div className="App">
      <Message text={msgContent}/>
    </div>
  );
}

export default App;
