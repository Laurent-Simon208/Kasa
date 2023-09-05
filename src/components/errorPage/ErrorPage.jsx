import { useRouteError } from "react-router-dom";
import NavHeader from "../DescriptionPage/NavHeader";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import './errorPage.scss';

export default function ErrorPage() {


  return (
    <div className="error-page">
      <NavHeader />
      <div className="errorMessage">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/" style={{ textDecorationColor: "#FF6060" }}><p>Retourner sur la page d'accueil</p></Link>
      </div>
      <Footer />
    </div>
  );
}