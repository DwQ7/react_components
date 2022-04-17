import { Component } from 'react';
import {Link} from "react-router-dom";

class NavBar extends Component{
    render() {
        return (
            <div>
                <ul>
                    <Link to="/home">to Home</Link>
                    <Link to="/about">to About</Link>
                </ul>
            </div>
        )
    }
}

export default NavBar