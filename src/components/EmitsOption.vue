<template>
  <p>{{ text }}</p>
  <button @click="$emit('accepted')">OK</button>
  <button @click="$emit('click', $event)">OKK</button>
</template>

<script>
export default {
  props: ['text'],
  emits: ['accepted']
}
</script>

<style>

</style>