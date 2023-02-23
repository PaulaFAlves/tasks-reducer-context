import type { NextPage } from "next"
import { useState } from "react"
import AddTask from "../components/AddTask"
import TasksList from "../components/TasksList"
import Title from "../components/Title"
import { TasksProvider } from "./TasksContext"

type TextProps = {
  text: string
}

const Home: NextPage = () => {
  const [text, setText] = useState<TextProps | null>(null)

  return (
    <TasksProvider>
      <div className="w-[20%] h-screen m-auto">
        <Title />

        <TasksList />
        <AddTask text={text} setText={setText} />
      </div>
    </TasksProvider>
  )
}

export default Home
