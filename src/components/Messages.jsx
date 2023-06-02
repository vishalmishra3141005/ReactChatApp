
import Message from "./Message.jsx";
import Navbar from "./Navbar.jsx";
import Input from "./Input.jsx";
import Empty from "./Empty.jsx";

import {CurrentConv} from "../contexts/CurrentConvContext.js";
import {useContext} from "react";

export default function Messages() {

    let currConv = useContext(CurrentConv);

    if (!currConv) {
        return <Empty />
    }
    return (
        <div className="messages">
            <Navbar name={ currConv.name} avatar={ currConv.avatar } />
            <Message messages={currConv.messages} avatar={currConv.avatar} />
            <Input />
        </div>
    );
}