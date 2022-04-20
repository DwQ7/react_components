import {useState,useEffect} from "react";

function HookClock(){
    const [time,setTime] = useState(new Date())

    useEffect(()=>{
        console.log('每次渲染结束都会更新')
        setTime(new Date())
    },[time])

    return (
        <div>当前时间:{time.toLocaleTimeString()}</div>
    )
}

export default HookClock