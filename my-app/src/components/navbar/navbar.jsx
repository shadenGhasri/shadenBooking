import { useNavigate } from "react-router-dom";
import "./navbar.scss";

const Nav = ({ user }) => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login");
  };

  const handleLouOut = () => {
    navigate("/logout");
  }

  return (
    <nav className="navbar navbarBox px-4">
      <div className="navContainer">
        <span className="logo">ShadenBooking</span>
        <div className="navItems">
          {!user ? (
            <>
              <button className="navButton">Register</button>
              <button className="navButton" onClick={handleSignIn}>
                Sign in
              </button>
            </>
          ) : (
            <>
              <button className="navButton" onClick={handleLouOut}>Log Out</button>
              <button className="navButton">
                welcome
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
