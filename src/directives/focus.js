const focus = {
  beforeMount(el, binding, vnode, prevNode) {
    // console.log(el, binding, vnode, prevNode)
    // console.log(el, binding)
    
    el.style.color = 'red'
  },
  mounted(el, binding) {
    console.log(binding)
    el.focus()
  },
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {}
}

// 注册 (功能指令)
// app.directive('my-directive', () => {
//   // 这将被作为 `mounted` 和 `updated` 调用
// })

// getter, 如果已注册，则返回指令定义
// const myDirective = app.directive('my-directive')

export default focus
