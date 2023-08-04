import { useRouteError } from "react-router-dom";
import NavHeader from "./NavHeader";
import Footer from "./Footer";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const ErrorMessage = styled.div`
color: #FF6060;
text-align: center;

h1{
  font-size: 200px;
  font-weight: 700;
  margin-bottom: 80px;
}
h2{
  font-size: 32px;
  font-weight: 500;
}
p{
  color : #FF6060;
  font-size: 18px;
  font-weight: 500;
  margin-top: 80px;
  margin-bottom: 80px;
}
`



export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <NavHeader />
      <ErrorMessage>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/" style={{ textDecorationColor: "#FF6060" }}><p>Retourner sur la page d'accueil</p></Link>
      </ErrorMessage>
      <Footer />
    </div>
  );
}