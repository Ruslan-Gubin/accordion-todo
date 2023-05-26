import { mockTodos } from "../libs/service/mockTodos";
import { TodosInitState } from "./types";

const initialState: TodosInitState = {
  todos: mockTodos,
  activeAccordion: "today",
  sortTodos: [],
  activeDropdown: null,
};

export { initialState };
