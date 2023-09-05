import Banner from "../../components/banner/Banner";
import Collapse2 from "../../components/collapse/Collapse2";
import Footer from "../../components/footer/Footer";
import './about.scss';

export default function About() {

    return (
        <div className="wrapper-all-about">

            <Banner />
            <div className="wrapper-about-collapse">
                <div className="collapse-about">
                    <Collapse2
                        title="Fiabilité"
                        description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
                </div>
                <div className="collapse-about">
                    <Collapse2
                        title="Respect"
                        description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportements discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre platforme." />
                </div>
                <div className="collapse-about">
                    <Collapse2
                        title="Service"
                        description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportements discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre platforme." />
                </div>
                <div className="collapse-about">
                    <Collapse2
                        title="Sécurité"
                        description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locateire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
                </div>
            </div>
            <Footer />
        </div>
    )
}