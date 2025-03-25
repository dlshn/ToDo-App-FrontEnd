import React , {useEffect, useState} from 'react'
import { CiCircleCheck } from "react-icons/ci";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import Create from './Create'
import axios from 'axios';

function Home() {
    const [todos, setTodos] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3001/get')
        .then(result=>setTodos(result.data))
        .catch(err=>console.log(err))
    },[])

    const handleEdit = (id) =>{
        axios.put(`http://localhost:3001/update/${id}`)
        .then(result=>location.reload())
        .catch(err=>console.log(err))
    }

    const handleDelete = (id) =>{
        axios.delete(`http://localhost:3001/delete/${id}`)
        .then(result=>location.reload())
        .catch(err=>console.log(err))
    }

  return (
    <>
    <div className="container">
        <div className='todo-box'>
            <h1>To-Do ListApp</h1>
            <Create/>  
        </div>

        <div className="task">
            {
                todos.length === 0
                ?
                <p>No tasks</p>
                :
                todos.map(todo=>(
                    <div className='task-item'>
                        <div className="checkbox" onClick={()=>handleEdit(todo._id)} >
                            {todo.done===true ?<IoCheckmarkDoneCircleSharp className='done-icon-fill'/>:<CiCircleCheck className='done-icon'/>}
                            <h3 className={todo.done?"doned-task-text":""}>{todo.task}</h3>
                        </div>
                        <div>
                            <span><MdDelete className='delete-icon' onClick={()=>handleDelete(todo._id)}/></span>
                        </div>
                    </div>
                    
                ))         
            }
        </div>
    </div>
    </>
  )
}

export default Home;