import React from "react";
import styled from "styled-components";

// Styled-component//////////////////////////////

const Form = styled.form`
  margin: 3vw;
`;

const Label = styled.label`
  margin: 1vw;
`;

const IndicatorInputed = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  margin: 3vh;
`;

const IndicatorRemaining = styled.small`
  margin: 3vw;
`;

const IsMaxRemaining = styled.input`
  &.length-ok {
    border: 1px solid #9ae6b4;
  }
  &.length-maximum-reached {
    border: 1px solid #fc8181;
  }
`;

// Styled-component//////////////////////////////

const MAX_LENGTH = 12;

export default class QuoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: "",
    };
    this.HandleChange = this.HandleChange.bind(this);
  }

  HandleChange(event) {
    if (event.target.value.length <= MAX_LENGTH)
      this.setState({ character: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const maximumeReached = this.state.character.length >= MAX_LENGTH;
    const numRemaining = MAX_LENGTH - this.state.character.length;
    return (
      <Form className="QuoteForm" onSubmit={this.handleSubmit}>
        <Label htmlFor="character">Character:</Label>
        <IsMaxRemaining
          className={maximumeReached ? "length-maximum-reached" : "length-ok"}
          id="character"
          name="character"
          type="text"
          value={this.state.character}
          onChange={this.HandleChange}
          onSubmit={this.handleSubmit}
        />
        <IndicatorRemaining>
          {numRemaining} remaining characters
        </IndicatorRemaining>
        <IndicatorInputed>You typed:</IndicatorInputed>{" "}
        <strong>{this.state.character}</strong>
      </Form>
    );
  }
}
