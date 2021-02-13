import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addPerson} from '../../redux/person/action'
class Person extends Component {
    addPerson=()=>{
        const {inputName,inputAge} = this
        this.props.addPerson({name:inputName.value,age:inputAge.value})
    }
    render() {
        return (
            <div>
                <h1>和：{this.props.he}</h1>
                <h2>总人数：{this.props.rens.length}</h2>
                <input type="text" placeholder='姓名' ref={c=>this.inputName =c }/>
                <input type="text" placeholder='年龄' ref={c=>this.inputAge =c }/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.rens.map((v)=>{
                            return <li key={v.name}>姓名：{v.name},年龄：{v.age}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    state=>({rens:state.rens,he:state.he}),
    {
        addPerson
    }
)(Person)