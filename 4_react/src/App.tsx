import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [todo,setTodo] = useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>setTodo(res.data))
    // i want to refresh again after 10 second
    let interval = setInterval(()=>{
      axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => setTodo(res.data))
    },10*1000)

    return () =>{
      clearInterval(interval)
    }
  },[])
  return (
    <div>
      {todo.map((t)=><div>
          {t.title}
        </div>
        )}

    </div>
  )
}

export default App