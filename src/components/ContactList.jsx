
import {contacts} from "../data/contacts.js";
import {CurrentConvDispatchContext} from "../contexts/CurrentConvContext.js";
import {LastMessagesContext, LastMessagesDispatchContext} from "../contexts/LastMessageContext.js";
import {OpenChatsContext} from "../contexts/OpenChatContext.js";

import {useContext} from "react";

export default function ContactList({displayList, setNewLast}) {
    const lastMessages = useContext(LastMessagesContext);
    const lastMessagesDispatch = useContext(LastMessagesDispatchContext);

    const openChats = useContext(OpenChatsContext);

    const currConvDispatch = useContext(CurrentConvDispatchContext);


    const clickHandler = function(contact) {

        // console.log(contact);
        let found = false;

        for (let lastMessage of lastMessages) {
            if (lastMessage.id === contact.id) {
                found = true;
            }
        }



        if (!found) {
            lastMessagesDispatch({type: "new", message: {
                    ...contact,
                    "lastMessage": "",
                },
            });
            const message = { ...contact, "lastMessage": ""}
            setNewLast([...lastMessages, message]);
        }

        for (const openChat of openChats) {
            if (openChat.id === contact.id) {
                currConvDispatch({type: "new", new_chat: {...openChat}});
                break;
            }
        }
        displayList(false);

    }

    return (
        <div className="contact-list">
            <h4>Contact List</h4>
            {
                contacts.map((contact) =>
                    <>
                        <div onClick={(e) => clickHandler(contact)} className="ind-contact" key={contact.id}>
                            <img src={contact.avatar} alt="avatar"/>
                            <span>{contact.name}</span>
                        </div>
                    </>
                )
            }
        </div>
    );
}