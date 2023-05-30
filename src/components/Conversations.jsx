
import Chat from "./Chat.jsx";


export default function Conversations() {
    return (
        <div className="conversations">
            <div className="searchbar">
                <input className="search" type="text" placeholder="Search for conversation"/>
            </div>
            <div>
                <span>CONVERSATIONS</span>
                <img alt="add" />
            </div>
            <div className="chatlist">
                <Chat />
                <Chat />
                <Chat />
            </div>
        </div>
    );
}