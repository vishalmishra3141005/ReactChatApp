
// import {openChat} from "../data/openchat.js";
import {useContext} from "react";
import {OpenChatsContext} from "../contexts/OpenChatContext.js";
import {CurrentConvDispatchContext} from "../contexts/CurrentConvContext.js"

export default function Chat({name, avatar, message, contactId}) {

    const openChat = useContext(OpenChatsContext);
    const currConvDispatch = useContext(CurrentConvDispatchContext);

    const clickHandler = function(e) {
        for (let chat of openChat) {
            if (chat.id === contactId) {
                currConvDispatch({type: "new", new_chat: {...chat}});
                break;
            }
        }
    }

    return (
        <div onClick={clickHandler} className="chat">
            <img className="chat-img" src={avatar} alt="avatar" />
            <div className="chat-info">
                <span className="chat-heading">{name}</span>
                <span className="chat-content">{message.length > 15 ? message.substr(0, 15).concat('...') : message}</span>
            </div>
        </div>
    );
}