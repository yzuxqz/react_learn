import React, { Component } from 'react';
import  axios from 'axios'
class App extends Component {
    getData=()=>{
        axios.get('http://localhost:3000/students').then(res=>{
            console.log(res);
        })
    }
    render() {
        return (
            <button onClick={this.getData}>
                获取数据
            </button>
        );
    }
}

export default App;