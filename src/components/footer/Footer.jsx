import kasaBlack from '../../assets/kasaBlack.jpg';
import './footer.scss';

export default function Footer() {
    return (
        <footer className='footer'>
            <img className='kasa-black' src={kasaBlack} alt="Logo de Kasa" />
            <p className='p-footer'>© 2020 Kasa. All {`\n`} rights reserved</p>
        </footer>
    )
}