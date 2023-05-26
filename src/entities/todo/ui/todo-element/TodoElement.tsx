import { FC } from "react";
import TodoDropDown from "../../../../features/todo/ui/todo-dropdown/TodoDropDown";
import { widthMap } from "../../libs/constant/widthMap";
import styles from "./TodoElement.module.scss";

interface TodoElementProps {
  element: string;
  notification: string;
  dropdown?: boolean;
  id?: number;
}

const TodoElement: FC<TodoElementProps> = ({
  element,
  notification,
  dropdown,
  id,
}) => {
  //@ts-ignore
  const width: number = widthMap[notification];
  const checkDropdown = dropdown && notification === "status";

  return (
    <div style={{ width }} className={styles.root}>
      {checkDropdown ? (
        <TodoDropDown value={element} id={id} />
      ) : (
        <span className={styles.span}>{element}</span>
      )}
    </div>
  );
};

export { TodoElement };
