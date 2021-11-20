import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      {" "}
      <Link to="/housing/42">Logement</Link>
      {" "}
      <Link to="/about-us">A Propos</Link>
    </nav>
  );
};

export default Header;