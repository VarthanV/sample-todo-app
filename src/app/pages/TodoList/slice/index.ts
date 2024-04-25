import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { todoListSaga } from './saga';
import { Todo, TodoListState } from './types';

export const initialState: TodoListState = {
  todos: null,
  isLoading: false,
  errorMessage: '',
};

const slice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    getTodos(state, action: PayloadAction<any>) {
      state.isLoading = true;
    },
    setTodos(state, action: PayloadAction<Todo[]>) {
      state.isLoading = false;
      state.todos = action.payload;
    },
    setTodosFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions: todoListActions } = slice;

export const useTodoListSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: todoListSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useTodoListSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
