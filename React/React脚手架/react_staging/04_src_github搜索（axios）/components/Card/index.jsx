import React, { Component } from 'react';
import './index.css'
class index extends Component {
    render() {
        const {user} = this.props
    
        return (
            <div className="card">
                <a href={user.html_url} target="_blank" rel="noreferrer">
                    <img alt="avatar" src={user.avatar_url} style={{ style: '100px' }} />
                </a>
                <p className="card-text">{user.login}</p>
            </div>
        );
    }
}

export default index;