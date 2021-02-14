<template>
  <div id="app">

    <Navbar />
    
    <div class="content-area">
      <router-view />
    </div>

    <Footer />
    
  </div>
</template>

<script>
import Navbar from '@/partials/Navbar.vue';
import Footer from '@/partials/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.content-area {
  position: fixed;
  left: 12px;
  right: 12px;
  top: 66px;
  bottom: 64px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
