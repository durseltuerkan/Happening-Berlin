import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa"; // Beispiel für das Dropdown-Icon

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (e) => {
    e.preventDefault(); // Verhindert das Schließen des gesamten Menüs
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategoryClick = () => {
    setIsDropdownOpen(false); // Schließt das Dropdown-Menü, wenn auf eine Kategorie geklickt wird
  };

  return (
    <div className="navbar">
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/list" onClick={() => setIsMenuOpen(false)}>
              Alle Events
            </NavLink>
          </li>
          {/* Kategorien Link mit Icon und Dropdown */}
          <li className="category">
            <NavLink to="#" onClick={toggleDropdown} className="category-link">
              Kategorien <FaAngleDown className="dropdown-icon" />
            </NavLink>
            {isDropdownOpen && (
              <ul className="submenu">
                <li>
                  <NavLink
                    to="/category/music"
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleCategoryClick(); // Schließt das Dropdown beim Klicken auf eine Kategorie
                    }}
                  >
                    Musik
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/category/sports"
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleCategoryClick(); // Schließt das Dropdown beim Klicken auf eine Kategorie
                    }}
                  >
                    Sport
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/category/artsandtheatre"
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleCategoryClick(); // Schließt das Dropdown beim Klicken auf eine Kategorie
                    }}
                  >
                    Kunst & Theater
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink to="/new" onClick={() => setIsMenuOpen(false)}>
              Neue Events
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NavBar;
