import React, {Component} from 'react';
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import ErrorComponent from './ErrorComponent';
import ListTodosComponent from './ListTodosComponent';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import LogoutComponent from './LogoutComponent';
import AuthenticatedRoute from './AuthenticatedRoute';
import TodoComponent from './TodoComponent';


class TodoApp extends Component {
    render() {
        return (
            <div className="todoApp">
                <Router>
                    <HeaderComponent></HeaderComponent>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}></Route>
                        <Route path="/login" component={LoginComponent}></Route>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}></AuthenticatedRoute>
                        <AuthenticatedRoute path="/todos/:id" component={TodoComponent}></AuthenticatedRoute>
                        <AuthenticatedRoute path="/todos" component={ListTodosComponent}></AuthenticatedRoute>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}></AuthenticatedRoute>
                        <Route component={ErrorComponent}></Route>
                    </Switch>
                    <FooterComponent></FooterComponent>
                </Router>
            </div>
        )
    }
}

export default TodoApp;