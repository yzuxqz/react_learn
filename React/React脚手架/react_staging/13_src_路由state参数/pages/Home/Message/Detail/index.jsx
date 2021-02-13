import React, { Component } from 'react';
import qs from 'querystring'
const contentArr =[
    {id:1,content:'内容1'},
    {id:2,content:'内容2'},
    {id:3,content:'内容3'}
]
class Detail extends Component {
    render() {
        const state = this.props.location.state || {}
        
        const {content} = contentArr.find(v=>{
            return v.id==state.id
        }) || {}
        return (
            <div>
                <ul>
                    <li>ID:{state.id}</li>
                    <li>Title:{state.title}</li>
                    <li>Content:{content}</li>
                </ul>
            </div>
        );
    }
}

export default Detail;