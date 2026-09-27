import axios from "axios"
import { useEffect, useState } from "react"

export function useTodo2() {
    // custom hook
    const [todo, setTodo] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((res) => setTodo(res.data))
    }, [])

    return {todo,setTodo};
}