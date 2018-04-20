import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class SingleTodo extends Component {
//     constructor() {
//         super();
//     }

//     render () {
//         return (
//             <li>{this.props.todo}<button onClick={this.props.delete}>X</button></li>
//         );
//     }
// }

const SingleTodo = props => {
    return (
        <li>{props.todo}<button onClick={this.props.delete}>X</button></li>
    );
}

export default SingleTodo;