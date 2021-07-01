 import React from 'react'
 import TodosItem from './TodosItem'
 function Todos(props) {
     const mystyle={
         minHeight:"70vh",
         margin:"40px auto"
     }
    return (
        <div className="container" style={mystyle} >
            <h1 className="text-center my-4">TODOS LIST</h1>
            {props.todos.length===0?<h2>No Todos To Display</h2>:
            props.todos.map((todo)=>{
                return( 
                <>
                <TodosItem todo ={todo}  onDelete = {props.onDelete}/>
                <hr/>
                </>
                )
            })
        }
         
           

        </div>
    );
}
export default Todos;
