import SearchBox from "./searchBox";
import ShowBox from "./showBox";
import {useEffect, useState} from "react";

const data = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
//模拟请求接口
function getData(){
    return new Promise((resolve,reject) =>{
        setTimeout(()  =>{
            resolve(data)
        },1000)
    })
}

function MainBox(){
    const [goods,setGoods] = useState([])

    useEffect(() =>{
        getData().then((res) =>{
            console.log(res);
            setGoods(res)
        })
    },[goods])

    return(
        <div>
            <SearchBox/>
            {goods&&
                <ShowBox
                    goods={goods}
                />}
        </div>
    )
}

export default MainBox