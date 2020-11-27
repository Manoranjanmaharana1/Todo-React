import React from 'react';
import Cards from './Cards';
import SideNavigation from './SideNavigation';
import TodoList from './TodoList';

const Main = () => {
    let [todos, setTodos] = React.useState([]);
    const renderCards = () => {
        console.log(todos);
        return (
            <h1>Hello</h1>
        )
    }
    return(
        <div>
        <SideNavigation setTodos={setTodos} todos={todos} renderCards={renderCards}/>
        {/* <TodoList todos={todos} /> */}
        {todos.map(todo => (
        <Cards todo={todo} />)) }
        
        </div>
    );
}
export default Main;