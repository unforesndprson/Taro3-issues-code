<template>
  <view class="index">
    <navigator url="/packageSecond/pages/second/index">to second</navigator>
  </view>
</template>

<script lang="ts">

export default {
  name: "Index",
  components: {},
  setup() {
   
    const methods = {
    
    };
    return {
  
      ...methods,
    };
  },
};
</script>

<style>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
