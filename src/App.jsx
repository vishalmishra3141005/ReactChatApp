
import Conversations from "./components/Conversations.jsx";
import Messages from "./components/Messages.jsx";


export default function App() {
    return (
      <>
          <div className="main-container">
              <Conversations />
              <Messages />
          </div>
      </>
    );
}