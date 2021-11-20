import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      {" "}
      <Link to="/fiche-logement/42">Logement</Link>
      {" "}
      <Link to="/about-us">About</Link>
    </nav>
  );
};

export default Header;