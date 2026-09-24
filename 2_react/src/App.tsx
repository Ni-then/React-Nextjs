import axios from "axios"
import { useState } from "react";

const App = () => {
  const [data,setData] = useState([])
  // jb bhe first time component render hota hai toh , woh by default values ko he render krta hai , so if later we update the value , so then woh show nahi hogi ,
  // bcz react only re-render the component when state-variable change

  // (code without state variable)
  // let data ; 
  // axios.get("https://jsonplaceholder.typicode.com/todos")
  // .then(res=>{
  //   data = res.data;
  // })
  // console.log("this is data",data)
  // (code with state variable)
  axios.get("https://jsonplaceholder.typicode.com/todos")
  .then(res=>{
    setData(res.data)
  })

  return (
    <div>
      {/* {JSON.stringify(data)} */}
      {data.map((p) => <Todo key={p.id} userId={p?.userId} title={p?.title} />)}

    </div>
  )
}
function Todo(props){
  return (
    <div>
      <h1 className="font-bod text-green-500">{props.userId}</h1>
      <p className="font-thin text-yellow-500">{props.title}</p>
    </div>
  )
}

export default App