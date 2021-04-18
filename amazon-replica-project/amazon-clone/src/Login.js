import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="login">
            <Link to = "/">
            <img 
                className="login__logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>

            <div className="login__container">
                <h1> Sign in </h1>

                <form>
                    <h2>E-Mail</h2>
                    <input type="text"/>

                    <h2>Password</h2>
                    <input type="password"/>
                    <button className="login__signInButtom">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
                </p>
                <button className="login__registerButtom">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
