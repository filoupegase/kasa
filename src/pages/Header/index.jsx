import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./index.scss";


const Header = () => {
  return (
    <nav>
      <Link to="/">
        <img style={{ height: 68 }} src={logo} alt="logo" />
      </Link>
      <div className="navlink">
        <Link to="/">Accueil</Link>
        <Link to="/about-us">A Propos</Link>
      </div>
    </nav>
  );
};

export default Header;