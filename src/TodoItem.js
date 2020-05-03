import React from "react"
import ReactDOM from "react-dom"

function TodoItem(props){
  const completedStyle = {
      fontStyle: "italic",
      color: "#cdcdcd",
      textDecoration:"line-through"
  }

  return (
    <div className="todo-item"> 
        <input type = "checkbox" 
        checked={props.item.completed} 
        onChange = {()=> props.handleChange(props.item.id)}>
        </input>
        <label><p style={props.item.completed? completedStyle:null}>{props.item.text}</p></label>
        
    </div> 
  ) 
}

export default TodoItem