import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ title, pathname }) => {
  return (
    <div className="navContainer">
      <div className="topNavContainer">
        <h1 className="navTitle">DEMO Streaming</h1>
        <ul type="none">
          <li className="liLogin">Log in</li>
          <li className="freeTrial">Start your free trail</li>
        </ul>
      </div>
      <div className="bottomNavContainer">
        <h2>{title}</h2>
        {pathname != "/" && (
          <Link to={"/"} className="homeLink">
            <h2>Home</h2>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
