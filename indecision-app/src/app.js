class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {options: ['thing 1', 'thing 2', 'thing 3']};
  }
  handleRemoveAll() {
    this.setState(() => {
      return {options: []};
    });
  }
  handleAddOption(option) {
    if (!option) return 'Enter valid option.';
    if (this.state.options.indexOf(option) > -1)
      return 'Option already exists.';
    this.setState((prevState) => {
      return {options: prevState.options.concat(option)};
    });
  }
  handlePick() {
    const randomIndex = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomIndex]);
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          options={this.state.options}
          handleRemoveAll={this.handleRemoveAll}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>Option : {this.props.text}</div>;
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visibility: false};
  }
  render() {
    return (
      <div>
        <button
          onClick={this.props.handleRemoveAll}
          disable={!this.state.visibility}
        >
          Remove All
        </button>
        {this.props.options.map((option) => (
          <Option key={option} text={option} />
        ))}
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {error: undefined};
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    e.target.option.value = '';
    this.setState(() => {
      return {error};
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
