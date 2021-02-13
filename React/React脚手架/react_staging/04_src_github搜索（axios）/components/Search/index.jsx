import React, { Component } from 'react';
import axios from 'axios'
class index extends Component {
    search = () => {
        const { input1: { value: keyword } } = this
        const { saveUsers, changeIsFirst, changeIsLoading, saveErr } = this.props
        changeIsFirst(false)
        changeIsLoading(true)
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(res => {
            saveUsers(res.data.items)
            changeIsLoading(false)
        }).catch(err => {
            saveErr(err)
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