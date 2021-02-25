<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div>{{ username }}</div>
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <EmitsOption :text="text" @accepted="accepted" @click="okk" />

  <!-- 注意，这种方式只能用于方法中，不可以在计算属性中使用，因为后者只有在单个组件的上下文中定义时才有意义 -->
  <div>{{ $filters.currencyUSD('100') }}</div>
  <FunctionalComponent level="4" style="color: red;">
    我是您爸爸
  </FunctionalComponent>
  <FunctionalComponent2 level="2" style="color: green;">
    <div>
      <span>我是您爸爸1</span>
      <span>我是您爸爸2</span>
      <span>我是您爸爸3</span>
    </div>
  </FunctionalComponent2>

  <button @click="() => arr = ['asdasd']">点我</button>

  <div>
    <span>text1: {{ text1 }}</span>
    <span>hhh: {{ hhh }}</span>
  </div>
  <VModelComponent v-model="text1" v-model:hhh="hhh" />
  <!-- <VModelComponent
    :modelValue="text1"
    @update:modelValue="text1 = $event"
    :hhh="hhh"
    @update:hhh="hhh = $event"
  /> -->

  <!-- 在 3.x，如果一个元素同时定义了 v-bind="object" 和一个相同的单独的 property，那么声明绑定的顺序决定了它们如何合并 -->
  <!-- template -->
  <div id="red" v-bind="{ id: 'blue' }"></div>
  <!-- result -->
  <!-- <div id="blue"></div> -->

  <!-- template -->
  <div v-bind="{ id: 'blue' }" id="red"></div>
  <!-- result -->
  <!-- <div id="red"></div> -->


  <RefArray />
  <Attrs />
  <AsyncComponent1 />

  <template v-for="i in 10" :key="i">
    <span v-if="i % 2" style="color: green;">{{ i }}</span>
    <span v-else style="color: red;">{{ i }}</span>
  </template>

  <input @keyup.delete="del" />

  <!-- <wtf-component /> -->
  <!-- <Attrs is="HelloWorld" /> -->
  <!-- <button is="HelloWorld">我的哥哥啊</button> -->
  <table>
    <!-- It doesn't work, look likes a bug -->
    <!-- <tr v-is="'hello-world'"></tr> -->
    <tr v-is="HelloWorld"></tr>
  </table>
</template>

<script setup>
import { defineProps, inject, onMounted, ref, resolveComponent, resolveDirective, watch } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import RefArray from './components/RefArray.vue'
import AsyncComponent1 from './components/AsyncComponent1.vue'
import Attrs from './components/Attrs.vue'
import EmitsOption from './components/EmitsOption.vue'
import FunctionalComponent from './components/FunctionalComponent'
import FunctionalComponent2 from './components/FunctionalComponent2.vue'
import VModelComponent from './components/VModelComponent.vue'

// export default {
//   components: {
//     HelloWorld,
//     RefArray,
//     AsyncComponent1,
//     Attrs,
//   },
//   setup() {}
// }


// vue3中 mixin 的 data 和组件的 data 只做浅合并

const text = ref('text')
const text1 = ref('text1')
const hhh = ref('hhh')

const accepted = () => {
  text.value += 'a'
  // console.log('accepted')
}

const okk = () => {
  console.log('okk')
}

const name = inject('name')
console.log(name)


const del = e => {
  e.preventDefault()
  console.log('hhhhhh')
  return false
}

// 移除 $listeners


// 将 .v-enter 字符串实例替换为 .v-enter-from
// 将 .v-leave 字符串实例替换为 .v-leave-from


// <transition-group> 默认不再渲染根节点，当然也可以设置根结点(tag="span")

// 移除 v-on.native 修饰符
// 对于子组件中未被定义为组件触发的所有事件监听器，Vue 现在将把它们作为原生事件监听器添加到子组件的根元素中 (除非在子组件的选项中设置了 inheritAttrs: false)


// 3.x 版本中 v-if 总是优先于 v-for 生效


// 当侦听一个数组时，只有当数组被替换时才会触发回调。如果你需要在数组改变时触发回调，必须指定 deep 选项
const arr = ref([])
watch(arr, (val, old) => {
  console.log(val, old)
}, {
  deep: true
})


defineProps(['username'])


onMounted(() => {
  console.log(resolveComponent('RefArray'))
  console.log(resolveDirective('focus'))
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-leave-from,
.v-enter-to {
  opacity: 1;
}
</style>