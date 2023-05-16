import "./navbar.css";

const Navbar = ({ title }) => {
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
      </div>
    </div>
  );
};

export default Navbar;
