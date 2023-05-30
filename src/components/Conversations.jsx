
import Chat from "./Chat.jsx";
import AddIcon from "../assets/circle-plus-solid.svg";
import SearchIcon from "../assets/magnifying-glass-solid.svg";


export default function Conversations() {
    return (
        <div className="conversations">
            <div className="searchbar">
                <img src={SearchIcon} alt="search-icon" />
                <input className="search" type="text" placeholder="Search for conversation"/>
            </div>
            <div className="add-conversation">
                <span>CONVERSATIONS</span>
                <img src={AddIcon} alt="add" />
            </div>
            <div className="chatlist">
                <Chat />
                <Chat />
                <Chat />
            </div>
        </div>
    );
}