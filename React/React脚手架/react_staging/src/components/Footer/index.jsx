import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './index.css'
class index extends Component {
    static propsTypes = {
        todos: PropTypes.array.isRequired,
        chooseAll: PropTypes.func.isRequired,
        deleteHasDone: PropTypes.func.isRequired
    }
    //chooseAll的回调
    handleChange = (event) => {
        const { chooseAll } = this.props
        chooseAll(event.target.checked)
    }
    //deleteHasDone的回调
    handleClick = () => {
        if (window.confirm('确定删除？')) {
            this.props.deleteHasDone()
        }
    }
    render() {
        const { todos } = this.props
        const doneCount = todos.reduce((pre, cur) => pre + (cur.done ? 1 : 0), 0)
        let total = todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={doneCount === total && total !== 0 ? true : false} onChange={this.handleChange} />
                </label>
                <span>
                    <span>已完成{doneCount}</span>
                    <span>/全部{total}</span>
                </span>
                <button className="btn btn-danger" onClick={this.handleClick}>清除已完成任务</button>
            </div>
        );
    }
}

export default index;