import type { NextPage } from "next"
import { useReducer, useState } from "react"
import AddTask from "../components/AddTask"
import TasksList from "../components/TasksList"
import Title from "../components/Title"
import tasksReducer from "../src/reducer/tasksReducer"

const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
]
let nextId = initialTasks.length

const Home: NextPage = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)
  const [text, setText] = useState("")

  function handleAddTask(text: string) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    })
    setText("")
  }

  function handleChangeTask(task: any): void {
    dispatch({
      type: "changed",
      task: task,
    })
  }

  function handleDeleteTask(taskId: number): void {
    dispatch({
      type: "deleted",
      id: taskId,
    })
  }

  return (
    <div className="w-[20%] h-screen m-auto">
      <Title />

      <TasksList
        tasks={tasks}
        handleChangeTask={handleChangeTask}
        handleDeleteTask={handleDeleteTask}
      />
      <AddTask handleAddTask={handleAddTask} text={text} setText={setText} />
    </div>
  )
}

export default Home
