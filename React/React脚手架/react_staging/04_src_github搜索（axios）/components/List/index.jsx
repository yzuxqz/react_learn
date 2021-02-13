import React, { Component } from 'react';
import Card from '../Card'
class index extends Component {
    render() {
        const {users,isFirst,isLoading,err} =this.props
        return (
            <div className="row">
               {
               isFirst?'欢迎':
               err?{err}:
               isLoading?'loading...':
               users.map(v=>{
                   console.log(v);
                   return   <Card key={v.id} user={v}/>
               })} 
            </div>
        );
    }
}

export default index;