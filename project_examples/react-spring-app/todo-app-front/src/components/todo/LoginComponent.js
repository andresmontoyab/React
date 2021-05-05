import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService';

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'Andres',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.loginClick = this.loginClick.bind(this);
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                    <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalidad Credentials</div>}
                    {this.state.showSuccessMessage && <div>Valid Login</div>}
                    User Name : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                    Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                    <button className="btn" onClick={this.loginClick}>Login</button>
                </div>
             </div>
        )
    }

    loginClick() {
        var {username, password} = this.state;
            AuthenticationService.executeJwtAuthentication(username, password).then((response) => {
                AuthenticationService.registerSuccesfullLoginWithToken(username, response.data.token);
                this.props.history.push(`/welcome/${username}`)
                this.setState({showSuccessMessage:true})
                this.setState({hasLoginFailed:false})
                }).catch(() => {
                this.setState({showSuccessMessage:false})
                this.setState({hasLoginFailed:true})
            })
    }


    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })            
    }
}



export default LoginComponent;