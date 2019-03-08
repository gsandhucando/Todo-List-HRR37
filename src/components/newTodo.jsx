import React from 'react';

const NewTodo = (props) => (
  <div>
    <h4>Add ToDos!</h4>
    <form>
      <input type="text" onChange={props.handleChange} />
      <input type="submit" onClick={props.handleClick} name="NEW TODO" />
    </form>
  </div>
);

export default NewTodo;