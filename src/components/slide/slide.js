import {useCallback, useEffect, useRef, useState} from "react";
import './index.css'

function Slide(props){
    //控制滑动框出现
    const [isSlideShow,setIsSlideShow] = useState(false)

    useEffect(()=>{

        console.log(props.isSlideShow);
        setIsSlideShow(props.isSlideShow)
    },[props.isSlideShow])

    return(
        <>
            <div className="slideBack" style={
                {
                    transform:(isSlideShow)?"translateX(0%)":"translate(-120%)"
                }
            }/>
        </>
    )
}

export default Slide