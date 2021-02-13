import React, { Component } from 'react';
import store from '../../redux/store.js'
class Count extends Component {
    state = {selectNumber:0}
    selectNumber=(e)=>{
        this.setState({
            selectNumber:e.target.value
        })
    }
    increment = ()=>{
        store.dispatch({type:'increment',data:this.state.selectNumber})
    }
    decrement = ()=>{
        store.dispatch({type:'decrement',data:this.state.selectNumber})
    }
    incrementOffOdd=()=>{
        store.dispatch({type:'incrementOffOdd',data:this.state.selectNumber})
    }
    incrementAsync=()=>{
        store.dispatch({type:'incrementAsync',data:this.state.selectNumber})
    }
    render() {
        console.log(store.getState().count);
        return (
            <div>
                <h2>和：{store.getState()}</h2>
                <select name="" id="" onChange={this.selectNumber}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementOffOdd}>奇数加</button>
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        );
    }
}

export default Count;