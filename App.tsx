import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCounterStore from './stores/useCounterStore'
import useUserStore from './stores/useUserStore'
import useTodoStore from './stores/useToDoStore'
import { useEffect } from 'react'

function App() {
  
  const count = useCounterStore((state:any) => state.count)
  const increase = useCounterStore((state:any) => state.increase)
    const login = useUserStore((state:any) => state.login);
    const user = useUserStore((state:any) => state.user);
    const todos = useTodoStore((state:any) => state.todos);
    const loading = useTodoStore((state:any) => state.loading);
    const fetchTodos = useTodoStore((state:any) => state.fetchTodos);


  useEffect(() => {
    fetchTodos();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>Hello, {user?.name}</p>
        <button onClick={increase}>
          count is {count}
        </button>
        <button onClick={() => login({ name: "Manoj" })}>Login</button>
         <ul>
            {todos.map(t => <li key={t.id}>{t.title}</li>)}
        </ul>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
