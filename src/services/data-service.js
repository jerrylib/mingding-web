
// import request from '@gem-mine/request'

export function getConfig() {
  // return demo.get('http://192.168.251.10:28000/data.json')
  return Promise.resolve({
    menus: [{
      'title': '页面一',
      'path': 'page.page1'
    },
    {
      'title': '页面二',
      'path': 'page.page2'
    },
    {
      'title': '页面三',
      'path': 'page.page3'
    },
    {
      'title': '页面四',
      'path': 'page.page4'
    },
    {
      'title': '页面五',
      'path': 'page.page5'
    }, {
      'title': '页面六',
      'path': 'page.page6'
    }],
    products: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1],
    contactInfo: {
      tel: '11111111111',
      fox: '0591-111111',
      email: 'js_bin@163.com',
      address: 'ant-tabs-tab-next ant-tabs-tab-btn-disabled'
    }
  })
}
