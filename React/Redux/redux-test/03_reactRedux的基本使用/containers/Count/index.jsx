import CountUI from '../../components/Count'
import {increment,decrement,jiaOdd,jiaAsync} from '../../redux/count_action'
import {connect} from 'react-redux'
function mapStateToProps(state){
    return{count:state}
}
function mapDispatchToProps(dispatch){
    return {
        jia:number=>dispatch(increment(number)),
        jian:number=>dispatch(decrement(number)),
        jiaOdd:number=>dispatch(jiaOdd(number)),
        jiaAsync:number=>dispatch(jiaAsync(number))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)