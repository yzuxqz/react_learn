import React, { Component } from 'react';
import {Button} from 'antd'
import 'antd/dist/antd.css'
class App extends Component {
    render() {
        return (
            <div>
                <button>按钮</button>
                <Button type="primary">Primary Button</Button>
            </div>
        );
    }
}

export default App;