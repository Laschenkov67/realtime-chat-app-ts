import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';


interface ChatProps {
    location: any;
}

let socket: any;

const Chat:React.FC<ChatProps> = ({ location }) => {
    const [name, setName] = useState<string>("");
    const [room, setRoom] = useState<string>("");
    const [users, setUsers] = useState<Array<string>>([]);
    const [message, setMessage] = useState<string>('');
    const [messages, setMessages] = useState<Array<string>>([]);

    //Точка доступа
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const {name: any, room: string} = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        console.log(socket);

    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message:string) => {
            setMessages([...messages, message ]);
        });

        socket.on('roomData', ({ users }:{users: string[]}) => {
            setUsers(users);
        })

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [messages])

    const sendMessage = (event:any) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            {/* <TextContainer users={users}/> */}
        </div>
    )
}

export default Chat
