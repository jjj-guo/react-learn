import React, { PureComponent } from 'react'
import Cart from './pages/Cart'

export class App extends PureComponent {
  constructor() {
    super()

    // this.state = {
    //   isLogin: false
    // }
  }

  loginClick() {
    localStorage.setItem("token", "coderwhy")

    // this.setState({ isLogin: true })
    // react的方法，不推荐使用，但某些特殊场景需要强制刷新的时候是可以调用的，调用后会强制执行渲染，只在类组件中
    // 调用forceUpdate（）将导致在组件上调用render（），跳过shouldComponentUpdate（）。这将触发子组件的正常生命周期方法，包括每个子组件的shouldComponentUpdate（）方法。
    this.forceUpdate()
  }

  render() {
    return (
      <div>
        App
        <button onClick={e => this.loginClick()}>登录</button>
        <Cart/>
      </div>
    )
  }
}

export default App