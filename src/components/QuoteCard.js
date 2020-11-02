import React from "react";
import "./QuoteCard.css";

function QuoteCard(props) {
  return (
    <figure className="QuoteCard">
      <img src={props.image} alt={props.character}></img>
      <figcaption className="quoteAndCharacter">
        <blockquote className="blocQuote">{props.quote}</blockquote>
        <cite className="characterName">{props.character}</cite>
      </figcaption>
    </figure>
  );
}

export default QuoteCard;
