import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import MyNavLink from './components/MyNavLink'
class App extends Component {
    render() {
        return (
            <div>
            <div className="row">
              <div className="col-xs-offset-2 col-xs-8">
                <div className="page-header"><h2>React Router Demo</h2></div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-2 col-xs-offset-2">
                <div className="list-group">
                // 路由链接
                <MyNavLink to='/test/about'>About</MyNavLink>
                <MyNavLink to='/test/home'>Home</MyNavLink>
                </div>
              </div>
              <div className="col-xs-6">
                <div className="panel">
                  <div className="panel-body">
                  //注册路由
                  <Switch>
                    <Route path='/test/about' component={About}></Route>
                    <Route path='/test/home' component={Home}></Route>
                  </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default App;