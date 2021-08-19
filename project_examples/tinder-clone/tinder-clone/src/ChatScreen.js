import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './ChatScreen.css'

function ChatScreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: 'Andres',
            image: '....',
            message: 'Hey Its me again'
        },
        {
            name: 'Mambo',
            image: 'https://images.pexels.com/photos/1124002/pexels-photo-1124002.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            message: 'Hiiiiiii Good Morning'
        },
        {
            message: 'How its everything Going!'
        },
        {
            name: 'Mambo',
            image: 'https://images.pexels.com/photos/1124002/pexels-photo-1124002.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            message: 'Goood Morning'
        },
    ])

    const onSubmit = e => {
        e.preventDefault();
        setMessages([...messages, {message: input}])
        setInput('')
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You match with Mambo</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__avatar"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}
            <form className="chatScreen__import">
                <input 
                    value={input}
                    onChange={e=> setInput(e.target.value)}
                    className="chatScreen__field" 
                    type="text"
                    placeholder="Type a message .."/>
                <button 
                    className="chatScreen__button"
                    type="submit"
                    onClick={onSubmit}>SEND</button>
            </form>
        </div>
    )
}

export default ChatScreen
