/**
 *
 * Asynchronously loads the component for TodoList
 *
 */

import { lazyLoad } from 'utils/loadable';

export const TodoList = lazyLoad(
  () => import('./index'),
  module => module.TodoList,
);
