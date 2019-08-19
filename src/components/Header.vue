<template>
  <div class="header animated fadeInDown delay-1s header--dark">
    <img src='../images/logo-a.svg'/>
    <div class="top-right-btns">
      <i class="iconfont icon-caidan" @click="change"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Head',
  methods: {
    change () {
      this.$store.commit('changeMenus', true)
    }
  }
}
</script>
<style>
.iconfont{
  font-size:30px;
  font-weight:900;
}
.header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    color: #031e2c;
    height: 100px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.top-right-btns{
  cursor:pointer;
}
</style>
