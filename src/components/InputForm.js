import React, { Component } from 'react';


class InputForm extends Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);

    }
    submitForm(e) {
        e.preventDefault();
        const Title = e.target.title.value;
        const Todo = e.target.todo.value;
        e.target.title.value = e.target.todo.value = "";
        this.props.addNote();
        console.group(Title + "  " + Todo);
        //console.log(this.props);
        this.props.setTodos([
            ...this.props.todos,{
            title : Title,
            todo : Todo,
            completed : false,
            id : Math.random()*1000
            }
        ]
        )
        
        // this.props.renderCards();
        
        // this.props.renderCards();
        //this.props.setTodos(this.props.todos);
    }
    render() {
        return (
            <div className="form-container">
                <h1 className="card-title heading">Please add your To-do item</h1>
                <form onSubmit={this.submitForm}>
                    <span>
                        <label for="title" className="text-small-uppercase">Title</label>
                        <input autoComplete="off" className="text-body" id="title" name="title" type="text" required />
                    </span>
                    <span>
                        <label for="todo" className="text-small-uppercase">To-do</label>
                        <textarea autoComplete="off" rows="10" col="70" className="text-body" id="todo" name="todo" type="text" required />
                    </span>
                    
                    <input className="text-small-uppercase" id="submit" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
export default InputForm;