import Banner from "../components/Banner";
import { useLocation } from "react-router-dom";
import Collapse2 from "../components/Collapse2";
import styled from "styled-components";
import Footer from "../components/Footer";

const Wrapper = styled.div`

`

const WrapperCol = styled.div`
margin: 30px auto 30px auto;
width: 75%;
`
const CollapseCss = styled.div`
display:flex;

margin: auto;

`



export default function About() {

    return (
        <Wrapper>

            <Banner />
            <WrapperCol>
                <CollapseCss>
                    <Collapse2
                        title="Fiabilité"
                        description="Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes" />
                </CollapseCss>
                <CollapseCss>

                    <Collapse2
                        title="Respect"
                        description="La bienveillance fait partie des valeurs foncdatrices de Kasa. Tout comportements discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre platforme." />
                </CollapseCss>
                <CollapseCss>
                    <Collapse2
                        title="Service"
                        description="La bienveillance fait partie des valeurs foncdatrices de Kasa. Tout comportements discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre platforme." />
                </CollapseCss>
                <CollapseCss>
                    <Collapse2
                        title="Sécurité"
                        description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locateire, cela permet à nos équipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes" />
                </CollapseCss>
            </WrapperCol>
            <Footer />
        </Wrapper>
    )
}