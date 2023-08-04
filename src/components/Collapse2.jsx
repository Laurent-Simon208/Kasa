import { useState } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
width: 100%;
`;

const Rectangle = styled.div`
  background-color: #ff6060;
  color: white;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

const TitleWrap = styled.div``;

const ButtonTitle = styled.span`
  margin-right: 10px;
  font-size: 1.5em;
  cursor: pointer;
  transform: rotate(${props => (props.open ? "-180deg" : "0")});
  transition: transform 0.7s;
`;

const Title = styled.h2`
  font-size: 1.2em;
  margin-left: 10px;
`;

const Description = styled.div`    
overflow: hidden;
color:#ff6060;
line-height: 1.5;
border-Radius: 0 0 10px 10px;
background-color: #f6f6f6;
font-size: 1.125rem;
max-height: ${props => ( props.open ? "100%" : "0")};
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
`

function Collapse2({ title, description }) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <Wrapper>
      <Rectangle>
        <Title>{title}</Title>
        <ButtonTitle onClick={toggle} open={open}>∧</ButtonTitle>
      </Rectangle>
        <Description open={open} >
         <div>{description}</div> 
        </Description>
    </Wrapper>

  )
}

export default Collapse2;