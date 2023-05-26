import { FC, useEffect, useMemo } from "react";
import { useTodo, useTodoAction } from "../../../../entities";
import { namesDropDownMap } from "../../libs/namesDropDownMap";
import styles from "./TodoDropDown.module.scss";

interface TodoDropDownProps {
  value: string;
  id?: number;
}

const TodoDropDown: FC<TodoDropDownProps> = ({ value, id }) => {
  const { setActiveDropdown, setDotoStatus, cancelDropdown } = useTodoAction();
  const { activeDropdown } = useTodo();

  const todoId = id ? id : null;

  const checkActive = useMemo(() => {
    if (!activeDropdown && !id) return;
    return activeDropdown === id;
  }, [activeDropdown]);

  const optionClasses = (str: string) => {
    return value === str
      ? `${styles.dropdown_select_item} ${styles.active}`
      : styles.dropdown_select_item;
  };

  const handleCloseDropDown = (e: any) => {
    if (e.target.id !== "drop-down") {
      cancelDropdown();
    }
  };

  useEffect(() => {
    if (!activeDropdown) return;

    window.document.addEventListener("click", handleCloseDropDown);
    return () => {
      window.document.removeEventListener("click", handleCloseDropDown);
    };
  }, [activeDropdown]);

  return (
    <div id="drop-down" onClick={(e) => e.stopPropagation()}>
      <div
        onClick={() => setActiveDropdown(id)}
        className={styles.todo_dropdown}
      >
        {namesDropDownMap.get(value)}
        <svg
          className={checkActive ? styles.todo_dropdown__active : ""}
          width="6"
          height="5"
          viewBox="0 0 6 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.258295 1.75972L2.41663 3.91805C2.74163 4.24305 3.26663 4.24305 3.59163 3.91805L5.74996 1.75972C6.27496 1.23472 5.89996 0.334717 5.15829 0.334717H0.841628C0.0999614 0.334717 -0.266705 1.23472 0.258295 1.75972Z"
            fill="#373745"
          />
        </svg>
      </div>

      {checkActive && (
        <div className={styles.todo_dropdown__select}>
          <option
            onClick={() => setDotoStatus({ id: todoId, value: "completed" })}
            className={optionClasses("completed")}
            value="completed"
          >
            Выполнена
          </option>
          <option
            onClick={() => setDotoStatus({ id: todoId, value: "paused" })}
            className={optionClasses("paused")}
            value="paused"
          >
            На паузе
          </option>
          <option
            onClick={() => setDotoStatus({ id: todoId, value: "work" })}
            className={optionClasses("work")}
            value="work"
          >
            В работе
          </option>
        </div>
      )}
    </div>
  );
};

export default TodoDropDown;
