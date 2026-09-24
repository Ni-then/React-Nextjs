import axios from "axios"
import { useState } from "react";

const App = () => {
  // means setTimput kra yeh sirf yeh baar he chal;ta hai but mene esmeh state variable data use kra so abh first time add huya new_entrty so mera data wala state variable change huya whihc cause re - render of App.jsx so abh jb yeh component re - render hoga, toh setTimeout phior chalega and this loops begins and begin to solve this we need to understand useEffectr kya meen sb sahi kaha
  const [data,setData] = useState([
    {title:"this is title"}
  ])
  setTimeout(()=>{
    setData([...data,{title:"new_entry"}])
  },1000)

  console.log(data[0].title)

  return (
    <div>

      {data.map((p) => <Todo title={p.title} />)}
      

    </div>
  )
}
function Todo(props){
  return (
    <div>
      <p className="font-thin text-yellow-500">{props.title}</p>
    </div>
  )
}

export default App