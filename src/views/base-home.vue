<template>
  <div id="app"
       class="base-home">
    <h1 id="123"
        class="hello"
        demo="123"
        :myProp="13">
      {{ print }}
    </h1>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const print = ref("hello, boss!")
</script>

<style lang="scss" scoped>
.hello {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
