import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
        
        {/* adding personal token */}
      </div>
    </div>
  );
}

export default App;
