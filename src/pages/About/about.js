import { Component } from 'react';
import Alert from "../../components/alert";
class About extends Component{
    showAlert = false
    render() {
        return (
            <div>
                <button>显示</button>
                <Alert/>
                <h2>This is About page</h2>
            </div>
        )
    }
}

export default About