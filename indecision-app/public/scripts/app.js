'use strict';

console.log('react is running now! ');

var app = { title: 'React', subtitle: 'Learning React' };

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  )
);

var user = { name: 'Shivi', age: 22, location: 'India' };

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  user.age > 17 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  user.location && React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);

ReactDOM.render(templateTwo, document.querySelector('#app'));
