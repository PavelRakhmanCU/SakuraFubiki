import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const NavigationMenu = () => {
  const { isActive, setIsActive } = useContext(GlobalContext);
  const close = () => setIsActive(false);

  return (
    <>
      <div
        className={`nav-backdrop ${isActive ? "active" : ""}`}
        onClick={close}
        aria-hidden="true"
      />
      <nav
        id="main-navigation"
        className={`navigation-menu ${isActive ? "active" : ""}`}
        onClick={(e) => e.stopPropagation()}
        aria-label="Main navigation"
      >
        <ul>
          <li>
            <Link to="/" onClick={close}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={close}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/reserve" onClick={close}>
              Reserve
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={close}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={close}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavigationMenu;
