import React from 'react'
import Chat from './Chat'
import './Chats.css'

function Chats() {
    return (
        <div className="chats">
            <Chat
                name ="Andres"
                message="Hey buddy"
                timestamp="40 seconds ago"
                profilePic="https://images.pexels.com/photos/3772352/pexels-photo-3772352.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            />
            <Chat
                name ="Mambis"
                message="I want to eat"
                timestamp="50 seconds ago"
                profilePic="https://images.pexels.com/photos/1124002/pexels-photo-1124002.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Chat
                name ="Gelen"
                message="Dont Sleep in Beed"
                timestamp="50 seconds ago"
                profilePic="https://images.pexels.com/photos/220974/pexels-photo-220974.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            />
        </div>
    )
}

export default Chats
