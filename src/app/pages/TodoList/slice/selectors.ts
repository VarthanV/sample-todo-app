import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.todoList || initialState;

export const selectTodoList = createSelector([selectSlice], state => state);
