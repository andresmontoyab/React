import React, { useEffect, useState } from 'react'
import './Chat.css'
import { Avatar, IconButton} from '@material-ui/core'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import AttachFile from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import { useParams } from 'react-router-dom'
import db from './firebase'


function Chat() {
    const [seed, setSeed] = useState('')
    const [input, setInput] = useState('')
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");

    useEffect(() => {
        console.log(roomId)
        if (roomId) {
            db.collection('rooms').doc(roomId)
            .onSnapshot(snapshot => (
                    setRoomName(snapshot.data().name)
                ))
        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input)
        setInput('')
    }


    return (
        <div className="chat">
            <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                    <span className='chat_name'> Andres Montoya</span>
                    Hey Guys
                    <span className='chat_timestamp'>3:53pm</span>
                </p>
                <p className="chat__message chat__receiver">
                    <span className='chat_name'> Andres Montoya</span>
                    Whats upp
                    <span className='chat_timestamp'>3:53pm</span>
                </p>
                <p className="chat__message">Hey Guys</p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form >
                    <input type="text" value={input} placeholder="Type a message" onChange={e => setInput(e.target.value)}/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
