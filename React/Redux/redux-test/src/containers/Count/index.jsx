import React, { Component } from 'react';
import {connect} from 'react-redux'
class Count extends Component {
    state={selectNumber:1}
    selectNumber=(e)=>{
        this.setState({selectNumber:e.target.value})
    }
    add=()=>{
        this.props.add(this.state.selectNumber)
    }
    addAsync=()=>{
        this.props.addAsync(this.state.selectNumber)
    }
    render() {
        return (
            <div>
                <h1>和：{this.props.he}</h1>
                <h2>总人数：{this.props.persons.length}</h2>
                <select name="" id="" onChange={this.selectNumber}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="2">2</option>
                </select>
                <button onClick={this.add}>加</button>
                <button onClick={this.addAsync}>异步加</button>
            </div>
        );
    }
}

export default connect(
    state=>({he:state.he,persons:state.persons}),
    {
        add,
        addAsync
    }
)(Count)