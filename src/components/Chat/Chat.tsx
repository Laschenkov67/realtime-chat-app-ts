import React, {useState} from 'react'

const Chat: React.FC = () => {

    const [name, setName] = useState<string>("");
    const [room, setRoom] = useState<string>("");

    return (
        <div>
            Chat
        </div>
    )
}

export default Chat
