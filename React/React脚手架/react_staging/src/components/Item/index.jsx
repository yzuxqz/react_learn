import React, { Component } from 'react';
import './index.css'
class index extends Component {
    state = {
        hover: false
    }
    handleMouse = (hover) => {
        return () => {
            this.setState({ hover })
        }
    }
    // 改变选中状态并传给爷爷组件
    handleChange = (id) => {
        const {updateTodo} =this.props
        return (event) => {
            updateTodo(id, event.target.checked)
        }
    }
    // 将需要删除的行id传给爷爷组件
    handleDelete=(id)=>{
        const {deleteTodo} = this.props
        return()=>{
            if(window.confirm('确定要删除？')){
                deleteTodo(id)
            }
        }
    }
    render() {
        const { id, name, done } = this.props
        const { hover } = this.state
        return (
            <li style={{ background: hover ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleChange(id)} />
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: hover ? 'block' : 'none' }} onClick={this.handleDelete(id)}>删除</button>
            </li>
        );
    }
}

export default index;