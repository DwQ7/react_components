import {useCallback, useEffect, useRef, useState} from "react";
import './hookTest.css'
import {useDebounce} from "../hooks";

const moveTo = (dom,delay,options) =>{
    dom.style.transform = `translate(${options.x})px`
    dom.style.transition = `left ${delay}ms`
}

function HookTest(){
    const [count , setCount] = useState(0)
    const inputEl = useRef(null)
    const block = useRef(null)
    const [cancel] = useDebounce(()=>{
        setCount(count)
    },2000,[count])


    useEffect(()=>{
        moveTo(block.current,1000,{x:600})
    },[])
    const onButtonClick = () =>{
        inputEl.current.focus()
    }

    const onInputChange = (e) =>{
        setCount(e.target.value)
    }

    const increment = useCallback(()=>{
        setCount(preCount => preCount+1)
    },[count])
    const decrement = useCallback(()=>{
        setCount(preCount => preCount-1)
    },[count])

    return (
        <div>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <div style={{margin: 20}}/>
            </div>
            <div>
                <input ref={inputEl} type="text" onChange={onInputChange}/>
                <button onClick={onButtonClick}>Focus input</button>
            </div>
            <div className='Block' ref={block}/>
            <h2>{count}</h2>
        </div>
    )
}

export default HookTest