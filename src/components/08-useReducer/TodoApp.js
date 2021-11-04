import React, { useReducer,useEffect } from 'react'
import { todoReducer } from './todoReducer'
import { useForm } from '../../hooks/useForm';

import './styles.css'


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {


    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    useEffect(() => {
       localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    console.log(description);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: description ,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        };

        dispatch(action);
        reset();
    }


    return (
        <div>
            
            <h1>Todo App ({ todos.length })</h1>
            <hr />

            <div className="row">

                <div className="col-md-7">

                    <ul className="list-group list-group-flush">
                        {
                            todos.map( (todo, i) => (
                                <li 
                                    key={ todo.id }
                                    className="list-group-item"
                                >                            
                                    <p>{ i+1 }. { todo.desc }</p> 

                                    <button 
                                        className="btn btn-danger"
                                    >
                                        Borrar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>

                </div>

                <div className="col-md-5">
                    <h4>Agregar Tarea</h4>
                    <hr />
                    <form onSubmit={ handleSubmit }>
                        <input 
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Agregar una tarea"
                            autoComplete="off"
                            value={ description }
                            onChange={ handleInputChange }                            
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-3 btn-block"
                        >
                            Agrear Tarea
                        </button>
                    </form>

                </div>

            </div>

            
                       
        </div>
    )
}
