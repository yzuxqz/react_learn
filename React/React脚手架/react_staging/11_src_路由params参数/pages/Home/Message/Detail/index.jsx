import React, { Component } from 'react';
const contentArr =[
    {id:1,content:'内容1'},
    {id:2,content:'内容2'},
    {id:3,content:'内容3'}
]
class Detail extends Component {
    render() {
        const params = this.props.match.params
        const result = contentArr.find(v=>{
            return v.id==params.id
        })
        console.log(result);
        return (
            <div>
                <ul>
                    <li>ID:{params.id}</li>
                    <li>Title:{params.title}</li>
                    <li>Content:{result.content}</li>
                </ul>
            </div>
        );
    }
}

export default Detail;