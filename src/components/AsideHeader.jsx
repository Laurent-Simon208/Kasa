import { styled } from "styled-components";
import image from "../assets/home-page-image.png";
import imageAbout from "../assets/about-page-image.png";
import { useLocation } from "react-router-dom";

const Wrapper = styled.aside`
width: 90%;
margin: auto;
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
`
const Title = styled.h1`
color: white;
font-size: 48px;
font-weight: 500;
z-index: 2;
line-height: 68px;
`
function AsideHeader() {
    let location = useLocation();
    const currentpage = location.pathname === "/" ? "HomePage" : "About";
    return (
        <Wrapper>
            <Img $currentpage={currentpage}>
                <Title>Chez vous, Partout et ailleurs</Title>
            </Img>
        </Wrapper>
    )
}

export default AsideHeader;

