<template>
  <div id="app">

    <Navbar />
    
    <hr />
    <router-view />
    
    <div style="background-color: #EEEEEE; position: fixed; bottom: 0px; width: 100%;">
      <div class="p-d-flex p-mr-4">
        <div class="p-mr-2">
        </div>
        <div class="p-ml-auto">
          <p>
            LSR © 2020
          </p>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Navbar from '@/partials/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
