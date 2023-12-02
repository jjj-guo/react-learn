import React, { PureComponent } from 'react'

// 定义一个高阶组件（高阶组件是参数为组件，返回值为新组件的函数； 高阶组件 本身不是一个组件，而是一个函数）
// **高阶组件可以理解为去拦截组件的渲染，从而可以对组件进行一下增强
function hoc(Cpn) {
  // 1.定义类组件
  class NewCpn extends PureComponent {
    render() {
      return <Cpn name="why"/>
    }
  }
  return NewCpn

  // 定义函数组件
  // function NewCpn2(props) {

  // }
  // return NewCpn2
}

class HelloWorld extends PureComponent {
  render() {
    return <h1>Hello World</h1>
  }
}

const HelloWorldHOC = hoc(HelloWorld)

export class App extends PureComponent {
  render() {
    return (
      <div>
        <HelloWorldHOC/>
      </div>
    )
  }
}

export default App