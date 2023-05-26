import { TodoNotification } from "../../entities";
import { TodoAccordion } from "../../features";
import styles from "./Todo.module.scss";

const Todo = () => {
  return (
    <div className={styles.todo_wrapper}>
      <h2 className={styles.todo_title}>Задачи</h2>
      <TodoNotification />
      <TodoAccordion title="Выполненные задачи" accordionVariant="completed" />
      <TodoAccordion title="Задачи на сегодня" accordionVariant="today" />
      <TodoAccordion title="Предстоящие задачи" accordionVariant="upcoming" />
    </div>
  );
};

export { Todo };
