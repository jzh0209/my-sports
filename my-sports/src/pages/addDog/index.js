import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Input, Button } from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '添加狗狗详情'
  }

  componentWillMount () { }

  componentDidMount () {
    Taro.request({
      url: 'http://localhost:3000/getAgentData',
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
      arr:[]
    }
  }
  render () {
    return (
      <View className='wrap'>
        <View className='box'>
          {
            this.state.arr.map((item,index)=>{
              return <View className="con" key={index}>
                      <View className='oh3'> 
                        <View className='ospan'>{item.dogs}</View>
                        <View className='ospan'>日期:{item.dateSel}</View>
                        <View className='ospan'>时间:{item.timeSel}</View>
                      </View>
                      <View className='oh3'>
                        <View className='ospan'>人数 : {item.people}人</View>
                        <View className='ospan'>费用 : {item.cost}元</View>
                      </View>
                    </View>
            })
          }
          <Button className="add" type="warn">我要报名</Button>
          <View className="con">
            <View className='oh3'>
              <View className='ospan'>二狗蛋</View>
              <View className='ospan'>报名成功</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
