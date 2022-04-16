<template>
  <h2 id="demo"
      class="hello">
    {{ print }}
  </h2>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const print = ref("hello, boss!")
</script>

<style lang="scss" scoped>
.hello {
  font-size: 42px;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
}
</style>
