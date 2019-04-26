import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Input, Button, Swiper, SwiperItem } from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '狗狗家族'
  }

  componentWillMount () {
    // console.log(JSON.parse(this.$router.params.id))
    this.setState({
      id:JSON.parse(this.$router.params.id)
    })
  }

  componentDidMount () { 
    Taro.request({
      url: 'http://localhost:3000/getId',
      data: {
        id:this.state.id
      },
      header: {'content-type':'application/json'},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        // console.log(result.data.data)
        this.setState({
          arr:result.data.data
        })
        result.data.data.forEach((item)=>{
          this.setState({
            like:item.like
          })
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
      id:'',
      arr:[],
      like:''
    }
  }

  render () {
    return (
      <View className='wrap'>
        {
          this.state.arr.map((item,index)=>{
            return <View className="box" key={index}>
                    <Image src={item.img} />
                    <Text style="font-weight:600; padding:20rpx">{item.title}</Text>
                    <Text style="color:red">{item.price}元</Text>
                    <View className="text">{item.content}</View>
                    <View className="content">
                        <View style="font-weight:600">养狗狗7大禁忌</View>
                        <View>禁忌1 : 乱喂骨头</View>
                        <View>禁忌2 : 洗澡讲究</View>
                        <View>禁忌3 : 当猪养</View>
                        <View>禁忌4 : 喂食巧克力</View>
                        <View>禁忌5 : 喂剩饭剩菜</View>
                        <View>禁忌6 : 不外出</View>
                        <View>禁忌7 : 喂食海鲜</View>
                    </View>
                    <View className="btn">
                      <Button size='mini' type="warn" onClick={this.collect.bind(this,item._id,item.like)}>{this.state.like}</Button>
                      <Button size='mini' type="warn" onClick={this.shop.bind(this)}>加入购物车</Button>
                    </View>
                </View>
          })
        }
      </View>
    )
  }

  //点击收藏
  collect(id,like){
    if(this.state.like == '收藏'){
      this.setState({
        like:'💗取消收藏'
      })
      Taro.request({
        url: 'http://localhost:3000/upData',
        data: {
          _id:id
        },
        header: {'content-type':'application/json'},
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: (result)=>{
          console.log(result.data)
        },
        fail: ()=>{},
        complete: ()=>{}
      });
    }else if(this.state.like == '💗取消收藏'){
      this.setState({
        like:'收藏'
      })
      Taro.request({
        url: 'http://localhost:3000/upDatas',
        data: {
          _id:id
        },
        header: {'content-type':'application/json'},
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: (result)=>{
          console.log(result.data)
        },
        fail: ()=>{},
        complete: ()=>{}
      });
    }
  }

  //点击加入购物车
  shop(){
    wx.navigateTo({
      url: '/pages/shops/index'
    })
  }
}
