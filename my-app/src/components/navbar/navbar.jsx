import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar d-flex justify-content-center">
      <div className="container d-flex justify-content-between align-items-center text-light">
        <span className="logo">ShadenBooking</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
