import React from 'react';
import Option from './Option';

const Options = function (props) {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button
          className="button button--link"
          onClick={props.handleRemoveAll}
          disabled={!props.options.length > 0}
        >
          Remove All
        </button>
      </div>
      {props.options.length === 0 && (
        <p className="widget__message">Please add an option to get started</p>
      )}
      {props.options.map((option, index) => (
        <Option
          key={option}
          count={index + 1}
          text={option}
          handleRemove={props.handleRemove}
        />
      ))}
    </div>
  );
};

export default Options;
