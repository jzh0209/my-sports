import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Input, Button, Swiper, SwiperItem  } from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '狗狗家族'
  }

  componentWillMount () { }

  componentDidMount () { 
    Taro.request({
      url: 'http://localhost:3000/getData',
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        // console.log(result.data.data)
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
      imgUrls: [
        {
          "img":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1164076849,1143992806&fm=26&gp=0.jpg"
        },
        {
          "img":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1500548397,1752502888&fm=26&gp=0.jpg"
        },
        {
          "img":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3240717440,1710680111&fm=26&gp=0.jpg"
        }
      ],
      arr:[]
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
            autoplay>
            {
              this.state.imgUrls.map((item,index)=>{
                return <SwiperItem className="pic" key={index}>
                        <Image className='img' src={item.img} />
                      </SwiperItem>
              })
            }
          </Swiper>
          <View className="oh2">
            <View className="img">- 为您推荐 -</View>
          </View>
          <View className="con">
            {
              this.state.arr.map((item,index)=>{
                return <View className="cute" key={index} onClick={this.buys.bind(this,item._id)}>
                        <Image className='img' src={item.img} />
                      </View>
              })
            }
          </View>
        </View>
      </View>
    )
  }

  //点击跳详情
  buys(id){
    wx.navigateTo({
      url: '/pages/buys/index?id='+JSON.stringify(id),
    })
  }
}
