import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';
import React, { useEffect, useReducer } from 'react'
import "./styles.css"
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';


const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
    /*
    return [{
        id: new Date().getTime(),
        desc: "Aprender React",
        done: false
    }];
    */
}

export const TodoApp = () => {

    const [todo, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todo))
    }, [todo])
    

    const handleDelete = (todoId) => {
        const action = {
            type: "delete",
            payload: todoId
        }

        dispatch(action);
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: "toggle",
            payload: todoId
        })
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: "add",
            payload: newTodo
        })
    }


  return (
    <div>
        <h1>Tareas pendientes ({todo.length}) </h1>
        <hr />

        <div className='row'>
            <div className='col-7'>
                <h2><u>Por hacer:</u></h2>
                <TodoList todo={todo} 
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                />
            </div>

            <div className='col-5'>
                <TodoAdd handleAddTodo={handleAddTodo} />
            </div>
        </div>

    </div>
  )
}
