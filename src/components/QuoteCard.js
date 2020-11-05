import React from "react";
import styled from "styled-components";

const QuoteCardStyled = styled.div`
  box-shadow: 1px 5px 1px  #8b8c8d ;
  border: 1px solid #b8b3b3;
  border-radius: 2px;
  width: 25vw;
  height: auto;
  margin: 3vw;
`;

const ImgCharacter = styled.img`
  width: 10vw;
  height: 30vh;
  margin: 1vw;  
`;

const QuoteAndCharacter = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 25vh;
  margin: 1vh;  
`;

const Quote = styled.p`
  margin: 2vh;
`;

const NameCharacter = styled.span`
  padding: 2vh;
  font-weight: 900;
  font-size: 1.2em;
`;


function QuoteCard(props) {
  return (
    <QuoteCardStyled>
      <ImgCharacter src={props.image} alt={props.character} />
      <QuoteAndCharacter>
        <Quote className="blocQuote">{props.quote}</Quote>
        <NameCharacter className="characterName">{props.character}</NameCharacter>
      </QuoteAndCharacter>
    </QuoteCardStyled>
  );
}

export default QuoteCard;
