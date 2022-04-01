import React from 'react'

export const TodoListItem = ({todo, index, handleDelete, handleToggle}) => {
  return (
    <li key={todo.id} 
        className="list-group-item" >
        <input type="checkbox" className="custom-control-input" id="customCheck1"></input>
        <p className={`${todo.done && "complete"}`}
            onClick={() => handleToggle(todo.id) }>
            {index + 1}. {todo.desc}
        </p> 
        <button className='btn btn-danger rodolfo'
                onClick={() => handleDelete(todo.id)}>
            borrar    
        </button>
    </li>
  )
}
