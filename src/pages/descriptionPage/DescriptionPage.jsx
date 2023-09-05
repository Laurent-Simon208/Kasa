import Card from "../../components/HomePage/Card";
import { useParams } from "react-router-dom";
import Carousel from "../../components/DescriptionPage/Carousel";
import { useContext, useEffect, } from "react";
import NavHeader from "../../components/DescriptionPage/NavHeader";
import LegendDesPage from "../../components/DescriptionPage/LegendDesPage";
import logements from "../../datas/logements.json";
import Collapse2 from "../../components/collapse/Collapse2";
import Footer from "../../components/footer/Footer";
import ErrorPage from "../../components/errorPage/ErrorPage";
import './descriptionPage.scss';

function DescriptionPage() {
  const { id } = useParams();
  const data = logements.find((e) => e.id === id);

  //ligne rajoutée pour éviter les erreurs console et rediriger "proprement"
  if (!data) {
    return <ErrorPage />
  }

  return (
    <div className="all-description-page" >
      <NavHeader />
      <Carousel image={data} />
      <LegendDesPage info={data} />
      <div className="wrapper-dp-collapse">
        <div className="collapse-dp">
          <Collapse2 info={data}
            title="Description"
            description={data.description} />
        </div>
        <div className="collapse-dp">
          <Collapse2
            title="Équipements"
            description={data.equipments.map((items, index) =>
              <ul key={index}>
                <li>{items}</li>
              </ul>
            )} />
        </div>
      </div>
      <Footer />
    </div>
  )

}
export default DescriptionPage;

