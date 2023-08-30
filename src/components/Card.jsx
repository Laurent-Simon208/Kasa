import { styled } from "styled-components";
import { useNavigate } from 'react-router-dom';

const Cards = styled.article`
position: relative;
width: 100%;
padding-top: 100%;
background-size: cover;
background-repeat: no-repeat;
border-radius: 10px;
cursor: pointer;

&::before{
content: "";
position: absolute;
border-radius: 0 0 10px 10px;
bottom: 0;
left: 0;
width: 100%;
height: 40%;
background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 50%);
}
@media (max-width: 400px){
    height: 250px;
    padding: 0;
}
`
const Legende = styled.p`
position: absolute;
bottom: 0;
left: 0;
margin: 0;
padding: 10px;
color: white;
font-size: 18px;
font-weight: 500;
@media (max-width: 950px){
font-size: 14px;
}
`
function Card({ img }) {

    const navigate = useNavigate();
    function OpenDescriptionPage() {
        navigate(`/description/${img.id}`);
    }

    return (

        <Cards onClick={OpenDescriptionPage} style={{ backgroundImage: `url(${img.cover})` }}>
            <Legende>

                {img.title}

            </Legende>
        </Cards>

    )
}

export default Card;