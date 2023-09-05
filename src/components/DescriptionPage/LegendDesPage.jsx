import './legendDesPage.scss';

function LegendDesPage({ info }) {


    const infoTag = info.tags;
    const rating = info.rating;
    const isMobile = window.innerWidth <= 400;

    const stars = Array(5).fill().map((_, index) => {
        if (index < rating) {
            return <span className="red-stars" key={index} >★</span>;
        } else {
            return <span className="stars" key={index}>★</span>;
        }
    });

    return (
        <div className="wrapper-description">
            <div className="title">
                <h2>{info.title}</h2>
                <h3> {info.location} </h3>
            </div>
            <div className="tags">
                {infoTag.map((tag, index) =>
                    <div className="tag" key={index}>
                        {tag}
                    </div>
                )}
            </div>
            <div className="note">
                {stars}
            </div>
            <div className="host">
                <p className="host-p">
                    {info.host.name.split(' ')[0]}
                    <br />
                    {info.host.name.split(' ')[1]}
                </p>
                <img className="host-img" src={info.host.picture} alt="" />
            </div>
        </div>

    )
}

export default LegendDesPage;