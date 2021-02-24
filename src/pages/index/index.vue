<template>
  <view class="index">驼峰变量名被kebab-case，未生效</view>
  <view class="index2">变量名未被解析,生效</view>
</template>

<script lang="ts">
export default {
  name: "Index",
  data() {
    return {
      varColor: "skyblue",
      varcolor: "skyblue",
    };
  },
};
</script>

<style>
.index {
  height: 100vw;
  border: 1px solid black;
  background-color: v-bind(varColor);
}
.index2 {
  height: 100vw;
  border: 1px solid black;
  background-color: v-bind(varcolor);
}
</style>
