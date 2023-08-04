import { styled } from "styled-components";

const Wrapperr = styled.div`
width: 90%;
margin: auto;
font-family: "Montserrat";
`
const WrapTitle = styled.div`
display:flex;
justify-content: space-between;
`
const Title = styled.div`
color: #ff6060;
h2{
    font-weight: 700;
    font-size: 36px;
    margin-bottom: 5px;
}
h3{
    font-weight: 500;
    font-size: 18px;
    margin-top: 0;
}
`
const Host = styled.div`
display: flex;
align-items: center;
gap: 15px;
`
const HostImg = styled.img`
width: 64px;
height: 64px;
border-radius: 50%;
`
const HostP = styled.p`
color: #ff6060;
font-size: 18px;
text-align: end;
`
const TagNote = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
`
const Tags = styled.div`
display: flex; 
margin: auto 0;
`
const Tag = styled.div`
background-color: #FF6060;
color: white;
border-radius: 10px;
padding: 5px 30px;
margin-right: 10px;
font-weight: 500;
font-size: 14px;
`
const Note = styled.div`
font-size: 2.5em;
display: flex;
flex-direction: row;
gap: 10px;

`
const Stars = styled.span`
color: #E3E3E3;
font-size: 0.9em;
`
const RedStars = styled.span`
color :#ff6060;
font-size: 0.9em;
`
function LegendDesPage({ info }) {


    const infoTag = info.tags;
    const rating = info.rating;


    const stars = Array(5).fill().map((_, index) => {
        if (index < rating) {
            return <RedStars key={index} className="full-star">★</RedStars>;
        } else {
            return <Stars key={index}>★</Stars>;
        }
    });

    return (
        <Wrapperr>
            <WrapTitle>
                <Title>
                    <h2>{info.title}</h2>
                    <h3> {info.location} </h3>
                </Title>
                <Host>
                    <HostP>
                        {info.host.name.split(' ')[0]}
                        <br />
                        {info.host.name.split(' ')[1]}
                    </HostP>
                    <HostImg src={info.host.picture} alt="" />
                </Host>
            </WrapTitle>
            <TagNote>
                <Tags>
                    {infoTag.map((tag, index) =>
                        <Tag key={index}>
                            {tag}
                        </Tag>
                    )}
                </Tags>
                <Note>
                    {stars}
                </Note>
            </TagNote>
        </Wrapperr>
    )
}

export default LegendDesPage;