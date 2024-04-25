/* --- STATE --- */
export interface Todo {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface TodoListState {
  isLoading: boolean;
  todos: Todo[] | null;
  errorMessage: string;
}
