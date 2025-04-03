import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav>
        <div className="p-3 d-flex flex-row justify-content-between align-items-center ">
          <div>
            <Link to="/" style={{ color: "#D3D4D5" }} className="home-underline">
              <h1>Let's get cooking 🍳</h1>
            </Link>
          </div>
          <div className="d-flex  gap-2 originalMenu">
            <Link to="/Favourites" className="btn btn-light ">
              Favourites
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
