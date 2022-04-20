import { Component } from 'react'
import Test from "../../components/test"
import Clock from "../../components/clock"
import HookTest from "../../components/hookTest"
import HookClock from "../../components/hookClock";
class Home extends Component{
    render() {
        return (
            <div>
                <Test/>
                <Clock/>
                <HookTest/>
                <HookClock/>
            </div>
        )
    }
}

export default Home