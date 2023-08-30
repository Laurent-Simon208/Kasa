import { useState } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
width: 100%;
height: auto;
`;

const Rectangle = styled.div`
  background-color: #ff6060;
  color: white;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  padding: 10px 5px 10px 5px;
  @media (max-width: 400px){
    height: 30px;
}
`;

const TitleWrap = styled.div``;

const ButtonTitle = styled.span`
  margin-right: 10px;
  font-size: 1.5em;
  cursor: pointer;
  display: flex;
  align-items: center;
  transform: rotate(${props => (props.open ? "180deg" : "0")});
  transition: transform 0.7s;
`;

const Title = styled.h2`
  font-size: 1.2em;
  margin-left: 10px;
  @media (max-width: 400px){
    font-size: 13px;
    font-weight: 500;
}
`;

const Description = styled.div`    
overflow: hidden;
color:#ff6060;
line-height: 1.5;
border-Radius: 0 0 10px 10px;
background-color: #f6f6f6;
font-size: 1.125rem;
max-height: ${props => (props.open ? "100%" : "0")};
transition: all 0.7s;
margin-bottom: 35px;
div{
  margin-top: 0;
  padding: 15px;
}
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
@media (max-width: 400px){
  margin-bottom: 20px;
  font-size: 12px;
}
`

function Collapse2({ title, description }) {
  const [open, setOpen] = useState(false);
  console.log(open);
  const toggle = () => {
    setOpen(!open);

  };

  return (
    <Wrapper>
      <Rectangle>
        <Title>{title}</Title>
        <ButtonTitle onClick={toggle} open={open}>
          <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="arrow_back_ios-24px 2">
              <path id="Vector" d="M17.2103 21.8522C16.5409 22.5216 15.4538 22.5216 14.7843 21.8522L4.50206 11.5699C3.83265 10.9005 3.83265 9.81335 4.50206 9.14393C5.17148 8.47451 6.25862 8.47451 6.92804 9.14393L16 18.2159L25.072 9.14929C25.7414 8.47987 26.8285 8.47987 27.4979 9.14929C28.1674 9.81871 28.1674 10.9058 27.4979 11.5753L17.2157 21.8575L17.2103 21.8522Z" fill="white" />
            </g>
          </svg>
        </ButtonTitle>
      </Rectangle>
      <Description open={open} >
        <div>{description}</div>
      </Description>
    </Wrapper>

  )
}

export default Collapse2;