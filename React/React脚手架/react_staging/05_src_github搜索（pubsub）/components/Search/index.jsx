import React, { Component } from 'react';
import PubSub from 'pubsub-js'
import axios from 'axios'
class index extends Component {
    search = () => {
        const { input1: { value: keyword } } = this
        //发布消息
        PubSub.publish('changeState', { isFirst: false, isLoading: true })
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(res => {
            PubSub.publish('changeState', { isLoading: false,users:res.data.items })
        }).catch(err => {
            PubSub.publish('changeState', { err })
        })
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" ref={c => this.input1 = c} placeholder="enter the name you search" />&nbsp;<button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }
}

export default index;