import React from "react"
import Task from "../Task"
import { useTasksContext } from "../../pages/TasksContext"

type TaskProps = {
  id: number
  text: string
  done: boolean
}

const TasksList = () => {
  const { tasks, dispatch } = useTasksContext()

  return (
    <ul>
      {tasks &&
        tasks.map((task: TaskProps) => (
          <div className="flex justify-between" key={task.id}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={(e) => {
                dispatch({
                  type: "changed",
                  task: { ...task, done: e.target.checked },
                })
              }}
            />

            <li className="flex justify-end">
              <Task task={task} />
            </li>
          </div>
        ))}
    </ul>
  )
}

export default TasksList
