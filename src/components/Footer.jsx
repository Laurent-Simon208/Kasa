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
`
const PFooter = styled.p`
font-size: 24px;
color: white;
`
export default function Footer (){
    return (
        <CssFooter>
            <Logo src={kasaBlack} alt="Logo de Kasa" />
            <PFooter className='p-footer'>© 2020 Kasa. All rights reserved</PFooter>
        </CssFooter>
    )
}