import React, { useState } from 'react'
import axios from 'axios'

const Create = () => {

  const [task, setTask]=useState()

  const handleAdd = ()=> {
    axios.post('http://localhost:3001/add', {task:task})
    .then(res=> {
      location.reload()  /* Automatically Reload after task add */
    })
    .catch(err=> {
      console.log(err)
    })
  }

  return (
    <>
        <input type="text" placeholder='Enter Task' className='input-field' onChange={(e)=>setTask(e.target.value)} />
        <button type='button' className='button' onClick={handleAdd}>Add</button>
    </>
  )
}

export default Create;
