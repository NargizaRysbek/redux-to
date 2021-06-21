import React from 'react'
import { increaseCount, decreaseCount } from '../../store/actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const Counter = ({count,increaseCount, decreaseCount}) => {
    return (
        <div>
            <button onClick={decreaseCount}>-</button>
            {count}
            <button onClick={increaseCount}>+</button>
        </div>
    )
}

// эти функции нам дают доступ 

const mapStateToProps = state => ({        
    count: state.count                    //initialState и ключ count 
})

// 1-метод без бинд
// const mapDispatchToProps = dispatch => ({
//     increaseCount: () => dispatch(increaseCount()),
//     decreaseCount: () => dispatch(decreaseCount())
// })

// 2 - метод с бинд
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        increaseCount,
        decreaseCount
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)