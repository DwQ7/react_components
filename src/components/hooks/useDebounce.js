import {useEffect} from "react";

/**
 * 防抖Hook
 * @param {function} fn 需要防抖的函数
 * @param ms    防抖间隔
 * @param deps  依赖数组
 */

const useDebounce = function (fn,ms = 1000,deps = []){
    let timer = null
    useEffect(() => {
        if(timer){clearTimeout(timer)}
        let firstClick = !timer
        if(firstClick){fn()}
        timer = setTimeout(() => {
            timer = null
        },ms)
    },deps)

    const cancel = ()=>{
        clearTimeout(timer)
        timer = null
    }
    return [cancel]
}

export default useDebounce