import React from 'react';
import Cards from './Cards';


const TodoList = (props) => {
    
    return(
        <>
        {props.todos.map(todo => (
        <Cards todo={todo} />
    ))}
        </>
    );
}
export default TodoList;