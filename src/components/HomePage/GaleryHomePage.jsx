import Card from "../Card";
import { styled } from "styled-components";
import logements from "../../datas/logements.json";


const Galery = styled.main`

`
const Wrapper = styled.article`
margin: auto;
width: 90%;
height: 100%;
margin-top: 50px;
background-color: #F6F6F6;
border-radius: 25px;
@media (max-width: 400px){
    width: 100%;
    margin-top: 0;
}
`
const FlexCard = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
padding-top: 50px;
padding-bottom: 50px;
gap: 50px;
margin: 5%;
@media (max-width: 400px){
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    width: 95%;
    margin: auto;
    padding: 20px 0 30px 0;
}
`


function GaleryHomePage() {
    //const { data } = useContext(DataContext);


    return (

        <Galery>
            <Wrapper>
                <FlexCard>
                    {logements.map((card) =>
                        <Card key={card.id} img={card} />
                    )}
                </FlexCard>
            </Wrapper>
        </Galery>
    )
}
export default GaleryHomePage;