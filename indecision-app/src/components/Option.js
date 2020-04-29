import React from 'react';

const Option = (props) => (
  <div>
    {props.text}
    <button
      className="button button--link"
      onClick={(e) => props.handleRemove(props.text)}
    >
      Remove
    </button>
  </div>
);

export default Option;
