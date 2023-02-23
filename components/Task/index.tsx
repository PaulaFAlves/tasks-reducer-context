import React, { useState } from "react"

const Task = ({ task, handleChangeTask, handleDeleteTask }) => {
  const [isEditing, setIsEditing] = useState(false)
  let content

  if (isEditing) {
    content = (
      <>
        <input
          value={task.text}
          onChange={(e) => handleChangeTask({ ...task, text: e.target.value })}
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
      <button onClick={() => handleDeleteTask(task.id)}>Remover</button>
    </>
  )
}

export default Task
