import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strike: 'none',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    console.log(this.state.strike)
    if (this.state.strike === 'none') {
      this.setState({
        strike: 'line-through',
      });
    } else {
      this.setState({
        strike: 'none',
      });
    }
  }

  render() {
    return (
      <li style={{
        textDecoration: this.state.strike
      }} onClick={this.handleClick} >{this.props.todo}</li>
    );
  }
};

export default TodoListItem;
