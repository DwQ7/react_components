import { Component } from 'react';

class Clock extends Component{
    constructor(props) {
        super(props)
        this.state = {
            date:new Date()
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
            date: new Date()
        })
    }
    render() {
        return(
            <div>
                <h2>现在是{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock