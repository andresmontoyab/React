# React Router

## React Router

React router is a tool that can help us to redirect pages in base of the url.

### First Step React Router

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

# Navigation

We already talked about Router and Switch, those properties help us to map a ```url``` with a ```component```, nevertheless in order to re render the pages with the new component the path must change.

React router provide us another tools that let us change the path programatically, those tools are 

1. Link
2. NavLink

## <nav> and <a>

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

## Link and NavLink

The only difference between the two previous element is that with navLink we can customize a little bit.

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

### History property

History let us move to another url, and store the previous url in a stack. The history property has some usefull methods.
  - push  : go to a direction
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


