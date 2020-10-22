import React, {Component} from 'react';

class LogoutComponent extends Component {
    render() {
        return (
            <div className="logout">
                <h1>You're logged out</h1>
                <div className="container">
                    Thank you for using our application
                </div>
            </div>                
        )
    }
}

export default LogoutComponent;