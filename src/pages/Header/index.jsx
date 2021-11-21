import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./header.scss";


const Header = () => {
  return (
    <nav>
      <Link to="/">
        <img className="header-logo" src={logo} alt="logo" />
      </Link>
      <div className="navlink">
        <Link to="/">Accueil</Link>
        <Link to="/about-us">A Propos</Link>
      </div>
    </nav>
  );
};

export default Header;