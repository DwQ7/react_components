import {useState,useEffect} from "react";
function HookClock(){
    const [time,setTime] = useState(new Date())

    useEffect(()=>{
        setTime(new Date())
    },[time])

    return (
        <div>当前时间:{time.toLocaleTimeString()}</div>
    )
}

export default HookClock