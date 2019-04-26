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
        // console.log(result.data.data)
        this.setState({
          arr:result.data.data
        })

        //给数据添加count
        let newArr = result.data.data.map((item)=>{
          item.count = 0
          return item
        })
        this.setState({
          arr:newArr
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
      arr:[],
      total:0,
      money:0
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
                            <Text className='sub' onClick={this.sub.bind(this,index,item.price)}>-</Text>
                            <Text className='num'>{item.count}</Text>
                            <Text className='plus' onClick={this.plus.bind(this,index,item.price)}>+</Text>
                          </View>
                        </View>
                      </View>
              })
            }
          </View>
          <View className="footer">
            <View className="oh3">总计 : {this.state.total} 条狗{this.state.money}  元 </View>
            <View className="op">
              <Button size='mini' type="primary">支付</Button>
            </View>
          </View>
        </View>
      </View>
    )
  }

  //点击加
  plus(ind,price){
    // console.log(ind)
    let list = this.state.arr.map((item,index)=>{
      if(ind == index){ 
        item.count++
        this.state.money = item.count * price
        this.setState({
          total:this.state.total + 1
        })
      }
      return item
    })
    this.setState({
      arr:list
    })
  }

  //点击减
  sub(ind,price){
    // console.log(ind)
    let list = this.state.arr.map((item,index)=>{
      if(ind == index){
        item.count--
        this.state.money = item.count * price
        this.setState({
          total:this.state.total - 1
        })
        if(item.count < 1){
          item.count = 0
        }
        if(this.state.total < 1){
          this.setState({
            total:0
          })
        }
      }
      return item
    })
    this.setState({
      arr:list
    })
  }

  
}
