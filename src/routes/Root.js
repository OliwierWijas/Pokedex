import "../index.css";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <nav style={{display: 'flex'}}>
        <div className="link">
          <Link className="link-decoration" to="/">
            Pokedex
          </Link>
        </div>
        <div className="link">
          <Link className="link-decoration" to="/AboutMe">
            About
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
