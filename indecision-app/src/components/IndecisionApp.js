import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {options: [], selectedOption: undefined};
  componentDidMount = () => {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({options}));
      }
    } catch (e) {
      // Do nothing at all
    }
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  };
  handleClearSelection = () => {
    this.setState(() => ({selectedOption: undefined}));
  };
  handleRemoveAll = () => {
    this.setState(() => ({options: []}));
  };
  handleRemove = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  };
  handleAddOption = (option) => {
    if (!option) return 'Enter valid option.';
    if (this.state.options.indexOf(option) > -1)
      return 'Option already exists.';
    this.setState((prevState) => ({options: prevState.options.concat(option)}));
  };
  handlePick = () => {
    const index = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[index];
    this.setState((prevState) => ({selectedOption: option}));
  };
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          {' '}
          <Action
            handlePick={this.handlePick}
            hasOptions={this.state.options.length > 0}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleRemoveAll={this.handleRemoveAll}
              handleRemove={this.handleRemove}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelection}
        />
      </div>
    );
  }
}

export default IndecisionApp;
