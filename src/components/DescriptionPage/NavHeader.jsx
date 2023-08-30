import { Link } from "react-router-dom";
import kasaLogo from "../../assets/kasaLogo.jpg"
import { styled } from "styled-components";

const WrapperNav = styled.nav`
width: 100%;
margin: auto;
color : #ff6060;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 30px;
margin-bottom: 30px;
@media (max-width: 400px){
    width: 95%;
    margin-bottom: 25px;
}
`
const ImgKasa = styled.img`
width: 210px;
height: 68px;
@media (max-width: 400px){
    width: 145px;
    height: 46px;
}
`
const UlHeader = styled.ul`
display: flex;
list-style-type: none;
gap: 57px;
font-size: 24px;
font-weight: 500;
text-decoration: none;
color: #FF6060;
@media (max-width : 900px){
    font-size: 18px;
}
@media (max-width: 400px){
    font-size: 12px;
    gap: 20px;
    font-weight: 500;
}
`
const LiHeader = styled.li`
text-decoration: none;
color: #FF6060;
`

function NavHeader() {
    return (
        <WrapperNav>
            <ImgKasa src={kasaLogo} alt="logo de kasa" />
            <UlHeader>
                <LiHeader><Link to="/" style={{ textDecoration: "none", color: "#ff6060" }}>Accueil</Link></LiHeader>
                <LiHeader><Link to="/about" style={{ textDecoration: "none", color: "#ff6060" }}>A Propos</Link></LiHeader>
            </UlHeader>
        </WrapperNav>
    )
}
export default NavHeader;