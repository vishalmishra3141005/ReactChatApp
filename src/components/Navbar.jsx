
export default function Navbar({ name, avatar}) {
    return (
        <div className="navbar">
            <img src={avatar} alt="avatar" />
            <span>{name}</span>
        </div>
    );

}