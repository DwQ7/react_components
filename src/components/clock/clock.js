import { Component } from 'react';

class Clock extends Component{
    constructor(props) {
        super(props)
        this.state = {
            date:new Date(),
            count:1,
            numbers:[1,2,3,4,5],
        }
    }
    componentDidMount() {
        let that = this
        this.timer = setInterval(()=>{
            this.tick()
        },1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    tick(){
        this.setState({
            date: new Date(),
            count:this.state.count + 1
        })
    }

    onclick1 = () =>{
        console.log(this);
    }

    onClick2(id,e){
        console.log(id);
        console.log(e);
        console.log(this);
    }


    render() {
        return(
            <div>
                <h2>现在是{this.state.date.toLocaleTimeString()}</h2>
                <h2>Count:{this.state.count}</h2>
                <button onClick={this.onclick1}>Test1</button>
                <button onClick={(e) => this.onClick2(1,e)}>Test2</button>
            </div>
        )
    }
}

export default Clock