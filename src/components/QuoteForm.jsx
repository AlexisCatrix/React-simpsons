import React from "react";
import styled from 'styled-components';

const Form = styled.form`
  margin: 3vw;
`;

const Label = styled.label`
  margin: 1vw;
`;

export default class QuoteForm extends React.Component {
  render() {
    return (
      <Form className="QuoteForm">
        <Label htmlFor="character">Character:</Label>
        <input
          id="character"
          name="character"
          type="text"
          value="Homer"
          onChange={(event) => {
            const input = event.target;
            console.log("NAME:", input.name, "VALUE:", input.value);
          }}
        />
      </Form>
    );
  }
}
