import axios from 'axios'
import React, { useState ,useEffect} from 'react'

const App = () => {
  // data is a state variable ,so jb jb state var change hoga , component re-render hoga 
  // Note : only first time this component is rendered , will data be intialized to [] , in all futute re-renders , it will not get re-initalized
  const [data,setData] = useState([])
  // if the dependency array (2nd argument) is empty , so this function only runs on the first render (mount)
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(res=>setData(res.data))
  },[])
  return (
    <div>
      {data.map((p)=><Todo title = {p.title}/>)}
    </div>
  )
}

function Todo(props){
  return (
    <div>
      {props.title}
    </div>
  )
}

export default App