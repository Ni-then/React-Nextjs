import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {
  const [todo,setTodo] = useState(1)
  return (
    <div>
      <button className='text-xl bg-amber-500 p-2 ml-4' onClick={()=>setTodo(1)}>1</button>
      <button className='text-xl bg-amber-500 p-2 ml-4' onClick={()=>setTodo(2)}>2</button>
      <button className='text-xl bg-amber-500 p-2 ml-4' onClick={()=>setTodo(3)}>3</button>
      <RenderTodo id={todo}/>
    </div>
  )
}

function RenderTodo(props){
  const [data,setData] = useState()
  const id = props.id;
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res)=>setData(res.data))
  },[id])
  return(
    <div>
      {data?.title}
    </div>
  )
} 

export default App