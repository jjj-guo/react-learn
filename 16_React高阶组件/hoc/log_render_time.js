import { PureComponent } from "react";

function logRenderTime(OriginComponent) {
  // react的类组件直接返回的话可以不加类名，类似于直接返回一个匿名函数
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.beginTime = new Date().getTime()
    }
  
    componentDidMount() {
      this.endTime = new Date().getTime()
      const interval = this.endTime - this.beginTime
      // 类和函数都会自动具有name这个属性，这是js中的自动加入的
      console.log(`当前${OriginComponent.name}页面花费了${interval}ms渲染完成!`)
    }

    render() {
      return <OriginComponent {...this.props}/>
    }
  }
}

export default logRenderTime
