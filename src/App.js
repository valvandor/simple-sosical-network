import './App.css';
import Message from './components/Message';

const msgContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vitae adipisci illum perferendis nulla quisquam, iure inventore ipsa officiis id porro aspernatur nam quo maiores. Distinctio minima rem maiores incidunt."

function App() {
  return (
    <div className="App">
      <Message text={msgContent}/>
    </div>
  );
}

export default App;
