import React from "react"
import Task from "../Task"

type TaskProps = {
  id: number
  text: string
  done: boolean
}

type TasksProps = {
  tasks: TaskProps[]
  handleDeleteTask: (task: any) => void
  handleChangeTask: (taskId: any) => void
}

const TasksList = ({
  tasks,
  handleDeleteTask,
  handleChangeTask,
}: TasksProps) => {
  return (
    <ul>
      {tasks.map((task) => (
        <div className="flex justify-between" key={task.id}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={(e) =>
              handleChangeTask({ ...task, done: e.target.checked })
            }
          />

          <li className="flex justify-end">
            <Task
              task={task}
              handleDeleteTask={handleDeleteTask}
              handleChangeTask={handleChangeTask}
            />
          </li>
        </div>
      ))}
    </ul>
  )
}

export default TasksList
