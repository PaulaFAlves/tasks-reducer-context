import React, { useState } from "react"
import { useTasksContext } from "../../pages/TasksContext"

type TaskProps = {
  task: {
    text: string
    id: number
  }
}

const Task = ({ task }: TaskProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const { dispatch } = useTasksContext()
  let content

  if (isEditing) {
    content = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: { ...task, text: e.target.value },
            })
          }}
          className="border-2 border-gray rounded m-2"
        />
        <button onClick={() => setIsEditing(false)} className="mx-2">
          Salvar
        </button>
      </>
    )
  } else
    content = (
      <>
        <p className="m-2">{task.text}</p>
        <button onClick={() => setIsEditing(true)} className="mx-2">
          Editar
        </button>
      </>
    )

  return (
    <>
      {content}
      <button
        onClick={() => {
          dispatch({ type: "deleted", id: task.id })
        }}
      >
        Remover
      </button>
    </>
  )
}

export default Task
