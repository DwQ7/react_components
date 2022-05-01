

function List(props){
    const slider = (
        <ul>
            {props.posts.map((item) =>
                <li key={item.id}>
                    {item.title}
                </li>
                )
            }
        </ul>

    )
    const content = (
        props.posts.map((item) =>
            <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
            </div>

        )
    )
    return (
        <div>
            {slider}
            <hr/>
            {content}
        </div>
    )
}
export default List