import React from 'react'
import Todo from "./Todo";

// const TodoList = (props) => {
//   return <div>{props.todos}</div>
// };

const TodoList = ({ todos, toggleTodo }) => {
  return todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo}/>);
};

export default TodoList;
