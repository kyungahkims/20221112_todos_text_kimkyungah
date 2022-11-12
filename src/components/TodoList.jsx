import { useTodoState } from "../hooks/useTodoReducer";
import Item from "./Item";

function TodoList() {
  const todos = useTodoState();
  return (
    <ul>
      {todos.map((todo) => (
        <Item key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
