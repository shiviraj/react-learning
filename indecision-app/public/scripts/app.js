'use strict';

var visibility = true;

var toggleDetails = function toggleDetails() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Toggle Visible'
    ),
    React.createElement(
      'button',
      { onClick: toggleDetails },
      visibility ? 'hide details' : 'show details'
    ),
    visibility && React.createElement(
      'p',
      null,
      'This is some text!'
    )
  );
  ReactDOM.render(templateTwo, document.querySelector('#app'));
};

render();
