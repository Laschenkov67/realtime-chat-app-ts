import React, {useEffect, useState} from 'react'
import queryString from 'query-string';
import io from "socket.io-client";

interface ChatProps {
    location: any;
}

let socket;

const Chat:React.FC<ChatProps> = ({ location }) => {
    const [name, setName] = useState<string>("");
    const [room, setRoom] = useState<string>("");
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const {name: any, room: string} = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        console.log(socket);

    }, [ENDPOINT, location.search]);

    return (
        <div>
            Chat
        </div>
    )
}

export default Chat
