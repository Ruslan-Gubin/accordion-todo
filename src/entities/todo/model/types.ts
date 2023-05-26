export interface TodoModel {
  date: string;
  codeTodo: string;
  codeProject: string;
  todo: string;
  status: string | React.ReactNode;
  responsible: string;
  reassign: string;
  priority: string;
  comment: string;
  planTime: string;
  factTime: string;
  start: string;
  finish: string;
  _id?: number;
}

export type AccordionVariant = "completed" | "today" | "upcoming";

export interface TodosInitState {
  todos: TodoModel[];
  activeAccordion: AccordionVariant | "";
  sortTodos: TodoModel[];
  activeDropdown: number | null;
}
