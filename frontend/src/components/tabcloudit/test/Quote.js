import React from 'react';

const Quote = ({quote}) => (
    <div className="jumbotron">
      <div className="display-4">{quote.text}</div>
      <p>{quote.author}</p>
    </div>
  );

export default Quote;
