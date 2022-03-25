import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1){
            return ;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }


        handleAddTodo(newTodo);
        reset();
        console.log("Hola mundo")
    }


  return (
    <>
        <h2><u>Agregar tarea</u></h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    className='form-control'
                    name="description"
                    placeholder="Por hacer...."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                />
                <button 
                type='submit'
                className='btn btn-outline-primary mt-1 col-12' >
                    Agregar
                </button>
            </form>
    </>
  )
}
