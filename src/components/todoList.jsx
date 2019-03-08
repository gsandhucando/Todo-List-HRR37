import React from 'react';
import TodoListItem from './todoListItem';
import NewTodo from './newTodo.jsx';

const TodoList = (props) => (
  <div>
    {props.todos.map((item, index) => (
      <TodoListItem key={index} todo={item} />
    )
    )}
  </div>
)

export default TodoList;
