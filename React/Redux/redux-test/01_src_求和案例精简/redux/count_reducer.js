//初始状态
const initState = {count:0}

export default function (preState=initState.count,action) { 
    // 从action对象中获取type，data
    const  {type,data} = action
    console.log(preState);
    // 根据type决定加工数据
    switch (type) {
        case 'increment':
            return preState + data*1
        case 'decrement':
            return preState - data*1
        case 'incrementOfOdd':
            return preState + 2
        case 'incrementAsync':
            setTimeout(()=>{
                return preState + 3
            },500)
        default:
            return preState
    }
 }