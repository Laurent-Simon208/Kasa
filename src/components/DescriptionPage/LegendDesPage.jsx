import { styled } from "styled-components";

const Wrapperr = styled.div`
width: 90%;
margin: auto;
font-family: "Montserrat";
@media (max-width: 400px){
    width: 95%;
}
`
const WrapTitle = styled.div`
display:flex;
justify-content: space-between;
@media (max-width: 400px){
    display: block;
}
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
@media (max-width: 900px){
    h2{
        font-size: 24px;
    }
    h3{
        font-size: 16px;
    }
}
@media (max-width: 400px){
    h2{
        font-size: 18px;
        line-height: 25px;
        font-weight: 500;
    }
    h3{
        font-size: 14px;
    }
}
`
const Host = styled.div`
display: flex;
align-items: center;
gap: 15px;
@media (max-width: 400px){
    gap: 10px;
}
`
const HostImg = styled.img`
width: 64px;
height: 64px;
border-radius: 50%;
@media (max-width: 400px){
    width: 32px;
    height: 32px;
}
`
const HostP = styled.p`
color: #ff6060;
font-size: 18px;
text-align: end;
@media (max-width: 400px){
    font-size: 12px;
}
`
const TagNote = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
@media (max-width: 900px){
    flex-direction: column;
    align-items: flex-start;
}
@media (max-width: 400px){
    display: block; 
    width: 95%;
}
`
const Tags = styled.div`
display: flex; 
margin: auto 0;
@media (max-width: 900px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
}
@media (max-width: 400px){
    width: 75%;
    gap: 5px;
}
`
const Tag = styled.div`
background-color: #FF6060;
color: white;
border-radius: 10px;
padding: 5px 30px;
margin-right: 10px;
font-weight: 500;
font-size: 14px;
@media (max-width : 900px){
    font-size:10px;
}
@media (max-width: 400px){
    font-size: 10px;
    height: 14px;
    text-align: center;
    padding: 5px 15px;
    white-space: nowrap;
}
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
@media (max-width: 400px){
    font-size: 0.5em;
}
`
const RedStars = styled.span`
color :#ff6060;
font-size: 0.9em;
@media (max-width: 400px){
    font-size: 0.5em;
}
`
const HostNote = styled.div`
@media (max-width: 400px){
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
`
function LegendDesPage({ info }) {


    const infoTag = info.tags;
    const rating = info.rating;
    const isMobile = window.innerWidth <= 400;

    const stars = Array(5).fill().map((_, index) => {
        if (index < rating) {
            return <RedStars key={index} className="full-star">★</RedStars>;
        } else {
            return <Stars key={index}>★</Stars>;
        }
    });

    return (
        <div>
            {isMobile ? (
                <Wrapperr>
                    <Title>
                        <h2>{info.title}</h2>
                        <h3> {info.location} </h3>
                    </Title>
                    <Tags>
                        {infoTag.map((tag, index) =>
                            <Tag key={index}>
                                {tag}
                            </Tag>
                        )}
                    </Tags>
                    <HostNote>
                        <Note>
                            {stars}
                        </Note>
                        <Host>
                            <HostP>
                                {info.host.name.split(' ')[0]}
                                <br />
                                {info.host.name.split(' ')[1]}
                            </HostP>
                            <HostImg src={info.host.picture} alt="" />
                        </Host>
                    </HostNote>
                </Wrapperr>
            ) : (
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
        </div>

    )
}

export default LegendDesPage;