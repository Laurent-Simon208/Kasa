import { useNavigate } from 'react-router-dom';
import './card.scss';

function Card({ img }) {

    const navigate = useNavigate();
    function OpenDescriptionPage() {
        navigate(`/description/${img.id}`);
    }

    return (

        <div className="cards" onClick={OpenDescriptionPage} style={{ backgroundImage: `url(${img.cover})` }}>
            <p className="legende">
                {img.title}
            </p>
        </div>

    )
}

export default Card;