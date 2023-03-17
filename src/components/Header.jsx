import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul className="link-container">
      <li className="link">
        <Link to="/">Home</Link>
      </li>
      <li className="link">
        <Link to="/posts">Posts</Link>
      </li>
      <li className="link">
        <Link to="/about">About</Link>
      </li>
      <li className="link">
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
  );
};

export default Header;
