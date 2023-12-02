// 回顾函数
function foo() {
  console.log("foo function")
}

foo()

// 高阶函数
// 高阶函数的定义是满足以下一个条件即可为高阶函数：
// 1、接受一个或多个函数作为输入；
// 2、输出一个函数；

function foo2(fn) {
  console.log("foo function")
  setTimeout(() => {
    fn()
  }, 2000)
}

foo2(function() {

})

// [].map().filter.reduce().forEach().map()

// 高阶函数
function foo3() {
  function bar() {

  }
  return bar
}

const fn = foo3()

