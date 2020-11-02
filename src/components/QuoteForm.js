import React from 'react';
import '../QuoteForm.css';

export default class QuoteForm extends React.Component {
    render() {
      return (
        <form
          className="QuoteForm"
        >
          <label htmlFor="character">Character:</label>
          <input
            id="character"
            name="character"
            type="text"
            onChange={(event) => {
              const input = event.target;
              console.log('NAME:', input.name, 'VALUE:', input.value);
            }}
          />
        </form>
      );
    }
  }
  