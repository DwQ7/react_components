import {useEffect, useState} from "react";

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

    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )

}

export default Alert