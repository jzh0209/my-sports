import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Input, Button } from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '个人中心'
  }

  componentWillMount () { }

  componentDidMount () {
    
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props){
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <View className='wrap'>
        <View className='box'>
          <View className='pic'>
            <Image className='img' src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1164076849,1143992806&fm=26&gp=0.jpg' />
          </View>
          <View className='list'>
            <View className='oli' onClick={this.collect.bind(this)}>
              <View className='oh3'>我的收藏</View>
              <View className='op'> > </View>
            </View>
            <View className='oli'>
              <View className='oh3'>设置</View>
              <View className='op'> > </View>
            </View>
          </View>
        </View>
      </View>
    )
  }

  //进入我的收藏
  collect(){
    wx.navigateTo({
      url: '/pages/collect/index',
    })
  }
}
