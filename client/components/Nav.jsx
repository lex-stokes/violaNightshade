import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <span className="navbar-toggle" id="js-navbar-toggle">
        <i className="fas fa-bars"></i>
      </span>
      <a href="#" className="logo">
        Viola Nightshade
      </a>
      <ul className="main-nav" id="js-menu">
        <li className="linkFormat">
          <Link to="/Home">Home</Link>
        </li>
        <li className="linkFormat">
          <Link to="/GalleryHome">Gallery</Link>
        </li>
        <li className="linkFormat">
          <Link to="/Contact">Contact</Link>
        </li>
        <li className="linkFormat">
          <Link to="/Events">Events</Link>
        </li>
        <li>
          <a href="https://www.facebook.com/ViolaNightshade">
            <i className="fa-lg fab fa-facebook-square"></i>
          </a>
          <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fvicky_weeds%3Figshid%3D11m60p9efwm8u%26fbclid%3DIwAR0jqbFJmTwsXfCFfGeolqhcm7IAUerLsSv5j2JmiLFP-RaCA4JSa8siFEk&h=AT16ppbk6AxUnRT6DZuiJY40s_egIzyBcwqLPS_zvmL8GDKWfZ-dw4jixISEyQ9qYRy3E0g83xmbt4-J24ywWeavL4jyQNh2k90Nv7gi7pEDrSBT0kUN_5uZTIQwjPMP5KjKJA">
            <i className="fa-lg fab fa-instagram-square"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
