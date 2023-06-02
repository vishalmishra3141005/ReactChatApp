
import {useContext, useState, useRef} from "react";
import {OpenChatsDispatchContext} from "../contexts/OpenChatContext.js";
import {CurrentConv, CurrentConvDispatchContext} from "../contexts/CurrentConvContext.js";
import {LastMessagesDispatchContext} from "../contexts/LastMessageContext.js";

export default function Input() {

    const [currMessage, setCurrMessage] = useState('');
    const inputRef = useRef(null);

    const openChatsDispatch = useContext(OpenChatsDispatchContext);

    const currConv = useContext(CurrentConv);
    const currConvDispatch = useContext(CurrentConvDispatchContext);

    const lastMessagesDispatch = useContext(LastMessagesDispatchContext);

    const sendButtonHandler = function(e) {
        if (currMessage.length === 0)
            return;
        let newChat = {...currConv};
        let last = 0;
        if (newChat.messages.length !== 0)
            last = parseInt(newChat.messages[newChat.messages.length - 1].seq);
        last++;
        newChat.messages.push({"seq": last.toString(), "to": currMessage });

        lastMessagesDispatch({type: "change", id: newChat.id, lastMessage: currMessage});
        openChatsDispatch({type: "new", message: newChat});
        currConvDispatch({type: "new", new_chat: newChat});
        inputRef.current.value = '';
    }

    return (
        <div className="input-section">
            <textarea ref={inputRef} onChange={(e) => setCurrMessage(e.target.value)}/>
            <button onClick={sendButtonHandler} className="send-button">Send</button>
        </div>
    );
}