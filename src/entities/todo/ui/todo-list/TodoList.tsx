import { TodoModel } from "../../model";
import { TodoField } from "../todo-field/TodoField";

import styles from "./TodoList.module.scss";

interface TodoListProps {
  todos: TodoModel[];
  active: boolean;
}

const TodoList = ({ todos, active }: TodoListProps) => {
  return (
    <ul
      className={
        active
          ? `${styles.todo_list} ${styles.active}`
          : `${styles.todo_list} ${styles.hide}`
      }
    >
      {todos.map((todo) => (
        <TodoField todo={todo} key={todo._id} dropdown={true} />
      ))}
    </ul>
  );
};

export default TodoList;
