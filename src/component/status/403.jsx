import React from 'react'
import { actions } from '@gem-mine/durex'

export default props => {
  return (
    <div>
      您没有权限访问此页面!
      <a onClick={actions.router.goBack}>
        ❮ 返回
      </a>
    </div>
  )
}
