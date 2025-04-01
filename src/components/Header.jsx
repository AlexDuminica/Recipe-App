import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav>
        <div className="p-3 d-flex flex-row justify-content-between align-items-center">
          <div>
            <Link to="/" style={{ color: "#D3D4D5" }} className="home-underline">
              <h2>Let's get cooking 🍳</h2>
            </Link>
          </div>
          <div className="d-flex  gap-2">
            <Link to="/" className="btn btn-light">
              Home
            </Link>
            <Link to="/Recipes" className="btn btn-light ">
              List of Recipes
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
