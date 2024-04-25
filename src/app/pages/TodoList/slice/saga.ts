import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { todoListActions as actions } from '.';

import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchTodos = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts',
  );
  return response;
};

function* fetchTodosSaga(action: PayloadAction) {
  try {
    const response = yield call(fetchTodos);
    return yield put(actions.setTodos(response.data));
  } catch (e: any) {
    return yield put(actions.setTodosFailed(e));
  }
}

export function* todoListSaga() {
  yield takeLatest(actions.getTodos.type, fetchTodosSaga);
}
