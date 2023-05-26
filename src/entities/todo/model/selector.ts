import { useAppDispatch, useAppSelector } from "../../../shared";
import { todoSlice } from "./slice";
import { AccordionVariant } from "./types";

export const selectTodo = (state: RootState) => state.todo;

export const todoAction = todoSlice.actions;

export const todoReducer = todoSlice.reducer;

export const useTodo = () => {
  return useAppSelector(selectTodo);
};

export const useTodoAction = () => {
  const dispatch = useAppDispatch();

  return {
    setActiveAccordion: (value: AccordionVariant) =>
      dispatch(todoAction.setActiveAccordion({ value })),
    setActiveDropdown: (id: number | undefined | null) =>
      dispatch(todoAction.setActiveDropdown({ id: id ? id : null })),
    setDotoStatus: ({ id, value }: { id: number | null; value: string }) =>
      dispatch(todoAction.setDotoStatus({ id, value })),
    cancelDropdown: () => dispatch(todoAction.cancelDropdown()),
  };
};
