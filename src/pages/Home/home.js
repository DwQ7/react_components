import { Component } from 'react'
import Test from "../../components/test"
import Clock from "../../components/clock"


class Home extends Component{
    render() {
        return (
            <div>
                <Test/>
                <Clock/>
            </div>
        )
    }
}

export default Home