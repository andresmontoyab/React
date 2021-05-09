import './App.css';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import Navigation from './Navigation';
import NavNavigation from './NavNavigation';

const HelloWorld = () => (
  <h1>Hello World</h1>
)

const Products = (props) => {
    console.log(props.match)
    return (
        <h1>Products</h1>
    )
}

const Books = (props) => {
  const query = new URLSearchParams(props.location.search)
  const price = query.get('price')
  const size = query.get('size')
  return (
    <div>
      <h1>Books</h1>
      <div>Price: {price}</div>
      <div>Size: {size}</div>
    </div>
      
  )
}

const CategoryProducts = ({match}) => {
  console.log(match)
  return (
      <h1>Categoria Productos {match.params.category} with id {match.params.id}</h1>
  )
}

const Perfil = (props) => {
  const isAuth = false
  return isAuth
    ? <h2>Welcome to your Profile</h2>
    : <Redirect to='/login'/>
}

const Login = () => (
  <h1>Plase Login</h1>
)


function PlayingWithRouter() {
  return (
    <Router>
        {/*<Navigation></Navigation>*/}
        <NavNavigation></NavNavigation>
        <Route path='/' exact component={() => (<h1>Home with component</h1>)}/>
        <Route path='/books' exact render={Books}/>
        <Route path='/products' exact render={Products}/>
        <Route path='/products/:category/:id?' render={CategoryProducts}/>
        <Route path='/profile' render={Perfil}/>
        <Route path='/login' render={Login}/>
        <Route path='/another'>
            <h1>This is the another way</h1>
        </Route>
    </Router>
  );
}


export default PlayingWithRouter;
