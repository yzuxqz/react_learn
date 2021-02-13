import React, { Component } from 'react';
import { Route ,Redirect} from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Message from './Message'
class index extends Component {
    render() {
        return (
            <div>
                <h2>Home组件内容</h2>
                <div>
                    <ul class="nav nav-tabs">
                        <li>
                            <MyNavLink to='/test/home/news'>News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to='/test/home/message'>message</MyNavLink>
                        </li>
                    </ul>
                    <div>
                        {/* 注册路由 */}
                        <Route path='/test/home/news' component={News}/>
                        <Route path='/test/home/message' component={Message}></Route>
                        <Redirect to='/test/home/news'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;