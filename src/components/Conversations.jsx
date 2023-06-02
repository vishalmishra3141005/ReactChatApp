
import Chat from "./Chat.jsx";
import AddIcon from "../assets/circle-plus-solid.svg";
import SearchIcon from "../assets/magnifying-glass-solid.svg";
import ContactList from "./ContactList.jsx";

import { LastMessagesContext } from "../contexts/LastMessageContext.js"
import {useContext, useState} from "react";

export default function Conversations() {
    // const [newContact, setNewContact] = useState(null);
    const [displayContactList, setDisplayContactList] = useState(false);

    const lastMessage = useContext(LastMessagesContext);
    console.log(lastMessage);
    const addConversationHandler = function(e) {
        setDisplayContactList(true);
    }

    return (
        <div className="conversations">

            <div className="searchbar">
                <img src={SearchIcon} alt="search-icon" />
                <input className="search" type="text" placeholder="Search for conversation"/>
            </div>
            <div className="add-conversation">
                <span>CONVERSATIONS</span>
                <img onClick={addConversationHandler} src={AddIcon} alt="add" />
                {displayContactList && <ContactList displayList={setDisplayContactList}/> }
            </div>
            <div className="chatlist">
                { lastMessage.map((message) => {
                    return <Chat
                        key={message.id}
                        name={message.name}
                        avatar={message.avatar}
                        message={message.lastMessage}
                        contactId={message.id}
                    />
                })}
            </div>
        </div>
    );
}