import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
        <Route path="/chat">
            <h1>Im Chat</h1>
          </Route>
          <Route path="/">
            <TinderCards/>
          </Route>
        </Switch>
        {/* Header */}
        {/* Tinder Cards */}
        {/* Buttons */}

        {/* Chats */}
        {/* Individuals Chat Scren */}
      </Router>

    </div>
  );
}

export default App;
