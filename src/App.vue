<template>
  <div class="wrapper">
    <notifications group="foo" />
    <div  class="navbar" >
      <div class="header" id="myHeader" >
        <div class="container">
          <div  class="navbar-content" >
            <a class="header-logo" href="/">Frontend</a>
            <div class="button-burger" @click="menuShow = !menuShow"
              :class="{ active: menuShow }">
              <span class="line line-1"></span>
              <span class="line line-2"></span>
              <span class="line line-3"></span>
            </div>
            <div class="navbar-list__wrapper" :class="{ active: menuShow }">
              <ul class="navbar-list" :class="{ active: menuShow }">
                <li class="navbar-item" v-for="Link in LinkMenu" :key="Link.title" @click="menuShow = false">
                  <router-link :to="`${Link.url}`">{{Link.title}}</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-wrapper content-wrapper--fix-header">
      <router-view/>
    </div>
    <div class="footer">
      
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        menuShow: false,
        LinkMenu: [
          {title: 'Home', url: '/'},
          {title: 'About Us', url: '/about'},
          {title: 'Contact Us', url: '/contact'}
        ]
      }
    },
    mounted() {
      window.onscroll = function() {myFunction()}
      var header = document.getElementById("myHeader")
      var sticky = header.offsetTop
      function myFunction() {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }
    }
  }
</script>
<style lang="sass">
  @import './assets/css/uimini'
  @import '../node_modules/swiper/dist/css/swiper'
  .sticky
    position: fixed
    top: 0
    z-index: 99
    display: flex
    align-items: center
    justify-content: space-between
    min-height: 80px
    background-color: #fff
    width: 100%
    max-width: 1280px
</style>

