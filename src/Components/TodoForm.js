import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [value ,setValue] = useState('')
   
    const handleChange = (e) => {
      e.preventDefault();
      addTodo(value)
      setValue('')
    }

  return (
      <form onSubmit={handleChange}>
        <input type='text' 
               className='input-todo'
               placeholder='what is the task today'
               onChange={(e) => setValue(e.target.value)}
               value={value}
               />
         <button
                className='btn'
                type='submit'
                disabled={value.length < 1}
            >
                Add Task
            </button>
      </form>
    
  )
}

export default TodoForm
