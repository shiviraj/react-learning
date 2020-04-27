import React from 'react';
import Option from './Option';

const Options = function (props) {
  return (
    <div>
      <button
        onClick={props.handleRemoveAll}
        disabled={!props.options.length > 0}
      >
        Remove All
      </button>
      {props.options.map((option) => (
        <Option key={option} text={option} handleRemove={props.handleRemove} />
      ))}
    </div>
  );
};

export default Options;
