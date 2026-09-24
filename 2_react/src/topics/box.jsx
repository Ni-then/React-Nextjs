import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
    const [todo, setTodo] = useState(1); //state variable

    return (
        <div className=''>
            <button className='bg-red-400 rounded-xl ml-2 p-2' onClick={() => setTodo(1)}>1</button>
            {/* first time i click on the btn 1 , so control reach to the Render(props= todo --> 1) then useEffect calls but i use empty dependency array means its only run on first render (mount) on second , third--- render it will not run */}
            {/* SOl : pass the data (state variable) in the useEffect dependency array which means jb jb mera state variable (data) change hoga tb tb useEffect call hoga , means tb tb re-render hoga */}
            <button className='bg-red-400 rounded-xl ml-2 p-2' onClick={() => setTodo(2)}>2</button>
            <button className='bg-red-400 rounded-xl ml-2 p-2' onClick={() => setTodo(3)}>3</button>
            <button className='bg-red-400 rounded-xl ml-2 p-2' onClick={() => setTodo(4)}>4</button>

            <Render id={todo} />
        </div>
    );
};

function Render(props) {
    const [data, setData] = useState(null);
    const todoId = props.id;

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
            .then((res) => setData(res.data));
    }, [todoId]);

    return (
        <div>
            <div>
                <h2>{data?.title}</h2>
            </div>
        </div>
    );
}

export default App;