import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Input, Button, Swiper, SwiperItem } from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '狗狗家族'
  }

  componentWillMount () { }

  componentDidMount () {
    Taro.request({
      url: 'http://localhost:3000/getCart',
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        console.log(result.data.data)
        this.setState({
          arr:result.data.data
        })
      },
      fail: ()=>{},
      complete: ()=>{}
    });
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props){
    super(props)
    this.state = {
      arr:[]
    }
  }
  render () {
    return (
      <View className='wrap'>
        <View className='box'>
          <View className='list'>
            {
              this.state.arr.map((item,index)=>{
                return <View className='odl' key={index}>
                        <View className='oimg'>
                          <Image className="img" src={item.img} />
                        </View>
                        <View className='odt'>
                          <View className='oleft'>
                            <View className='oh3'>{item.name}</View>
                            <View className='op'>{item.title}</View>
                            <View className='price'>￥{item.price}</View>
                          </View>
                          <View className='oright'>
                            <Text className='sub'>-</Text>
                            <Text className='num'>0</Text>
                            <Text className='plus'>+</Text>
                          </View>
                        </View>
                      </View>
              })
            }
          </View>
        </View>
      </View>
    )
  }
}
