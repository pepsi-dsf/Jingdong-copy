<template>
  <div class="docker">
    <div
      v-for="(item, index) in dockerlist"
      :key="item.id"
      :class="{ docker__item: true, 'docker__item--active': index === 0 }"
    >
      <div v-html="item.icon" class="iconfont"></div>
      <div class="docker__title">{{ item.text }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Docker',
  setup () {
    interface dockerProp {
      icon: string
      text: string
      id: number
    }
    const dockerlist: dockerProp[] = [
      {
        icon: '&#xe60b;',
        text: '首页',
        id: 1
      },
      {
        icon: '&#xe638;',
        text: '购物车',
        id: 2
      },
      {
        icon: '&#xe61e;',
        text: '订单',
        id: 3
      },
      {
        icon: '&#xe610;',
        text: '我的',
        id: 4
      }
    ]
    return { dockerlist }
  }
})
</script>
<style lang="scss">
@import '../../style/viriables.scss';

.docker {
  display: flex;
  position: absolute;
  box-sizing: border-box;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  color: $content-fontcolor;
  &__item {
    //&代表docker
    flex: 1;
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &--active {
      //&代表docker__item
      color: #1fa4fc;
    }
  }
  &__title {
    font-size: 0.2rem;
    transform: scale(
      0.5,
      0.5
    ); //浏览器默认最小是12 想变成10可以让它横向缩小50% 纵向缩小50%
    transform-origin: center top;
  }
}
</style>
