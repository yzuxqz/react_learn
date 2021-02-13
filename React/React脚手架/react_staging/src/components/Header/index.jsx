import React, { Component } from 'react';
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'
class index extends Component {
    static propTypes={
        addTodo:PropTypes.func.isRequired
    }
    handleKeyUp=(event)=>{
        const {addTodo} = this.props
        if(event.keyCode === 13){
            if(event.target.value.trim()===''){
                alert('内容不能为空！')
                return
            }
            addTodo({id:nanoid(),name:event.target.value,done:false})
            event.target.value=''
        }
    }   
    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        );
    }
}

export default index;