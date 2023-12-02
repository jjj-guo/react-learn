import React, { PureComponent } from 'react'
import Detail from './pages/Detail'

// 比如可以赋给函数组件生命周期，计算组件的渲染时间
export class App extends PureComponent {
  render() {
    return (
      <div>
        <Detail/>
      </div>
    )
  }
}

export default App