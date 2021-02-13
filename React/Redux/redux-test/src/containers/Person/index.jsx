import React, { Component } from 'react';
import {connect} from 'react-redux'
class Person extends Component {
    addPerson=()=>{
        this.props.addPerson({name:this.name.value,age:this.age.value})
    }
    render() {
        return (
            <div>
               <h1>总人数：{this.props.persons.length}</h1>
               <h2>和：{this.props.he}</h2> 
               <input type="text" placeholder='姓名' ref={c=>this.name=c}/>
               <input type="text" placeholder='年龄' ref={c=>this.age=c}/>
               <button onClick={this.addPerson}>添加</button>
               <ul>
                   {
                       this.persons.map((v,i)=>{
                           return <li key={v.name}>姓名：{v.name}，年龄：{v.age}</li>
                       })
                   }
               </ul>
            </div>
        );
    }
}

export default connect(
    state=>({he:state.he,persons:state.persons}),
    {
        addPerson
    }
)(Person)