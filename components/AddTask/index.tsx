import React, { useState } from "react"

const AddTask = ({ handleAddTask, text, setText }) => {
  return (
    <div className="flex-auto m-4">
      <input
        type="text"
        className="border-2 border-gray rounded"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button
        className="m-2 px-2 border-2 border-gray rounded disabled:opacity-20"
        onClick={() => handleAddTask(text)}
        disabled={!text}
      >
        Adicionar
      </button>
    </div>
  )
}

export default AddTask
