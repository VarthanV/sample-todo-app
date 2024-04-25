/**
 *
 * TodoList
 *
 */
import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodoList } from './slice/selectors';
import { useTodoListSlice } from './slice';

interface Props {}

export const TodoList = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const { actions } = useTodoListSlice();
  const { todos, isLoading, errorMessage } = useSelector(selectTodoList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getTodos(null));
  }, []);

  useEffect(() => {
    if (errorMessage) {
      alert(errorMessage);
    }
  }, [errorMessage]);

  return (
    <Div>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <div>
        {' '}
        {isLoading ? (
          <p> Loading....</p>
        ) : (
          <div>
            {todos &&
              todos.map(todo => {
                return <p> {todo.title}</p>;
              })}
          </div>
        )}
      </div>
    </Div>
  );
});

const Div = styled.div``;
