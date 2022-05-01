import { Component } from 'react';
import Alert from "../../components/alert";
import List from "../../components/list";
class About extends Component{
    showAlert = false
    numbers = [1,2,3,4,5]
    posts = [
        {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];
    render() {
        return (
            <div>
                <button>显示</button>
                <Alert/>
                <h2>This is About page</h2>
                <List numbers={this.numbers} posts={this.posts}/>
            </div>
        )
    }
}

export default About