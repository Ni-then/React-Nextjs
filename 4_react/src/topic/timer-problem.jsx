import React, { useEffect, useReducer, useRef, useState } from 'react'

const App = () => {
    const [timer, setTimer] = useState(0)
    // const [interval, setIntervalVarible] = useState()
    let interval = useRef(0)
    // problem : 
    // timer and setTimer yeh state variable hai, by default timer ki value 0 hai
    // btn click krne pr function chalega
    // setInterval use kra
    // intial value timer ki 0 
    // but then (timer + 1);setTImer// state -- variable change , so re-render 
    // pr mere timer ki value update hho gayi hhai now its 1 
    // but problem is mera abhi bhe old setInterval, chal raha hai, jiske under timer ki old value hai whihc is 0, na ki 1 
    // is liye timer is stuck on 1 second ??
    function startWatch() {
        // interval.current , this is almost behaving like the global variable , it does not cause the re-render
        interval.current= setInterval(() => {
            // setTimer(timer+1) // this not ??
            setTimer((s) => { // s : latest variable ki state hoti hai
                return s + 1;
            })
            // or
            // setTimer(s=>s+1)
        }, 1000)
        // setIntervalVarible(i)
        // my setInterval is working on every one second , but some how this timer is not changed or it just stuck at 1 second
    }
    function stopWatch() {
        // clearInterval(interval)
        clearInterval(interval.current)

    }
    // whole problem : jaise jaise timer ki value update ho rahi hai means 1, 2, 3 ,4 ---- so har baar mera component re-render ho raha hai

    return (
        <div>
            <button onClick={() => startWatch()}>start watch</button>
            <button onClick={() => stopWatch()}>stop watch</button>
            <p>{timer}s</p>
        </div>
    )
}

export default App