<template>
  <div v-for="item in list" :ref="setItemRef" :key="item.id">
    {{ item.val }}
  </div>
</template>

<script setup>
import { onBeforeUpdate, onUpdated, ref } from 'vue'

let itemRefs = ref([])

const list = ref([
  { id: 1, val: 1 },
  { id: 2, val: 2 },
  { id: 3, val: 3 },
  { id: 4, val: 4 },
  { id: 5, val: 5 },
])

const setItemRef = el => {
  itemRefs.value.push(el)
}

setTimeout(() => {
  list.value.push({ id: 6, val: 6 })
})

onBeforeUpdate(() => {
  itemRefs.value = []
})

onUpdated(() => {
  console.log(itemRefs.value)
})
</script>

<style>

</style>