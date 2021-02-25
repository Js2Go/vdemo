<template>
  <AsyncPageWithOptions />
  <div :class="false">false</div>
  <div :class="null">null</div>
  <div :class="undefined">undefined</div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import ErrorComponent from './ErrorComponent.vue'
import LoadingComponent from './LoadingComponent.vue'

const AsyncPageWithOptions = defineAsyncComponent({
  // loader: () => import('./HelloWorld.vue'),
  loader: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(import('./HelloWorld.vue'))
      }, 3000)
    })
  },
  delay: 200,
  timeout: 10000,
  errorComponent: ErrorComponent,
  loadingComponent: LoadingComponent
})

</script>

<style>

</style>