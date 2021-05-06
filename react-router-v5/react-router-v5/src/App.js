import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const HelloWorld = () => (
  <h1>Hello World</h1>
)

const Products = () => (
  <h1>Products</h1>
)

function App() {
  return (
    <Router>
      <Route path='/' exact component={() => (<h1>Home with component</h1>)}/>
      <Route path='/products' render={Products}/>
      <Route path='/another'>
        <h1>This is the another way</h1>
      </Route>
    </Router>
  );
}


export default App;
