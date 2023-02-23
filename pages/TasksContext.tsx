import { createContext, useContext, useReducer, ReactNode } from "react"
import tasksReducer from "../src/reducer/tasksReducer"

type Props = {
  children?: ReactNode
}

const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
]
let nextId = initialTasks.length

export const TasksContext = createContext<any>(null)

export const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  return (
    <TasksContext.Provider value={{ tasks, dispatch, nextId }}>
      {children}
    </TasksContext.Provider>
  )
}

export const useTasksContext = () => useContext(TasksContext)
