import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * State:
 * - none
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({ todo }) {
  const { id, title, description, priority } = todo;
  return (
    <div className="Todo" id={id}>
      <div><b>{title}</b> <small>Priority: {priority}</small></div>
      <div><small>{description}</small></div>
    </div>
  );
}

export default Todo;
