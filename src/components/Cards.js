import React from 'react';

const Cards = (props) => {
    //Making a card
    
    return (
        <div className="card">
            <div className="card-container">
                <div>
    <h1 className="card-title">{props.todo.title}</h1>
                    <p className="card-info">
                    {props.todo.todo}
                   
            </p>
                </div>
                <div className="card-options">
                    <img className="editPic" src="/edit.png" alt="" title="Edit Card" />
                    <img className="checkPic" src="/check.png" alt="" title="Done"/>
                    <img className="trashPic" src="/trash.png" alt="" title="Delete Card"/>
                </div>
            </div>
        </div>
    );
}
export default Cards;
