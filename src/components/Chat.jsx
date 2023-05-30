
export default function Chat() {
    return (
        <div className="chat">
            <img className="chat-img" src="https://100k-faces.glitch.me/random-image" alt="avatar" />
            <div className="chat-info">
                <span className="chat-heading">Name</span>
                <span className="chat-content">Message</span>
            </div>
        </div>
    );
}