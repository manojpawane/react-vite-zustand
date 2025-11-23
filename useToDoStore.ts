import { create } from 'zustand';

const useTodoStore = create((set) => ({
  todos: [],
  loading: false,

  fetchTodos: async () => {
    set({ loading: true });

    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    const data = await res.json();

    set({ todos: data, loading: false });
  }
}));

export default useTodoStore;
