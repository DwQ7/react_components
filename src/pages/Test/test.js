import {useEffect, useState,useCallback} from "react";
import Alert from "../../components/alert";
import Slide from "../../components/slide";


const Test = function (){
    const [showAlert,setShowAlert] = useState(false)
    const [showSlide,setShowSlide] = useState(false)
    const showAlertBtn = useCallback(()=>{
        document.body.style.overflow = 'hidden';
        setShowAlert(preShow => !preShow)
    },[showAlert])

    const showSlideBtn = useCallback(()=>{
        setShowSlide(preShow => !preShow)
    },[showSlide])
    return (
        <div>
            <h3>3</h3>
            <button onClick={showAlertBtn}>showAlert</button>
            <button onClick={showSlideBtn}>showSlide</button>
            <Alert
                visible={showAlert}
                title="温馨提示"
                message="是否确定"
                onConfirm={()=>setShowAlert(false)}
            />
            <Slide
                isSlideShow={showSlide}
            />
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        )
}

export default Test