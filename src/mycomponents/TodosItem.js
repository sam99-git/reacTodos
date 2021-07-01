import React from 'react'


 function TodosItem({todo,onDelete}) {
    return (
        <div>
            <h2>{todo.title}</h2>
            <p>{todo.desc}</p>
            <button  class="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
            </div>
         )       
     }
export default TodosItem
