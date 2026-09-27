import { useTodo2 } from "../hooks/useTodo2"
const App = () => {
  const {todo,setTodo} = useTodo2()
  return (
    <div>
      {/* {todo.map((t)=><div>
          {t.title}
        </div>
        )} */}
        {todo.map(t=><Todo title={t.title} id = {t.id} setTodo={setTodo}/>)}
    </div>
  )
}
type TodoType = { title: string, id: string ,setTodo:any }
function Todo({title,id,setTodo}:TodoType){
  return (
    <div>
        {title}
        {/* <button onClick={()=>{
          setTodo(t=>t.filter(x=>x.id != id))
        }}>Delete</button> */}
        <DeleteBtn setTodo={setTodo} id = {id}/>
    </div>
  )
}
function DeleteBtn({setTodo,id}){
  return <div onClick={()=>{
    setTodo(t=>t.filter(x=>x.id != id))
  }}>
    Delete
  </div>
}

export default App