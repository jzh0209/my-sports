import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.css'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/child/index',
      'pages/logs/index',
      'pages/index/index',
      'pages/home/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar:{
      list:[
        {
          pagePath: "pages/index/index",
          text: "首页",
          iconPath: "images/dog1.png",
          selectedIconPath: "images/dog1.png"
        },
        {
          pagePath: "pages/logs/index",
          text: "热销狗狗",
          iconPath: "images/dog2.png",
          selectedIconPath: "images/dog2.png"
        },
        {
          pagePath: "pages/child/index",
          text: "新品狗崽子",
          iconPath: "images/dog4.png",
          selectedIconPath: "images/dog4.png"
        },
        {
          pagePath: "pages/home/index",
          text: "我的",
          iconPath: "images/dog5.png",
          selectedIconPath: "images/dog5.png"
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
