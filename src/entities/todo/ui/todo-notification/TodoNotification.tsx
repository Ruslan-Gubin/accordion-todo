import { todoNotifications } from "../../libs";
import { TodoField } from "../todo-field/TodoField";


const TodoNotification = () => {
  
  return (
    <TodoField todo={todoNotifications} bgGray />
  );
};

export { TodoNotification };