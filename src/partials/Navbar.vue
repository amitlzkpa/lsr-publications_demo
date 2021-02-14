<template>
  <div class="navbar">

    <div class="p-d-flex">

      <div class="p-mr-2">
        <router-link to="/">
          <img src="/imgs/logo.png" style="height: 20px; margin-top: 12px;" />
        </router-link>
      </div>
      
      <div class="p-ml-auto">
        <span v-if="!$auth.loading">
          <Button v-if="!$auth.isAuthenticated" @click="login" label="Login" class="p-button-secondary p-button-text" />
          <div v-if="$auth.isAuthenticated">
            <router-link to="/project/edit" style="text-decoration: none;">
              <Button label="New" class="p-button-secondary p-button-text" />
            </router-link>
            <Button @click="logout" label="Logout" class="p-button-secondary p-button-text" />
          </div>
        </span>
      </div>

    </div>
      
    <hr />

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
.navbar {
  top: 0;
}

</style>