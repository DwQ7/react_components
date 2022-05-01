import Item from "./item";


function ItemList(props){
    console.log(props.goods);
    const goodsList = (
        <ul>
            {props.goods.goods.map((item) =>
                <li key={item.name}>
                    <Item
                        goodName={item.name}
                        goodPrice={item.price}
                    />
                </li>)
            }
        </ul>
    )
    return(
        <div>
            {goodsList}
        </div>
    )
}

export default ItemList