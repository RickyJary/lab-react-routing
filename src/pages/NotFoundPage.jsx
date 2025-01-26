import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div>
    <h1>Página no encontrada</h1>
    <p>Lo sentimos, no pudimos encontrar la página que buscabas.</p>
    <Link to="/">Volver al inicio</Link>
  </div>
);

export default NotFoundPage;
