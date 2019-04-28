import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Input, Button } from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '我的收藏'
  }

  componentWillMount () { 
  }

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
        let arr = result.data.data.filter((item)=>{
          if(item.like == '💗取消收藏'){
            return item
          }
        })
        // console.log(arr)
        this.setState({
          arr:arr
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
              return <View className='odl' key={index}>
                      <View className='oimg'>
                        <Image className="img" src={item.img} />
                      </View>
                      <View className='odt'>
                        <View className='oleft'>
                          <View className='oh3'>{item.title}</View>
                          <View className='op'>{item.content}</View>
                          <View className='price'>{item.price}</View>
                        </View>
                        <View className='oright'>
                          <View className='coll' onClick={this.coll.bind(this,item._id,item.like,index)}>{item.like}</View>
                        </View>
                      </View>
                    </View>
            })
          }
        </View>
      </View>
    )
  }

  //点击取消收藏
  coll(id,like,ind){
    this.state.arr.splice(ind,1)
    this.setState({
      arr:this.state.arr
    })
    Taro.request({
      url: 'http://localhost:3000/upDatas',
      data: {
        _id:id,
        like:like
      },
      header: {'content-type':'application/json'},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        console.log(result)
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }
}
