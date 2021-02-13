import React, { Component } from 'react';
import Item from '../Item'
import PropTypes from 'prop-types'
import './index.css'
class index extends Component {
    static propTypes={
        todos:PropTypes.array.isRequired,
        updateTodo:PropTypes.func.isRequired
    }
    render() {
        const {todos,updateTodo,deleteTodo} = this.props
        return (
            <ul className="todo-main">
                {todos.map(v=>{
                    return <Item key={v.id} {...v} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                })}
            </ul>
        );
    }
}

export default index;