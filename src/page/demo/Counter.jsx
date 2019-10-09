import React from 'react'
import { actions, smart } from '@gem-mine/durex'
import style from './style'

@smart(
  state => {
    return {
      count: state.demo.count
    }
  },
  props => {
    return {
      increment() {
        actions.demo.change(1)
      },
      decrement() {
        actions.demo.change(-1)
      }
    }
  }
)
class Counter extends React.Component {
  render() {
    const props = this.props

    return (
      <div className={style.counter}>
        <div className={`${style['counter-number']} ${props.count > 10 ? style.highlight : ''}`}>{props.count}</div>
        <div className={style['counter-buttons']}>
          <button onClick={props.decrement} className={`${style.button} ${style['counter-button']}`}>
            减少
          </button>
          <button type="primary" onClick={props.increment} className={`${style.button} ${style['counter-button']}`}>
            增加
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
