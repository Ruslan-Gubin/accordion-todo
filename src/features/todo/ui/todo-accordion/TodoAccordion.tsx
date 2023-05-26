import { FC } from "react";
import { AccordionVariant, useTodo, useTodoAction } from "../../../../entities";
import TodoList from "../../../../entities/todo/ui/todo-list/TodoList";
import { AccordionBirds } from "../../../../shared";
import styles from "./TodoAccordion.module.scss";

interface TodoAccordionProps {
  title: string;
  accordionVariant: AccordionVariant;
}

const TodoAccordion: FC<TodoAccordionProps> = ({ title, accordionVariant }) => {
  const { setActiveAccordion } = useTodoAction();
  const { activeAccordion, todos, sortTodos } = useTodo();

  const active = activeAccordion === accordionVariant;
  const todosVariant = activeAccordion === "today" ? todos : sortTodos;

  return (
    <div className={styles.root}>
      <div
        onClick={() => setActiveAccordion(accordionVariant)}
        className={styles.todo_accordion}
      >
        <span className={styles.todo_accordion__title}>{title}</span>
        <AccordionBirds
          active={active}
          className={styles.todo_accordion__birds}
          classActive={styles.todo_accordion__active}
        />
      </div>

      <TodoList todos={todosVariant} active={active} />
    </div>
  );
};

export { TodoAccordion };
