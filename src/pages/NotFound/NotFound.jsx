import { useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <>
      <h1>404</h1>
      <h2>Oups! La page de que vous demander n'existe pas</h2>
      <h3>
        Pas de route pour <code>{location.pathname}</code>
      </h3>
    </>
  );
}

export default NotFound;