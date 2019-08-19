<template>
  <div>
    <he/>
    <ct/>
    <fo/>
  </div>
</template>

<script>
import Head from './Header'
import Content from './Content'
import Footer from './Footer'
export default {
  name: 'index',
  components: {
    'he': Head,
    'ct': Content,
    'fo': Footer
  },
  data () {
    return {
      menus: false
    }
  }
}
</script>
<style>
.footer--dark .copyright, .next-page--dark, .header--dark {
    color: #fff!important;
}
.header, .footer {
    width: 100%;
    padding: 0 70px;
}
</style>
