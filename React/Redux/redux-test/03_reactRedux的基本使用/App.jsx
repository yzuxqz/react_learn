import React, { Component } from 'react';
import Count from './containers/Count'
import store from './redux/store.js'
class App extends Component {
    render() {
        return (
            <div>
                <Count store={store}/>
            </div>
        );
    }
}

export default App;