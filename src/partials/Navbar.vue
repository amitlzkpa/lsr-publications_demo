<template>
  <div>

    <div class="p-d-flex" style="height: 40px">

      <div class="p-mr-2">
        <router-link to="/">
          <img src="/imgs/logo.png" style="height: 20px; margin-top: 12px;" />
        </router-link>
      </div>
      
      <div class="p-ml-auto">        
        <span v-if="!$auth.loading">
          <Button v-if="!$auth.isAuthenticated" @click="login" label="Login" class="p-button-secondary p-button-text" />
          <Button v-if="$auth.isAuthenticated" @click="logout" label="Logout" class="p-button-secondary p-button-text" />
        </span>
      </div>
      
    </div>

  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
}
</script>

<style>

</style>