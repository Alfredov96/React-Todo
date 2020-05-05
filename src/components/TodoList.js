// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';
import Css from '../components/Todo.css';

const TodoList = props => {
    return (
        <div>
            {
                props.task.map((item )=> 
                <Todo item={item} key={item.id} toggleItem = {props.toggleItem}/>
                )
            }
            
            <button className="clear-btn" onClick={props.clearTodos}>
                clear
            </button>
        </div>
    );
};

export default TodoList;