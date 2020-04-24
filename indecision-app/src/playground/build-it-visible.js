let visibility = true;

const toggleDetails = function () {
  visibility = !visibility;
  render();
};

const render = () => {
  const templateTwo = (
    <div>
      <h1>Toggle Visible</h1>
      <button onClick={toggleDetails}>
        {visibility ? 'hide details' : 'show details'}
      </button>
      {visibility && <p>This is some text!</p>}
    </div>
  );
  ReactDOM.render(templateTwo, document.querySelector('#app'));
};

render();
