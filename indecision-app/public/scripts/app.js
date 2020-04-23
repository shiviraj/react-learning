'use strict';

console.log('react is running now! ');
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is descriptions'
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Shiviraj'
  ),
  React.createElement(
    'p',
    null,
    'Age: 22'
  ),
  React.createElement(
    'p',
    null,
    'Location: India'
  )
);

ReactDOM.render(templateTwo, document.querySelector('#app'));
