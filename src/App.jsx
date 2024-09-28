import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/todos'

function App() {

  return (
    <>
      <h1 className="text-stone-950 text-2xl">Learn Redux Toolkit.</h1>
      <Addtodo />
      <Todos />
    </>
  )
}

export default App
