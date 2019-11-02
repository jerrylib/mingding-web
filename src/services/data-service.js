
import request from '@gem-mine/request'

export function getConfig() {
  return request.get('/config.json')
}
