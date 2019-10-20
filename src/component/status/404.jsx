import React from 'react'
import { actions } from '@gem-mine/durex'

export default props => {
  return (
    <div>
      <p>
        正在建设中...
      </p>
      <a onClick={actions.router.goBack}>
        ❮ 返回
      </a>
    </div>
  )
}
