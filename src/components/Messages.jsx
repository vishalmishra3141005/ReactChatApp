
import Message from "./Message.jsx";
import Navbar from "./Navbar.jsx";
import Input from "./Input.jsx";

export default function Messages() {
    return (
        <div className="messages">
            <Navbar />
            <Message />
            <Input />
        </div>
    );
}