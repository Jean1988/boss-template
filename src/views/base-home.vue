<template>
  <h2 id="demo" class="hello">hello, {{ $helloWord }}</h2>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from "vue"
const { $helloWord } = getCurrentInstance()?.proxy
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
