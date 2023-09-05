import React from "react";
import { useLocation, Link } from "react-router-dom";
import kasaLogo from "../../assets/kasaLogo.jpg";
import image from "../../assets/home-page-image.png";
import imageAbout from "../../assets/about-page-image.png";
import './banner.scss';

function Banner() {

    let location = useLocation();
    const currentpage = location.pathname === "/" ? "HomePage" : "About";
    return (
        <div className="wrapper-all">
            <nav className="wrapper-nav">
                <img className="img-kasa" src={kasaLogo} alt="logo de kasa" />
                <ul className="ul-header">
                    <li className="li-header-home">
                        <Link to="/" style={{ textDecoration: currentpage === "HomePage" ? "" : "none", color: "#ff6060" }}>
                            Accueil
                        </Link>
                    </li>
                    <li className="li-header-about">
                        <Link to="/about" style={{ textDecoration: currentpage === "About" ? "" : "none", color: "#ff6060" }}>
                            A Propos
                        </Link>
                    </li>
                </ul>
            </nav>
            <aside className="wrapper">
                <div className="img" style={{ backgroundImage: `url(${currentpage === "HomePage" ? image : imageAbout})` }}>
                    <h1 className={`title ${currentpage === "HomePage" ? "current-page" : ""
                        }`}>
                        Chez vous,{`\n`}Partout et ailleurs
                    </h1>
                </div>
            </aside>
        </div>
    );
}

export default Banner;