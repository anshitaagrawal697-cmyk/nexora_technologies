import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
    
      <div className="logo">
        <img src={logo} alt="logo" className="logo-img"/>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link active">Home</Link>  
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/service" className="nav-link">Services</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
      <div className="nav-btn">
        <Link to="/contact" className="btn-start">
          Get Started
        </Link>
      </div>
     
      

    </nav>
  );
}

export default Navbar;

