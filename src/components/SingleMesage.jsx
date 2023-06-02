
import {personal} from "../data/personal.js";
export default function SingleMessage({owner, message, avatar}) {
    let className = "single-message";
    let chatavatar = avatar;
    if (owner) {
        className = className.concat(" owner")
        chatavatar = personal.avatar;
    }
    return (
      <div className={className}>
          <img src={chatavatar} alt="avatar" />
          <div>{message}</div>
      </div>
    );
}