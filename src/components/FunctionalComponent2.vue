<template>
  <component
    :is="`h${$props.level}`"
    v-bind="$attrs"
  >
  </component>
  <input type="text" name="" v-model="text">
</template>

<script>
import { resolveDynamicComponent, getCurrentInstance, customRef, ref } from 'vue'

const useDebouncedRef = (val, delay = 300) => {
  let timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return val
      },
      set(v) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          val = v
          console.log(v)
          trigger()
        }, delay)
      }
    }
  })
}

export default {
  props: ['level'],
  setup(props, ctx) {
    const g = getCurrentInstance().appContext.config.globalProperties
    g.$hhh()
    const text = useDebouncedRef('text')

    return {
      text
    }
    // console.log(resolveDynamicComponent('h111'))
  }
}
</script>

<style>

</style>