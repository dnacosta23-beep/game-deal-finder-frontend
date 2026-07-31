import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        🎮 SEARCH GAMES
      </Link>

      <Link to="/saved">
        💾 SAVED GAMES
      </Link>
    </nav>
  );
}

export default Navbar;