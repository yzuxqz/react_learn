import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Card from '../Card'
class index extends Component {
    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: ''
    }
    componentDidMount() {
        //订阅消息
        PubSub.subscribe('changeState', (_, stateObj) => {
            this.setState(stateObj)
        })
    }
    render() {
        const { users, isFirst, isLoading, err } = this.state
        return (
            <div className="row">
                {
                    isFirst ? '欢迎' :
                        err ? { err } :
                            isLoading ? 'loading...' :
                                users.map(v => {
                                    console.log(v);
                                    return <Card key={v.id} user={v} />
                                })}
            </div>
        );
    }
}

export default index;