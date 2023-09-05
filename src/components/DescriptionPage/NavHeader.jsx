import { Link } from "react-router-dom";
import kasaLogo from "../../assets/kasaLogo.jpg"

// NavHeader utilise le scss de banner.scss 

function NavHeader() {
    return (
        <nav className="wrapper-nav">
            <img className="img-kasa" src={kasaLogo} alt="logo de kasa" />
            <ul className="ul-header">
                <li className="li-header-home"><Link to="/" style={{ textDecoration: "none", color: "#ff6060" }}>Accueil</Link></li>
                <li className="li-header-about"><Link to="/about" style={{ textDecoration: "none", color: "#ff6060" }}>A Propos</Link></li>
            </ul>
        </nav>
    )
}
export default NavHeader;