import {useEffect, useState} from "react";
import './index.css'
/**
 * 弹窗组件
 * @param props
 * @constructor
 */
function Alert(props){
    //useState初始化变量
    const [visible,setVisible] = useState(props.visible)
    //外部的visible发生变化时，同时更新visible
    useEffect(() =>{
        setVisible(props.visible)
    },[props.visible])
    //弹窗回调函数
    function handleConfirm(){
        document.body.style.overflow = 'auto';
        setVisible(false)
        props.onConfirm(false)
    }
    return (
        <>
            {visible&&(
                <div className="alertBackGround">
                    <div className="alertContainer">
                        <h3>{props.title}</h3>
                        <div className="alertContent">{props.message}</div>
                        <div className="alertBtn">
                            <button className="alertConfirm" onClick={handleConfirm}>{props.confirmText||'确定'}</button>
                        </div>
                    </div>
                </div>
            )}
        </>

    )

}

export default Alert