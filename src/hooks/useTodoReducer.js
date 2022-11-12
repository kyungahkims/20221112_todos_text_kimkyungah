import { createContext, useContext, useReducer } from "react";

export const TODO = {
  CREATE: "CREATE",
  REMOVE: "REMOVE",
  TOGGLE: "TOGGLE",
};

const initialTodoState = [
  {
    id: 1,
    text: "밥먹기",
    done: false,
  },
  {
    id: 2,
    text: "책읽기",
    done: false,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case TODO.CREATE:
      return state.concat({ id: action.id, text: action.text, done: false });
    case TODO.TOGGLE:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case TODO.REMOVE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

const TodoStateContext = createContext(null);
const TodoDispatchContenxt = createContext(null);

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialTodoState);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContenxt.Provider value={dispatch}>
        {children}
      </TodoDispatchContenxt.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContenxt);
}
