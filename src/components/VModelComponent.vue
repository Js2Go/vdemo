<template>
  <input type="text" name="v" id="v" :value="modelValue" @input="input">
  <input type="text" name="vh" id="vh" :value="hhh" @input="hhhInput">
</template>

<script setup>
import { getCurrentInstance, defineEmit, defineProps } from 'vue'

defineProps(['modelValue', 'hhh'])

defineEmit(['update:modelValue', 'update:hhh'])

const instance = getCurrentInstance()

const input = e => {
  instance.emit('update:modelValue', e.target.value)
}

const hhhInput = e => {
  instance.emit('update:hhh', e.target.value)
}

// throw new Error('我错了')
</script>

<style>

</style>