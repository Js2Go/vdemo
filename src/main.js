import { createApp } from 'vue'
import App from './App.vue'
import focus from './directives/focus'



function getInstance() {
  const app = createApp(App, {
    username: 'mazi'
  })
  
  // app.config.isCustomElement = tag => tag === 'wtf-component'

  app.config.globalProperties.$hhh = () => {
    console.log('hhh')
  }
  
  app.config.errorHandler = (err, vm, info) => {
    console.error(err)
    console.error(vm)
    console.error(info)
  }
  
  app.config.warnHandler = (msg, vm, trace) => {
    console.warn(msg)
    console.warn(vm)
    console.warn(trace)
  }
  
  app.provide('name', 'mazi')
  
  app.config.globalProperties.$filters = {
    currencyUSD(val) {
      return `$${val}`
    }
  }
  
  app.directive('focus', focus)

  return app
}
  
getInstance().mount('#app')
// getInstance().mount('#root')
