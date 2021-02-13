import React, { Component } from 'react';
import Count from './containers/Count'
import Person from './containers/Person'
import { CSSTransition } from 'react-transition-group'
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <Count/>
//                 <Person/>
//             </div>
//         );
//     }
// }
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {items: ['hello', 'world', 'click', 'me']};
      this.handleAdd = this.handleAdd.bind(this);
    }
  
    handleAdd() {
      const newItems = this.state.items.concat([
        prompt('Enter some text')
      ]);
      this.setState({items: newItems});
    }
  
    handleRemove(i) {
      let newItems = this.state.items.slice();
      newItems.splice(i, 1);
      this.setState({items: newItems});
    }
  
    render() {
      const items = this.state.items.map((item, i) => (
        <div key={item} onClick={() => this.handleRemove(i)}>
          {item}
        </div>
      ));
  
      return (
        <div>
          <button onClick={this.handleAdd}>Add Item</button>
          <CSSTransition
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {items}
          </CSSTransition>
        </div>
      );
    }
  }
export default App;