import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Input, Button, Swiper, SwiperItem } from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '狗狗家族'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props){
    super(props)
    this.state = {
      imgUrls: [
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3256187421,625548199&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2706288899,2904685425&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1256393033,1681569218&fm=26&gp=0.jpg'
      ]
    }
  }

  render () {
    return (
      <View className='wrap'>
        <View className='box'>
          <Swiper
            className='test-h'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay="true">
            {
              this.state.imgUrls.map((item,index)=>{
                return <SwiperItem key={index} className="pic">
                        <Image className='img' src={item} />
                      </SwiperItem>
              })
            }
          </Swiper>
        </View>
      </View>
    )
  }
}
