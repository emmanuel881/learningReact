import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My react blog site</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            background: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
