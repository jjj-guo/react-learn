import React, { Component } from 'react'
import { flushSync } from 'react-dom'

function Hello(props) {
  return <h2>{props.message}</h2>
}

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "Hello World",
      counter: 0
    }
  }

  componentDidMount() {
    // 1.网络请求一: banners

    // 2.网络请求二: recommends

    // 3.网络请求三: productlist

    // react18之前也是同步的，因为这是浏览器引发的回调，原生DOM事件
    const btnEl = document.getElementById("btn");
    btnEl.addEventListener('click', () => {
      this.setState({
        message: 'ni'
      });
      console.log(this.state.message)
    })
  }

  changeText() {
    setTimeout(() => {
      // **在react18之前, setTimeout中setState操作, 是同步操作（因为认为setTimeout不是react引发的事件回调，包括increment、componentDidMount都是react产生的事件回调）
      // **在react18之后, setTimeout中setState异步操作(批处理)

      // **通过调用官方在18提供的flushSync方法，使得setState认为内部的是一次批处理需要更新并执行render，然后在其外部紧随其后拿到的就是同步的值
      flushSync(() => {
        this.setState({ message: "你好啊, 李银河" })
      })
      console.log(this.state.message)
    }, 0);
  }

  increment() {
  }

  render() {
    const { message, counter } = this.state
    console.log("render被执行")

    return (
      <div>
        <h2>message: {message}</h2>
        <button onClick={e => this.changeText()}>修改文本</button>
        <h2>当前计数: {counter}</h2>
        <button onClick={e => this.increment()}>counter+1</button>

        <Hello message={message}/>
      </div>
    )
  }
}

export default App