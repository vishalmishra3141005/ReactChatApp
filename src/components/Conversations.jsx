
import Chat from "./Chat.jsx";
import AddIcon from "../assets/circle-plus-solid.svg";
import SearchIcon from "../assets/magnifying-glass-solid.svg";
import ContactList from "./ContactList.jsx";

import { LastMessagesContext } from "../contexts/LastMessageContext.js"
import {useContext, useEffect, useState} from "react";

export default function Conversations() {
    // const [newContact, setNewContact] = useState(null);
    const [displayContactList, setDisplayContactList] = useState(false);

    const lastMessage = useContext(LastMessagesContext);

    const [newLastMessage, setNewLastMessage] = useState(lastMessage);

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setNewLastMessage(lastMessage);
    }, [lastMessage]);

    console.log(lastMessage);

    const addConversationHandler = function(e) {
        setDisplayContactList(true);
    }

    const searchClickHandler = function(e) {
        let tempNew = []
        for (let lastM of lastMessage) {
            if (lastM.name.startsWith(searchTerm)) {
                tempNew.push(lastM);
            }
        }
        setNewLastMessage(tempNew);
    }



    const searchHandler = function(e) {
        setSearchTerm(e.target.value);
        const st = e.target.value;

        let tempNew = []
        for (let lastM of lastMessage) {
            if (lastM.name.startsWith(st)) {
                tempNew.push(lastM);
            }
        }
        setNewLastMessage(tempNew);

    }


    return (
        <div className="conversations">

            <div className="searchbar">
                <img onClick={searchClickHandler} src={SearchIcon} alt="search-icon" />
                <input onChange={searchHandler} className="search" type="text" placeholder="Search for conversation"/>
            </div>
            <div className="add-conversation">
                <span>CONVERSATIONS</span>
                <img onClick={addConversationHandler} src={AddIcon} alt="add" />
                {displayContactList && <ContactList setNewLast={setNewLastMessage} displayList={setDisplayContactList}/> }
            </div>
            <div className="chatlist">
                { newLastMessage.map((message) => {
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