
import request from '@gem-mine/request'

export function getConfig() {
  // return request.get('http://39.98.133.179/config.json')
  return request.get('http://localhost:8080/config.json')
}
