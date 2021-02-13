import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increment} from '../../redux/count/action'
class Count extends Component {
    jia=()=>{
        this.props.jia(1)
    }
    render() {
        return (
            <div>
                <h1>和：{this.props.count}</h1>
                <h2>总人数：{this.props.len}</h2>
                <button onClick={this.jia}>加</button>
            </div>
        );
    }
}

export default connect(
    state=>({count:state.he,len:state.rens.length}),
    {
        jia:increment
    }
)(Count)



