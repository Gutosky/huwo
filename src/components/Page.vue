<template>
  <div>
    <me/>
    <index/>
  </div>
</template>

<script>
import Index from './Index'
import Menus from './Menus'
export default {
  name: 'page',
  components: {
    'me': Menus,
    'index': Index
  },
  data () {
    return {
      menus: false
    }
  }
}
</script>
<style>
html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    overflow:hidden;
}
body{
  margin:0;
  padding:0;
  background-color:#0ff;
}
*, *:before, *:after {
    box-sizing: border-box;
}
ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
a {
    text-decoration: none;
    display: inline-block;
    outline: none;
    cursor: pointer;
}
.delay-1s {
    -webkit-animation-delay: .6s;
    animation-delay: .6s;
}
.fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
}
@keyframes fadeInDown{
0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
}
100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
}
}

@-webkit-keyframes fadeInDown{
0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
}
100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
}
}

.animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}
</style>
