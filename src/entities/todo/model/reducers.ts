import { PayloadAction } from "@reduxjs/toolkit";
import { AccordionVariant, TodosInitState } from "./types";

export const reducers = {
  setActiveAccordion(
    state: TodosInitState,
    action: PayloadAction<{ value: AccordionVariant }>
  ) {
    if (state.activeAccordion === action.payload.value) {
      state.activeAccordion = "";
      return;
    }

    state.activeAccordion = action.payload.value;

    if (action.payload.value === "completed") {
      state.sortTodos = state.todos.filter(
        (todo) => todo.status === "completed"
      );
    }

    if (action.payload.value === "upcoming") {
      state.sortTodos = state.todos.filter(
        (todo) => todo.status === "work" || todo.status === "paused"
      );
    }
  },

  setActiveDropdown(
    state: TodosInitState,
    action: PayloadAction<{ id: number | null | undefined }>
  ) {
    if (!action.payload.id) return;

    if (state.activeDropdown === action.payload.id) {
      state.activeDropdown = null;
      return;
    }

    state.activeDropdown = action.payload.id;
  },

  cancelDropdown(state: TodosInitState) {
    state.activeDropdown = null;
  },

  setDotoStatus(
    state: TodosInitState,
    action: PayloadAction<{ value: string; id: number | null }>
  ) {
    state.todos.forEach((todo) => {
      if (todo._id === action.payload.id) {
        todo.status = action.payload.value;
      }
    });

    if (state.activeAccordion === "completed") {
      state.sortTodos = state.todos.filter(
        (todo) => todo.status === "completed"
      );
    }

    if (state.activeAccordion === "upcoming") {
      state.sortTodos = state.todos.filter(
        (todo) => todo.status === "work" || todo.status === "paused"
      );
    }

    state.activeDropdown = null;
  },
};
