
import SingleMessage from "./SingleMesage.jsx";

export default function Message({ messages, avatar}) {

    return (
        <div className="message">
            { messages.map((message) => {
                if ("to" in message) {
                    return <SingleMessage
                        key={message.seq}
                        owner={true}
                        message={message["to"]}
                        avatar={avatar}
                    />
                } else {
                    return <SingleMessage
                        key={message.seq}
                        owner={false}
                        message={message["from"]}
                        avatar={avatar}
                    />
                }
            })}
        </div>
    );
}