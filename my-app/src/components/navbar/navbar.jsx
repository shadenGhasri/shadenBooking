import { useNavigate } from "react-router-dom";
import "./navbar.scss";

const Nav = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <nav className="navbar navbarBox px-4">
      <div className="navContainer">
        <span className="logo">ShadenBooking</span>
        <div className="navItems">
          <button className="navButton">LogOut</button>
          <button className="navButton" onClick={handleClick}>
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
