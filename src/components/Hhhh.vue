<template>
  <div>
    <div v-bind="$attrs">asjdljasld</div>
    <!-- 3.x <div class="hhh" style="color: red;" id="iddd">asjdljasld</div> -->
    <button>ajdsofijalds</button>
    <!-- <input type="text" v-focus:[hhh].aaa="eee"> -->
  </div>

  <!-- 2.x
    <div class="hhh" style="color: red;">
      <div id="iddd">asjdljasld</div>
      <button>ajdsofijalds</button>
    </div>
   -->

   <!-- 移除 .native 修饰符 -->
   <!-- 移除 $children -->
</template>

<script>
import { ref } from 'vue'
export default {
  inheritAttrs: false,
  setup() {
    const eee = ref('eee')
    const hhh = ref('hhh111')

    return {
      hhh,
      eee
    }
  }
}
</script>

<style>

</style>