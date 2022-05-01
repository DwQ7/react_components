import ItemList from "./itemList";


function ShowBox(props){

    return(
        <div>
            <div style={{display:"flex",flex:1}}>
                <h3>Name</h3>
                <h3>Price</h3>
            </div>
            <ItemList
                goods={props}
            />
        </div>
    )
}

export default ShowBox