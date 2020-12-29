<template>
  <view class="index">
    <van-tree-select
      :items="items"
      :main-active-index="mainActiveIndexRef"
      :active-id="activeIdRef"
      @click-nav="onClickNav"
      @click-item="onClickItem"
    />
  </view>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "Index",
  components: {},
  setup() {
    const activeIdRef = ref(1);
    const mainActiveIndexRef = ref(0);
    const items = [
      {
        // 导航名称
        text: "所有城市",
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: 3,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        dot: true,
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: "温州",
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
          },
          {
            text: "杭州",
            id: 2,
          },
        ],
      },
    ];

    console.log("__MY__ value: ", __MY__);

    function onClickNav() {
      console.log("do onClickNav");
    }
    function onClickItem() {
      console.log("do onClickItem");
    }

    const methods = {
      onClickNav,
      onClickItem,
    };
    return {
      activeIdRef,
      mainActiveIndexRef,
      items,
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
