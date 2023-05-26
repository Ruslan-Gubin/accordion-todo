import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";
import { reducers } from "./reducers";

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers,
});
