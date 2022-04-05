<template>
  <div class="home">
    <img alt="Vue logo" class="logo" src="../assets/logo.png" />
    <HelloWorld
      id="demo"
      ref="comp"
      class="hello-world"
      msg="Welcome to Your Vue.js + TypeScript"
      @click="handleClick"
    ></HelloWorld>
    <p>测试的数据</p>
    <p>    测试的数据     </p>
    <el-button type="primary" plain>主要按钮</el-button>
  </div>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { defineComponent, ref } from "vue"
export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
  setup() {
    const comp = ref<InstanceType<typeof HelloWorld>>()

    const log = () => comp.value?.print()

    return {
      comp,
      log,
    }
  },
  methods: {
    handleClick() {
      console.log("hello")
    },
  },
})
</script>
<style lang="scss" scoped>
.home {
  border: red 1px solid;
}
</style>
