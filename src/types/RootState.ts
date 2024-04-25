import { TodoListState } from 'app/pages/TodoList/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  todoList?: TodoListState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
