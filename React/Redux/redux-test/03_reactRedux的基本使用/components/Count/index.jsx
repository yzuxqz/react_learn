import React, { Component } from 'react';

class Count extends Component {
    state={selectNumber:1}
    selectNumber=(e)=>{
        this.setState({selectNumber:e.target.value})
    }
    jia=()=>{
        this.props.jia(this.state.selectNumber)
    }
    jian=()=>{
        this.props.jian(this.state.selectNumber)
    }
    jiaAsync=()=>{
        this.props.jiaAsync(this.state.selectNumber)
    }
    jiaOdd=()=>{
        this.props.jiaOdd(this.state.selectNumber)
    }
    render() {
        const {count,jia,jian} =this.props
        return (
            <div>
                <h1>和：{count}</h1>
                <select name="" id="" onChange={this.selectNumber}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.jia}>加</button>
                <button onClick={this.jian}>减</button>
                <button onClick={this.jiaAsync}>异步加</button>
                <button onClick={this.jiaOdd}>奇数加</button>
            </div>
        );
    }
}

export default Count;