import React from 'react'
import { MdDelete } from 'react-icons/md'
import { TbEdit } from 'react-icons/tb'

const Todo = ({ task, toggleCompleted, deletTodo, editTodo }) => {
  return (
    <div className='todo'>
      <div className='todo-content'>
        <input
        className='checbox'
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleCompleted(task.id)}
        />
        <p style={{ width: '400px' }}
          onClick={() => toggleCompleted(task.id)}
          className={`${task.completed ? 'todo-complete' : ''} `} >{task.task}</p>
        <div className='icon'>
          <MdDelete color='rgba(255, 8, 8, 0.808)' onClick={() => deletTodo(task.id)} />
          <TbEdit color='rgb(40, 40, 40, 0.7)' onClick={() => editTodo(task.id)} />
        </div>
      </div>
    </div>
  )
}

export default Todo

