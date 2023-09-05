import Card from "./Card";
import logements from "../../datas/logements.json";
import './galeryHomePage.scss';

function GaleryHomePage() {
    //const { data } = useContext(DataContext);


    return (

        <div className="galery-home-page">
            <div className="wrapper-galery">
                <div className="flex-card">
                    {logements.map((card) =>
                        <Card key={card.id} img={card} />
                    )}
                </div>
            </div>
        </div>
    )
}
export default GaleryHomePage;