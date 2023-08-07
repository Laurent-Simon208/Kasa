import kasaBlack from '../assets/kasaBlack.jpg';
import { styled } from 'styled-components';

const CssFooter = styled.footer`
background-color: black;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
const Logo = styled.img`
margin-top: 30px;
@media (max-width: 400px){
    width: 210px;
}
`
const PFooter = styled.p`
font-size: 24px;
color: white;
@media (max-width: 400px){
    font-size: 12px;
    white-space: pre;
    margin-top: 0;
}
`
export default function Footer() {
    return (
        <CssFooter>
            <Logo src={kasaBlack} alt="Logo de Kasa" />
            <PFooter className='p-footer'>© 2020 Kasa. All {`\n`} rights reserved</PFooter>
        </CssFooter>
    )
}