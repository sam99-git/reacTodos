
import React, { useState } from 'react';
function AddTodo(props){
   
        const [title, setTitle] = useState("");
        const [desc, setDesc] = useState("");

       const submit = (e)=>{
           e.preventDefault();
           console.log("title or desc cannot be blank");

           
           if(!title || !desc){
               alert("title or desc cannot be blank");
           }
           props.addTodo(title,desc);
           setTitle("");
           setDesc("");
       

    }
    return(
        <div className="container my-3">
        <h2 className="text-center">ADD TODO</h2>
          <form onSubmit={submit}>
              
            
             <div className="mb-3">
              <label htmlFor="title" className="form-label"><h4>Todo title</h4></label>
              <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
            </div>
             <div className="mb-3">
              <label  htmlFor="desc" className="form-label"><h4>Todo Desc</h4></label>
              <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
              </div>
             <button type="submit" class="btn btn-warning"><h5>Add Todo</h5></button>
          </form>

        </div>
        );

    }
    export default AddTodo
