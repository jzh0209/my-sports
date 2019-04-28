import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button , Picker } from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '报名领养'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props){
    super(props)
    this.state = {
      dateSel:'2019-04-27',
      timeSel:'14:53',
      list:["姓名","年龄","性别","手机号","QQ号","学校","部门","备注"],
      dogs:'',
      people:'',
      cost:''
    }
  }
  
  //选择报名日期
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }

  //选择报名事件
  onTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    })
  }

  //获取狗狗名称
  dogs(e){
    // console.log(e.detail.value)
    this.setState({
      dogs:e.detail.value
    })
  }

  //获取报名人数
  people(e){
    this.setState({
      people:e.detail.value
    })
  }

  //获取报名费用
  cost(e){
    // console.log(e.detail.value)
    this.setState({
      cost:e.detail.value
    })
  }

  //点击添加狗狗
  addDog(){
    Taro.request({
      url: 'http://localhost:3000/agentData',
      data: {
        dateSel:this.state.dateSel,
        timeSel:this.state.timeSel,
        dogs:this.state.dogs,
        people:this.state.people,
        cost:this.state.cost
      },
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        console.log(result)
      },
      fail: ()=>{},
      complete: ()=>{}
    });
    
    wx.navigateTo({
      url:'/pages/addDog/index'
    })
  }

  render () {
    return (
      <View className='wrap'>
        <View className='box'>
          <Input className="oinput" placeholder="请输入狗狗的名称" onInput={this.dogs.bind(this)} />
          {/* 时间选择 */}
          <View className='time'>
            <View className='page-section'>
              <Text>选择报名日期：</Text>
              <View>
                <Picker mode='date' onChange={this.onDateChange}>
                  <View className='picker'>
                    {this.state.dateSel}
                  </View>
                </Picker>
              </View>
            </View>
            <View className='page-section'>
              <Text>选择报名时间：</Text>
              <View>
                <Picker mode='time' onChange={this.onTimeChange}>
                  <View className='picker'>
                    {this.state.timeSel}
                  </View>
                </Picker>
              </View>
            </View>
          </View>
          {/* 设置报名人数 */}
          <View className="people">
            <View>报名人数：</View>
            <View className="sheel">
              <Input className="oinput" placeholder="输入报名人数" onInput={this.people.bind(this)} />
            </View>
          </View>
          {/* 设置报名费用 */}
          <View className="people">
            <View>报名费用：</View>
            <View className="sheel">
              <Input className="oinput" placeholder="输入报名费用" onInput={this.cost.bind(this)} />
            </View>
          </View>
          {/* 选择需要填写的信息 */}
          <View className="list">
            <View className="main">
              {
                this.state.list.map((item,index)=>{
                  return <View className='oli' key={index}>{item}</View>
                })
              }
            </View>
            <View className="mark">
              <Button size="mini" type="primary">添加自定义</Button>
              <View>( 没有合适信息,可以自定义创建 )</View>
            </View>
          </View>
          {/* 添加可以领养的狗狗 */}
          <Button className="add" type="warn" onClick={this.addDog.bind(this)}>添加狗狗</Button>
        </View>
      </View>
    )
  }

}
