import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'
const messageArr = [
    { id: 1, title: '消息1' },
    { id: 2, title: '消息2' },
    { id: 3, title: '消息3' },
]
class Message extends Component {
    render() {
        return (
            <div>
                <ul>
                    {messageArr.map((v, i) => {
                        return <li key={v.id}>
                            <Link to={`/test/home/message/detail/?id=${v.id}&title=${v.title}`}>{v.title}</Link>
                        </li>
                    })}
                </ul>
                <Route path='/test/home/message/detail' component={Detail} />
            </div>
        );
    }
}

export default Message;