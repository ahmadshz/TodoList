import React, { useState } from 'react'

const TodoEdit = ({editTodo, task}) => {
    const [value ,setValue] = useState(task.task)
   
    const handleChange = (e) => {
      e.preventDefault();
      editTodo(value, task.id)
      setValue('')
    }

  return (
      <form onSubmit={handleChange}>
        <input type='text' 
               className='input-todo'
               placeholder='Update Task...'
               onChange={(e) => setValue(e.target.value)}
               value={value}
               />
        <button className='btn' onSubmit={handleChange}>ُEdit Task</button>
      </form>
    
  )
}

export default TodoEdit
