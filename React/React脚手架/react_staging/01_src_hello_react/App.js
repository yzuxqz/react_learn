//创建外壳组件
import React,{Component} from 'react'
import Hello from './components/Hello/Hello'
import Welcome from './components/Welcome/Welcome'
export default class App extends Component{
 render(){
   return(
     <div>
        <Hello/> 
        <Welcome/>
     </div>
   ) 
 }
}