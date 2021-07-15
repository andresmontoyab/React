import React from 'react'
import {Button} from '@material-ui/core'
import './Login.css'
import { auth, provider } from './firebase'

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => console.log(result))
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img 
                    src="https://i.pinimg.com/474x/43/50/5e/43505edfd3b0a3aaabf308e2b6d0875e.jpg" 
                    alt=""
                />
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button type="submit" onClick={signIn}>
                    Sign in with Google
                </Button>
            </div> 
        </div>
    )
}

export default Login
