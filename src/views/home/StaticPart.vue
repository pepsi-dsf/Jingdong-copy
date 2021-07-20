<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe62f;</span>
    北京理工大学国防科技园2号楼10层
    <span class="iconfont position__notice">&#xe66d;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe61f;</span>
    山姆会员商店优惠商品
  </div>
  <div class="banner">
    <img
      class="banner__img"
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
    />
  </div>
  <div class="icons">
    <div v-for="item in iconlist" :key="item.id" class="icons__item">
      <img class="icons__item__img" :src="item.imgUrl" />
      <p class="icons__item__desc">{{ item.desc }}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StaticPart',
  setup () {
    const iconlist = [
      {
        id: 1,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        desc: '超市便利'
      },
      {
        id: 2,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/菜市场.png',
        desc: '菜市场'
      },
      {
        id: 3,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/水果店.png',
        desc: '水果店'
      },
      {
        id: 4,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/鲜花.png',
        desc: '鲜花绿植'
      },
      {
        id: 5,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/医药健康.png',
        desc: '医药健康'
      },
      {
        id: 6,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/家居.png',
        desc: '家居时尚'
      },
      {
        id: 7,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/蛋糕.png',
        desc: '烘焙蛋糕'
      },
      {
        id: 8,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/签到.png',
        desc: '签到'
      },
      {
        id: 9,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/大牌免运.png',
        desc: '大牌免运'
      },
      {
        id: 10,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/红包.png',
        desc: '红包套餐'
      }
    ]
    return { iconlist }
  }
})
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.position {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  color: $content-fontcolor;
  @include ellipsis;
  .position__icon {
    //用嵌套而不用&是因为编译出来以后变成 .position .position__icon的形式 优先级会高
    position: relative;
    top: 0.01rem;
    font-size: 0.2rem;
  }
  .position__notice {
    position: absolute;
    top: 0.17rem;
    right: 0;
    font-size: 0.2rem;
  }
}
.search {
  margin-bottom: 0.12rem;
  line-height: 0.32rem; //给行高自动撑开盒子
  background: #f5f5f5;
  color: #b7b7b7;
  border-radius: 0.16rem;
  font-size: 0.14rem;
  .iconfont {
    position: relative;
    top: 0.03rem;
    display: inline-block;
    padding: 0 0.08rem 0 0.16rem;
    font-size: 0.2rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%; //图片1528 330高宽比是25.4%  css奇淫巧计
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: 0.06rem 0 0.16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.gap {
  height: 0.1rem;
  background: $content-bgColor;
  margin: 0 -0.18rem;
}
</style>
