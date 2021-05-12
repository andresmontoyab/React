# React Router

* [Getting Start](#Getting-Start)
* [Route](#Route)
  * [Route Parameters](#Route-Parameters)
  * [Ways to use Route](#Ways-to-use-Route)
* [Switch](#Switch)
* [Path Parameters](#Path-Parameters)
* [Query Parameters](#Query-Parameters)
* [Navigation](#Navigation)
  * [Common Approach](#Common-Approach)
  * [Link](#Link)
  * [NavLink](#NavLink)
  * [Redirect](#Redirect)
* [History](#History)


## Getting Start

React router is a tool that can help us to redirect pages in base of the url.

In order to start with react router we first must installed with the next command.

```sh
npm install react-router-dom
```

## Route

Inside of router only must be one element (div)

Route is another tool that let us relate a specific path with a component

```JSX
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  renderDummy = () => <h1>Dummy</h1>;
  renderCustomers = () => <h1>Customers</h1>;
  renderCustomerWithDNI = () => <h1> This is a customer with DNI</h1>;
  renderNewCustomer = () => <h1> This is a new customer </h1>;
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={this.renderDummy}></Route>
          <Route exact path="/customers" component={this.renderCustomers}></Route>
          <Switch>
            <Route exact path="/customers/new" component={this.renderNewCustomer}></Route>
            <Route exact path="/customers/:dni" component={this.renderCustomerWithDNI}></Route>
          </Switch>
        </div>
      </Router>
    );
  };
}
```

It is important to highlight what is the above code doing: 

1. Route: Basically works to move among different components.
2. exact: Only one Route could match the url, that means that only one component is going to be show
3. Switch: Only one the components inside of the switch is going to be show, the application is going to choose the one that matches with the
specification.

### Route Parameters

There are some react route parameters that we have to explain:
  - exact : This parameter it is very useful when we have multiples similar urls, but we need to map just if the url is exact the same.
  - strict : If exist a back slash at the end  so "/customer" is going to be different than  "/customer/"
  - match : match is use if we have wildcard in our url "/customers/:dni" where dni could be any kind of number
  - sensitive: With the sensitive property we define that our path is going to be sensitive to lower/upper case

### Ways to use Route

```JSX
  const App = () => {
  return (
    <Router>
      <Route path='/' exact component={() => (<h1>Home with component</h1>)}/>
      <Route path='/products' render={Products}/>
      <Route path='/another'>
        <h1>This is the another way</h1>
      </Route>
    </Router>
  )};
```

1. The first approach using component is going to render every time the create.Component method.

2. The second approach using render is recommended when we use an array function as component

3. the third way to use Route is with prop children.

## Switch

Is very use when routes that can be ambiguos, with swicht it always evaluate the first result that matches

```jsx
<Switch>
  <Route path="/customers/new" component={NewCustomerContainer}></Route>
  <Route path="/customers/:dni" render={props => <CustomerContainer dni={props.match.params.dni} />}></Route>
</Switch>
```

## Path Parameters

Usually when we are changing from one component to another component we need to send information or parameters, also when we go to a specific ```url``` we need to receive special data, now we are going to see how to send and receive information using react router.

```jsx
const CategoryProducts = ({match}) => {
  return (
      <h1>Categoria Productos {match.params.category} with id {match.params.id}</h1>
  )
}


function PlayingWithRouter() {
  return (
    <Router>
        <Route path='/products' exact render={Products}/>
        <Route path='/products/:category/:id?' render={CategoryProducts}/>
    </Router>
  );
}
```

Let's see what the above code does.

1. There are two mapped routes ```/products```  and ```/products/:category/:id?'```
2. The first route is generic, does not receive any parameter
3. The second route receive two parameters category and id, the symbol ```?``` means that that parameter is optional
4. If you see the CategoryProducts there is a prop called ```match``` that we can use to retrieve those properties
5. In ```match.params.name_property``` you are going to find the values passed as parameter

## Query Parameters

Query Parameters are the second option to send information to the ```url``` that we need to render

Query params is when we pass some queries in the ur like ```url?property=value&property2=value2```

So keep in mind that in order to use query params we need the symbol ```?``` and if we want more that one property we can use the ```?```.

```jsx
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

function PlayingWithRouter() {
  return (
    <Router>
        <Route path='/books' exact render={Books}/>
    </Router>
  );
}

```

Let's analyse the above code that is using query parameters

1. In the PlayingWithRouter we just create one route ```/boook``` that is going to be mapped with the component ```Books```
2. Please keep in mind that this route does not have any params in the route definition.
3. Now let's say that we use the next url ```/books?price=500&size=M```, so there are two properties price and size
4. In order to retrieve those properties we can use the ```props.location.search``` property
5. In the ```Books``` Component we use the ```URLSearchParams``` interface, that interface let us transfor the incoming query params to every property.

## Navigation

We already talked about Router and Switch, those properties help us to map a ```url``` with a ```component```, nevertheless in order to re render the pages with the new component the path must change.

React router provide us another tools that let us change the path programatically, those tools are 

1. Link
2. NavLink

## Common Approach

The common way to navigate between different urls or paths using raw html was with the tag ```<nav>``` and ```<a>```, even that this method works good, it has a problem, if we click in a ```<a>``` then is going to re load all the page and that it is a performance issue

```html
<nav>
        <a href="/"> Nav Home</a>
        <a href="/another"> Nav Home Hola</a>
        <a href="/products"> Nav Products</a>
</nav>
```

## Link

React provides us a component that help us to navigate among paths but without reloading the all pages. This component is called ```<Link>```

Let's see an example:

```jsx
import React from 'react'
import {Link} from 'react-router-dom'

const SimpleNavegation = () => (
    <nav>
        <Link to="/"> Nav Home</Link>
        <Link to="/another"> Nav Home Hola</Link>
        <Link to="/products"> Nav Products</Link>
        <Link to={
            {
                pathname: '/products',
                search: '?order=name',
                state: {
                    'name': 'Andres',
                    'age': 25
                }
            }
        }> Complex Search</Link>
    </nav>
)

```

With the above code, we have navigation in our page without reloading!.

Please note that with our ```Link``` component we are able to send state a the new component to be showed.

## NavLink

The ```NavLink``` component is an extension of ```Link```, NavLink does everything that ```Link``` does but also it has some other properties that can help us in some scenarios

```jsx
const NavSimpleNavegation = () => (
    <nav>
        <NavLink exact activeStyle={NavActive} to="/"> Nav Home</NavLink>
        <NavLink activeStyle={NavActive} to="/another"> Nav Home Hola</NavLink>
        <NavLink 
            activeStyle={NavActive} 
            to="/products"> 
            Nav Products
        </NavLink>
    </nav>
)
```

In the above code there are some examples of the ```NavLink``` properties.

## Redirect

```Redirect``` is very similar to ```Link``` or ```NavLink``` but with ```Redirect``` we can move to another ```url``` programatically. Let's see an example

```jsx
const Profile = (props) => {
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
        <Route path='/profile' render={Profile}/>
        <Route path='/login' render={Login}/>
    </Router>
  );
}
```

1. We define two mapped route, ```Profile``` and ```Login```
2. When we are in ```Login``` we validate if the user is authenticated, for this example we hardcoded that No.
3. The application is always going to redirect to ```Login``` Component using the ```Redirect``` Component

## withRouter

It is a high order component that adds the properties match, location and history into the component, also when these properties change re-render the component.

```jsx
import {Route, withRouter } from 'react-router-dom';

handlerOnSubmitSuccess = () => {
    this.props.history.goBack();
}

handleOnBack = () => {
    this.props.history.goBack();
};


export default withRouter(connect(mapStateToProps, {
    fetchCustomers,
    updateCustomer,
    deleteCustomer
})(CustomerContainer));
```

In the above code there is an example of how to use the withRouter function in our components, also we see an example of the history property that let us move in the browser.

### History

History let us move to another url, and store the previous url in a stack. The history property has some usefull methods.
  - push  : go to a direction
  - replace  : replace the current direction with the new one
  - go(n) : Go n pages back or forward
  - goBack() : Go to the previous page
  - goForward() :  Go to the next page

```JSX
 handleOnClick = () => {
        console.log("handle on click");
        this.props.history.push('/customers')                         
}
```
In order to always have the history property inside our component we must use the withRouter feature from the react-router-dom.

```JSX
export default withRouter(HomeContainers);
```


