import axios from "axios"
import { useState } from "react";

const App = () => {
    // setTimeout toh sirf ek baar he chalta hai , toh phir yeh new_enetry baar baar kaise ho rahi hai 
    // bcz -> setTimeout sirf ek baar he chalta hai , pr hmneh state variable data , ko update kra , so in react jb bhe koi state variable change hoga toh , component re-render hoga , pr DOM phir seh puri render nahi hogi , sirf jaha update/change huya hai , waha he DOM update hogi , so now component-render huya toh setTImeout phir chalega (setTimout dobara create hoga) , and this loops begin , so solve this we need to learn useEffect
    const [data, setData] = useState([
        { title: "this is title" }
    ])
    setTimeout(() => {
        setData([...data, { title: "new_entry" }])
    }, 1000)

    console.log(data[0].title)

    return (
        <div>
            {data.map((p) => <Todo title={p.title} />)}
        </div>
    )
}
function Todo(props) {
    return (
        <div>
            <p className="font-thin text-yellow-500">{props.title}</p>
        </div>
    )
}

export default App