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
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2110465832,624699422&fm=26&gp=0.jpg'
      ],
      listImg:[
        {
          "img":'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4015005928,909438874&fm=26&gp=0.jpg',
          "title":"博美"
        },
        {
          "img":'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3459666997,1971929926&fm=27&gp=0.jpg',
          "title": "二哈"
        },
        {
          "img":'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4004252738,100686714&fm=26&gp=0.jpg',
          "title": "雪纳瑞"
        },
        {
          "img":'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2034872708,1771589973&fm=26&gp=0.jpg',
          "title": "柯基"
        },
      ]
    }
  }

  render () {
    return (
      <View className='wrap'>
        <View className='box'>
          <Swiper
            className='swiper'
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
          <View className='oh2'>
            <Image className='img' src='//m.360buyimg.com/mobilecms/s750x80_jfs/t25132/272/777079429/42670/e6ced36f/5b7a6fa1N94e7f9d9.jpg!q70.jpg.dpg' />
          </View>
          <View className='con'>
            {
              this.state.listImg.map((item,index)=>{
                return <View className='cute' key={index}>
                  <Image className='img' src={item.img} />
                  <View className='text'>{item.title}</View>
                </View>
              })
            }
          </View>
        </View>
      </View>
    )
  }
}
