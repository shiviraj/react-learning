console.log('react is running now! ');

const app = {
  title: 'React App',
  subtitle: 'learning react js',
  options: [],
};

const onFormSubmit = function (e) {
  e.preventDefault();
  const option = e.target.option.value;
  if (option) {
    app.options.push(option);
    e.target.option.value = '';
    renderApp();
  }
};

const removeAll = function () {
  app.options = [];
  renderApp();
};

const renderApp = () => {
  const templateTwo = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <h3>{app.subtitle}</h3>}
      <form onSubmit={onFormSubmit}>
        <input name="option" />
        <button>Add Option</button>
      </form>
      <button onClick={removeAll}>Remove All</button>

      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <ol>
        {app.options.map((option, idx) => {
          return <li key={idx}>{option}</li>;
        })}
      </ol>
    </div>
  );
  ReactDOM.render(templateTwo, document.querySelector('#app'));
};

renderApp();
