import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat"/>
            <ChatScreen/>
          </Route>
          <Route path="/chat">
            <Header backButton="/"/>
            <Chats/>
          </Route>
          <Route path="/">
            <Header />
            <TinderCards/>
            <SwipeButtons />
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
