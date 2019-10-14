import React from 'react'
import { actions } from '@gem-mine/durex'

export default props => {
  return (
    <div>
      404 not found!
      <a onClick={actions.router.goBack}>
        ❮ 返回
      </a>
    </div>
  )
}
