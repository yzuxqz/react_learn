// //创建外壳组件
import React, { Component } from 'react'
// import Header from './components/Header'
// import List from './components/List'
// import Footer from './components/Footer'
// import './App.css'

// export default class App extends Component{
//   state={
//     todos:[
//     {id:1,name:'吃饭',done:true},
//     {id:2,name:'睡觉',done:false},
//     {id:3,name:'敲代码',done:true}]
//   }
//   //增加列表
//   addTodo=(todoObj)=>{
//     const {todos} = this.state
//     this.setState({todos:[todoObj,...todos]})
//   }
//   //更改选中状态
//   updateTodo=(id,done)=>{
//     const {todos} = this.state
//     const newTodos = todos.map(v=>{
//       if(v.id===id){
//         return {...v,done}
//       }else{
//         return v
//       }
//     })
//     this.setState({todos:newTodos})
//   }
//   //删除列表项
//   deleteTodo=(id)=>{
//     const {todos} = this.state
//     const newTodos = todos.filter(v=>{
//       return v.id !== id
//     })
//     this.setState({todos:newTodos})
//   }
//   //选中全部或取消全部
//   chooseAll=(done)=>{
//     const {todos} = this.state
//     const newTodos = todos.map(v=>{return {...v,done}})
//     console.log(newTodos);
//     this.setState({todos:newTodos})
//   }
//   //清除已完成任务
//   deleteHasDone=()=>{
//     const {todos} = this.state
//     const newTodos = todos.filter(v=>{
//       return v.done === false
//     })
//     console.log(newTodos);
//     this.setState({todos:newTodos})
//   }
//  render(){
//    const {todos} = this.state
//    return(
//     <div className="todo-container">
//       <div className="todo-wrap">
//         <Header addTodo = {this.addTodo}/>
//         <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
//         <Footer todos={todos} chooseAll={this.chooseAll} deleteHasDone={this.deleteHasDone}/>
//       </div>
//     </div>
//    ) 
//  }
// }

import { TransitionGroup } from 'react-transition-group' // ES6

// var CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup') // ES5 with npm
export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: ['hello', 'world', 'click', 'me'] };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({ items: newItems });
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));

    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>=
        <TransitionGroup
          transitionName="example"
          transitionEnterTimeout={5000}
          transitionLeaveTimeout={3000}>
          {items}
        </TransitionGroup>
      </div>
    );
  }
}