import React, { Component } from 'react';
import qs from 'querystring'
const contentArr =[
    {id:1,content:'内容1'},
    {id:2,content:'内容2'},
    {id:3,content:'内容3'}
]
class Detail extends Component {
    render() {
        const {search} = this.props.location
        const result = qs.parse(search.slice(1))
        const {content} = contentArr.find(v=>{
            return v.id==result.id
        })
        return (
            <div>
                <ul>
                    <li>ID:{result.id}</li>
                    <li>Title:{result.title}</li>
                    <li>Content:{content}</li>
                </ul>
            </div>
        );
    }
}

export default Detail;