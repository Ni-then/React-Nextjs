import { useState } from "react"

const App = () => {
    const [interval, setIntervalID] = useState()
    // why its stuck in 1second
    // timer is state var --> so means jb state var change hoga re-render bhe hoga ,  (re-render)-_> cause
    // timer ki value update ho gayi phle 0 thi aabh 1 hai
    // but problem is , mera abhi bhe old SetINtervaql he chal raha hai , means uske under timer ki value bhe old wali he hai which is zero , so even we are trying to update the timer but old setTImeut use ho raha hai , jsike wajha seh , timer ki value bhe old wali use ho rahi hai 
    // but problem is , mera abhi bhe old SetINtervaql he chal raha hai , means uske under timer ki value bhe old wali he hai which is zero , so even we are trying to update the timer but old setTImeut use ho raha hai , jsike wajha seh , timer ki value bhe old wali use ho rahi hai
    const [timer, setTimer] = useState(0)
    function StartWatch() {
        let i = setInterval(() => {
            // setTimer(timer+1)
            // setTimer(s=>s+1);// s: latest state variable hai uski state deta hai 
            setTimer((s) => {
                return s + 1;
            })
        }, 1000)
        setIntervalID(i);
    }
    function stopWatch() {
        clearInterval(interval)
    }
    return (
        <div>
            <button onClick={() => StartWatch()}>Start watch</button>
            <button onClick={() => stopWatch()}>Stop watch</button>
            <p>
                {timer}s
            </p>
        </div>
    )
}

export default App