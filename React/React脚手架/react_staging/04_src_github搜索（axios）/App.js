import React, { Component } from 'react';
import Search from './components/Search'
import List from './components/List'
class App extends Component {
    state={users:[],
    isFirst:true,
    isLoading:false,
    err:''}
    saveUsers=(users)=>{
        this.setState({users})
    }
    changeIsFirst=(isFirst)=>{
        this.setState({isFirst})
    }
    changeIsLoading=(isLoading)=>{
        this.setState({isLoading})
    }
    saveErr=(err)=>{
        this.setState({err:err.message})
    }
    render() {
        const {users,isFirst,isLoading,err} = this.state
        return (
            <div className="container">
                <Search saveUsers={this.saveUsers} changeIsFirst={this.changeIsFirst} changeIsLoading={this.changeIsLoading} saveErr={this.saveErr}/>
                <List users={users} isFirst={isFirst} isLoading={isLoading} err={err}/>
            </div>
        );
    }
}

export default App;