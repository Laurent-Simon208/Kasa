import { styled } from "styled-components";
import image from "../assets/home-page-image.png";
import imageAbout from "../assets/about-page-image.png";
import { useLocation, Link } from "react-router-dom";
import kasaLogo from "../assets/kasaLogo.jpg"

const WrapperAll = styled.div`
@media (max-width: 400px){
    width: 95%;
    margin: auto;
}
`
const Wrapper = styled.aside`
width: 100%;
margin: auto;
@media (max-width: 400px){
    width: 100%;
}
`
const Img = styled.div`
position: relative;
margin-top: 50px;
width: 100%;
height: 223px;
background-size: cover;
background-image: url(${props => (props.$currentpage === "HomePage" ? image : imageAbout)});
background-position: center;
border-radius: 25px;
display: flex;
justify-content: center;
align-items: center;
&::before{
    content: '';
    position: absolute;
    border-radius: 25px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 30%;
    z-index: 1;
}

@media (max-width: 400px){
    width: 100%;
    height: ${props => (props.$currentpage === "About" ? "223px" : "111px")};
    border-radius: 10px;
    margin-top: 30px;
    display: flex;
    justify-content: start;
    &::before{
        border-radius: 10px;
        opacity: 20%;
    }
}
`
const Title = styled.h1`
display: ${props => (props.$currentpage === "HomePage" ? "block" : "none")};
color: white;
font-size: 48px;
font-weight: 500;
z-index: 2;
line-height: 68px;

@media (max-width: 400px){
    font-size: 24px;
    line-height: 24px;
    white-space:pre;
    margin-left: 15px;   
}
`
const WrapperNav = styled.nav`
width: 100%;
margin: auto;
color : #ff6060;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 30px;

@media (max-width: 400px){
    width: 100%;
}
`
const ImgKasa = styled.img`
width: 210px;
height: 68px;

@media (max-width: 400px){
    width: 145px;
    height: 48px;
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
}
`
const LiHeaderHome = styled.li`
text-decoration: none;
color: #FF6060;
`
const LiHeaderAbout = styled.li`
text-decoration: none;
color: #FF6060;
`

function Banner() {

    let location = useLocation();
    const currentpage = location.pathname === "/" ? "HomePage" : "About";



    return (
        <WrapperAll>
            <WrapperNav>
                <ImgKasa src={kasaLogo} alt="logo de kasa" />
                <UlHeader>
                    <LiHeaderHome><Link to="/" style={{ textDecoration: currentpage === "HomePage" ? "" : "none", color: "#ff6060" }}>Accueil</Link></LiHeaderHome>
                    <LiHeaderAbout><Link to="/about" style={{ textDecoration: currentpage === "About" ? "" : "none", color: "#ff6060" }}>A Propos</Link></LiHeaderAbout>
                </UlHeader>
            </WrapperNav>
            <Wrapper>
                <Img $currentpage={currentpage}>
                    <Title $currentpage={currentpage}>Chez vous,{`\n`}Partout et ailleurs</Title>
                </Img>
            </Wrapper>

        </WrapperAll>
    )
}

export default Banner;