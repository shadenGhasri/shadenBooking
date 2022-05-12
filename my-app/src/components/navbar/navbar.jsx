import { useNavigate } from "react-router-dom";
import "./navbar.scss";


const Nav = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate("/login")
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">ShadenBooking</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton"  onClick={handleClick} >Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
