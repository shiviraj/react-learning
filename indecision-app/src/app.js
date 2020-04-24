console.log('react is running now! ');

const app = {title: 'React', subtitle: 'Learning React'};

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
  </div>
);

const user = {name: 'Shivi', age: 22, location: 'India'};

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    {user.age > 17 && <p>Age: {user.age}</p>}
    {user.location && <p>Location: {user.location}</p>}
  </div>
);

ReactDOM.render(templateTwo, document.querySelector('#app'));
