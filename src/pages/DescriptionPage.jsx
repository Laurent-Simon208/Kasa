import Card from "../components/Card";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import Carousel from "../components/DescriptionPage/Carousel";
import { useContext, useEffect,} from "react";
import NavHeader from "../components/NavHeader";
import LegendDesPage from "../components/DescriptionPage/LegendDesPage";
import logements from "../datas/logements.json";
import Collapse2 from "../components/Collapse2";
import Footer from "../components/Footer";


const Collapses = styled.div`
display: flex;
width: 45%;
`
const WrapCollapse = styled.div`
display: flex;
justify-content: space-between;
width: 90%;
margin: auto;
`

function DescriptionPage (){
 const { id } = useParams();
const data = logements.find((e)=> e.id === id);


    return (
      <div >
        <NavHeader />
            <Carousel image={data} />
            <LegendDesPage info={data} />
            <WrapCollapse>
            <Collapses>
            <Collapse2 info={data}
            title = "Description"
            description = {data.description}/>
            </Collapses>
            <Collapses>
            <Collapse2 
            title = "Équipements"
            description={data.equipments.map((items, index)=> 
            <ul key={index}>
              <li>{items}</li>
            </ul>
            )}/>
            </Collapses>
            </WrapCollapse>
<Footer/>
      </div>
    )

}
export default DescriptionPage;

