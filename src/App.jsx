

import Conversations from "./components/Conversations.jsx";
import Messages from "./components/Messages.jsx";
import {useReducer} from "react";

import { lastMessage } from "./data/lastmessage.js";
import { openChat} from "./data/openchat.js";

import {LastMessagesContext, LastMessagesDispatchContext} from "./contexts/LastMessageContext.js";
import {OpenChatsContext, OpenChatsDispatchContext} from "./contexts/OpenChatContext.js";
import {CurrentConv, CurrentConvDispatchContext} from "./contexts/CurrentConvContext.js";

function lastMessageReducer(lastMessages, action) {
    if (action.type === "new") {
        console.log("new last message......");
        console.log(action.message);
        return [
            ...lastMessages,
            action.message,
        ];
    } else if (action.type === "change") {
        const newLastMessages = [...lastMessages];
        for (let newLastMessage of newLastMessages) {
            if (newLastMessage.id === action.id) {
                newLastMessage.lastMessage = action.lastMessage;
                break;
            }
        }
        console.log(`new last message: ${newLastMessages}`);
        return newLastMessages;
    }

}

function openChatReducer(openChats, action) {
    if (action.type === 'new') {
        let newOpenChats = openChats.filter((openChat) => openChat.id !== action.id);
        newOpenChats.push(action.message);
        return newOpenChats;
    }
}

function currConvReducer(currConv, action) {
    if (action.type === "new") {
        return action.new_chat;
    }
}

export default function App() {


    const [lastMessages, lastMessagesDispatch] = useReducer(lastMessageReducer, lastMessage);
    const [openChats, openChatsDispatch] = useReducer(openChatReducer, openChat);
    const [currConv, currConvDispatch] = useReducer(currConvReducer, null);

    return (
      <>
          <LastMessagesContext.Provider value={lastMessages}>
              <LastMessagesDispatchContext.Provider value={lastMessagesDispatch}>
                  <OpenChatsContext.Provider value={openChats}>
                      <OpenChatsDispatchContext.Provider value={openChatsDispatch}>
                          <CurrentConv.Provider value={currConv}>
                              <CurrentConvDispatchContext.Provider value={currConvDispatch}>
                                  <div className="main-container">
                                      <Conversations />
                                      <Messages />
                                  </div>
                              </CurrentConvDispatchContext.Provider>
                          </CurrentConv.Provider>
                      </OpenChatsDispatchContext.Provider>
                  </OpenChatsContext.Provider>
              </LastMessagesDispatchContext.Provider>
          </LastMessagesContext.Provider>
      </>
    );
}