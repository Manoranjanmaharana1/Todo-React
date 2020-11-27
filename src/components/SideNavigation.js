import React, { Component } from 'react';
import InputForm from './InputForm';

class SideNavigation extends Component{

    constructor(props) {
        super(props);
        this.state = {
            inputMode : false
        }
        this.changeMode = this.changeMode.bind(this);
        this.addNote = this.addNote.bind(this);
        
    }
    changeMode() {
        console.log("clicked");
        this.setState({
            inputMode: !this.state.inputMode
        })
    }

    addNote() {
       if(!this.state.inputMode) {
           document.querySelector(".input").classList.add("show-input");
           document.querySelector(".addBtn").classList.add("plus-cross");
       }else {
        document.querySelector(".input").classList.remove("show-input");
        document.querySelector(".addBtn").classList.remove("plus-cross");
       }
       this.changeMode();
    }

    render(){
    return (
        <div className="navbar-container">
            <div className="addBtn" onClick={this.addNote}>
                <svg id="plus" width="20" height="20" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20.1927" width="4.57627" height="45" rx="2.28814" fill="white" />
                    <rect y="24.8073" width="4.57627" height="45" rx="2.28814" transform="rotate(-90 0 24.8073)" fill="white" />
                </svg>
            </div>
            <div className="input">
                <InputForm setTodos={this.props.setTodos} todos={this.props.todos} addNote={this.addNote} renderCards={this.props.renderCards}/>
            </div>
        </div>
    );
    }
}
export default SideNavigation;