import { FC, memo } from "react";
import { TodoModel } from "../..";
import { TodoElement } from "../todo-element/TodoElement";

import styles from "./TodoField.module.scss";

interface TodoFieldProps {
  todo: TodoModel;
  bgGray?: boolean;
  dropdown?: boolean;
}

const TodoField: FC<TodoFieldProps> = memo(({ todo, bgGray, dropdown }) => {
  const classes = [styles.root];

  if (!bgGray) {
    classes.push(styles.hover);
  } else {
    classes.push(styles.gray);
  }

  return (
    <ul className={classes.join(" ")}>
      {Object.entries(todo).map((elem) => (
        <TodoElement
          key={elem[0]}
          element={elem[1]}
          notification={elem[0]}
          dropdown={dropdown}
          id={todo._id}
        />
      ))}
    </ul>
  );
});

export { TodoField };
