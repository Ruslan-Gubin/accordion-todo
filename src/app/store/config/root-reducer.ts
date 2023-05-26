import { combineReducers } from '@reduxjs/toolkit';
import { todoReducer } from '../../../entities/todo/model';

 

export const rootReducer = combineReducers({
  todo: todoReducer,
})